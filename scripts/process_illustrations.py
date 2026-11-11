"""Build responsive WebP plates from the approved illustration masters.

Light masters are the supplied engravings. Dark masters ship for the hero and
the footer skyline; every other dark plate is a tonal remap (paper -> Midnight
Index, hatch -> illustration mass, fine ink -> pale line), not a CSS invert.
The blueprint is recolored to the dark copper token with paper-colored lines.
"""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = Path("/tmp/exergy-design")
OUT = ROOT / "public" / "illustrations"
LOGO = ROOT / "public" / "logo"

PAPER = np.array([243, 234, 217], dtype=np.float32)  # #F3EAD9
MIDNIGHT = np.array([11, 23, 29], dtype=np.float32)  # #0B171D
PALE = np.array([168, 180, 200], dtype=np.float32)  # #A8B4C8
MASS = np.array([47, 65, 101], dtype=np.float32)  # #2F4165
COPPER_DARK = np.array([200, 131, 79], dtype=np.float32)  # #C8834F

# slug -> (has supplied dark master, snap the sky so it meets the canvas)
PLATES = {
    "hero-building-denver": {"dark_master": True, "sky": False, "widths": [480, 768, 1152]},
    "services-boiler": {"dark_master": False, "sky": False, "widths": [360, 640, 960]},
    "story-mechanical-room": {"dark_master": False, "sky": False, "widths": [480, 768, 1152]},
    "phases-blueprint": {"dark_master": False, "sky": False, "blueprint": True, "widths": [420, 640, 864]},
    "cta-rooftops": {"dark_master": False, "sky": True, "widths": [640, 960, 1280]},
    "footer-denver-skyline": {"dark_master": True, "sky": True, "widths": [640, 960, 1280]},
    "commercial-panorama-winter": {"dark_master": False, "sky": False, "widths": [640, 960, 1280]},
    "partners-factory-floor": {"dark_master": False, "sky": False, "widths": [640, 960, 1280]},
    "operations-control-room": {"dark_master": False, "sky": False, "widths": [640, 960, 1280]},
    "about-drafting-table": {"dark_master": False, "sky": False, "widths": [480, 768, 1280]},
    "about-mechanical-room": {"dark_master": False, "sky": False, "widths": [480, 768, 1280]},
    "about-denver-street": {"dark_master": False, "sky": False, "widths": [480, 768, 1280]},
}


def luminance(arr: np.ndarray) -> np.ndarray:
    return (0.2126 * arr[:, :, 0] + 0.7152 * arr[:, :, 1] + 0.0722 * arr[:, :, 2]) / 255.0


def snap_sky(im: Image.Image, theme: str) -> Image.Image:
    """Blend the open sky at the top of a plate into the exact canvas color."""
    arr = np.asarray(im.convert("RGB"), dtype=np.float32)
    h = arr.shape[0]
    y = np.linspace(0, 1, h, dtype=np.float32)[:, None]
    geo = np.clip((0.42 - y) / 0.18, 0, 1)
    geo = np.broadcast_to(geo, arr.shape[:2])
    lum = luminance(arr)
    if theme == "light":
        chroma = arr.max(axis=2) - arr.min(axis=2)
        qual = np.clip((lum - 0.80) / 0.10, 0, 1) * np.clip((28 - chroma) / 14, 0, 1)
        target = PAPER
    else:
        qual = np.clip((0.20 - lum) / 0.10, 0, 1)
        target = MIDNIGHT
    f = (geo * qual)[..., None]
    out = arr * (1 - f) + target * f
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))


def to_dark_engraving(im: Image.Image) -> Image.Image:
    light = np.asarray(im.convert("RGB"), dtype=np.float32)
    lum = luminance(light)
    inv = np.clip(1 - lum, 0, 1) ** 1.35
    base = MIDNIGHT * (1 - inv)[..., None] + PALE * inv[..., None]
    w = np.clip((inv - 0.15) / 0.45, 0, 1) * np.clip((0.82 - inv) / 0.30, 0, 1)
    out = base * (1 - 0.72 * w[..., None]) + MASS * (0.72 * w[..., None])
    snap = lum > 0.90
    out[snap] = MIDNIGHT
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))


