// Applies the stored (or system) theme before first paint to prevent a
// light-mode flash for dark-mode users. Kept as an external file so it
// works under a CSP without 'unsafe-inline'.
(function () {
  try {
    var theme = localStorage.getItem('theme')
    var dark =
      theme === 'dark' ||
      ((!theme || theme === 'system') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.add(dark ? 'dark' : 'light')
  } catch (e) {
    /* default to light */
  }
})()