def to_dark_blueprint(im: Image.Image) -> Image.Image:
    arr = np.asarray(im.convert("RGB"), dtype=np.float32)
    lum = luminance(arr) * 255.0
    line = np.clip((lum - 145.0) / 80.0, 0, 1)[..., None]
    out = COPPER_DARK * (1 - line) + PAPER * line
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))


def save_widths(im: Image.Image, slug: str, theme: str, widths: list[int]) -> None:
    master_w = im.width
    for w in widths:
        target = min(w, master_w)
        resized = im if target == master_w else im.resize(
            (target, round(im.height * target / master_w)), Image.Resampling.LANCZOS
        )
        path = OUT / f"{slug}.{theme}.{target}.webp"
        resized.save(path, "WEBP", quality=82, method=6)
    # Canonical name used when a browser ignores srcset
    im.save(OUT / f"{slug}.{theme}.webp", "WEBP", quality=82, method=6)


def noise_tile() -> None:
    rng = np.random.default_rng(2025)
    tile = rng.integers(0, 256, (160, 160), dtype=np.uint8)
    Image.fromarray(tile, mode="L").save(OUT / "paper-noise.png")


def favicons() -> None:
    src = Image.open(SRC / "logo" / "Favicon_blue1.png").convert("RGBA")
    public = ROOT / "public"
    src.resize((32, 32), Image.Resampling.LANCZOS).save(public / "favicon-32.png")
    src.resize((180, 180), Image.Resampling.LANCZOS).save(public / "apple-touch-icon.png")
    src.resize((512, 512), Image.Resampling.LANCZOS).save(public / "Favicon_blue1.png")
    # Multi-size ico for older browsers
    src.resize((32, 32), Image.Resampling.LANCZOS).save(
        public / "favicon.ico", sizes=[(32, 32)]
    )


def og_image() -> None:
    hero = Image.open(SRC / "illustrations" / "hero-building-denver.light.webp").convert("RGB")
    canvas = Image.new("RGB", (1200, 630), (243, 234, 217))
    # Cover-crop the plate into the right portion and leave paper on the left
    scale = max(760 / hero.width, 630 / hero.height)
    resized = hero.resize((round(hero.width * scale), round(hero.height * scale)), Image.Resampling.LANCZOS)
    left = 1200 - resized.width
    top = (630 - resized.height) // 2
    canvas.paste(resized, (left, top))
    canvas.save(ROOT / "public" / "og-image.jpg", "JPEG", quality=86, optimize=True)


def logos() -> None:
    LOGO.mkdir(parents=True, exist_ok=True)
    for name in ("exergy-wordmark.png", "Logo1_black_horizontal.png"):
        Image.open(SRC / "logo" / name).save(LOGO / name)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, meta in PLATES.items():
        light = Image.open(SRC / "illustrations" / f"{slug}.light.webp")
        if meta.get("sky"):
            light = snap_sky(light, "light")
        save_widths(light, slug, "light", meta["widths"])

        if meta.get("blueprint"):
            dark = to_dark_blueprint(Image.open(SRC / "illustrations" / f"{slug}.light.webp"))
        elif meta["dark_master"]:
            dark = Image.open(SRC / "illustrations" / f"{slug}.dark.webp")
            if meta.get("sky"):
                dark = snap_sky(dark, "dark")
        else:
            dark = to_dark_engraving(Image.open(SRC / "illustrations" / f"{slug}.light.webp"))
            if meta.get("sky"):
                dark = snap_sky(dark, "dark")
        save_widths(dark, slug, "dark", meta["widths"])
        print(f"{slug}: light {light.size} dark {dark.size}")

    noise_tile()
    favicons()
    og_image()
    logos()
    print("assets ready")


if __name__ == "__main__":
    main()
