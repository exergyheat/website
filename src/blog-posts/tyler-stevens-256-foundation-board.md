---
id: tyler-stevens-256-foundation-board
title: "Tyler Stevens Joins the 256 Foundation Board as President"
excerpt: "Exergy's founder takes the helm at the nonprofit building the open-source infrastructure that building-integrated mining depends on — the hardware, firmware, and software stack that no single manufacturer will ever build for you."
author: Exergy
date: 2026-02-01
category: ["Announcement", "Open Source"]
image: /256f-board-announcement.jpeg
readTime: 5 min read
---

Effective February 2026, Exergy founder Tyler Stevens has joined the board of the [256 Foundation](https://256foundation.org) as President, succeeding Rod Roudi (Bitkite), who co-founded the organization.

The 256 Foundation is a 501(c)(3) nonprofit with one mission: dismantle centralized control over Bitcoin mining infrastructure by funding free and open-source hardware, firmware, and software. Every dollar donated passes through directly to developers working on the foundational layer of the mining stack.

## Why This Matters

Building-integrated mining sounds straightforward in principle. A miner is a black box: electricity goes in, heat and Bitcoin come out. Put it where the heat is useful — inside a building — and you've stopped paying for heat twice.

The principle is simple. The execution depends on infrastructure that doesn't fully exist yet.

Every mining device available today was engineered for a data center. The firmware is largely closed-source. No chip manufacturer sells directly to appliance builders. Form factors were optimized for rack-mount density, not mechanical rooms or residential acoustics. One Chinese manufacturer controls approximately 90% of mining hardware and firmware. Four pool operators manage roughly 90% of global hashrate. The infrastructure is, at its core, monopolistic in a way that no other electronics category would tolerate.

This creates a structural ceiling on what building-integrated mining can become. Without open reference designs, every integration is locked to whatever the manufacturer decides to support. Without auditable firmware, a building owner can't know what their miner is actually doing. Without open pool infrastructure, direct coinbase payouts — the closest thing to sovereign money — stay out of reach for most people.

The 256 Foundation is solving all of this at the infrastructure layer.

## What the Foundation Builds

The foundation funds four interconnected projects that together constitute a complete open-source mining stack:

**Ember One** is an open-source hardware reference design for a Bitcoin mining hash board — the component that contains the ASIC chips. There has never been one before. Any company, researcher, or builder can take this design, modify it, manufacture it, and build products around it. This is the foundational layer.

**Mujina** is open-source Bitcoin mining firmware written in Rust — described by its developers as the Linux kernel of Bitcoin mining firmware. Closed-source firmware can be silently updated, can enforce restrictions, can collect operational data, and can be used as a lever of control. Mujina is auditable, forkable, and censorship-resistant. It runs on Ember One hardware and is also compatible with existing commercial miners.

**Libre Board** is an open-source control board: the brain that connects hash boards, power supplies, networking, and user interfaces. Critically, the Libre Board was explicitly designed to enable hashrate heating integration, solar mining controllers, and Home Assistant connectivity. It can run a full Bitcoin node, a Stratum server, and Home Assistant simultaneously on the same device. This is the piece that makes a building-native miner — one designed from the ground up for a mechanical room — possible.

**Hydrapool** is open-source mining pool software. All major pools today run on closed-source infrastructure. Hydrapool enables anyone to operate a pool and supports direct coinbase payouts with zero custodial risk.

Together, these four projects enable something that doesn't yet exist: a complete mining stack where any company can take an ASIC chip, build on open hardware reference designs, flash open firmware, and connect to an open pool protocol. The result is a competitive market of purpose-built mining appliances — products designed specifically for mechanical rooms, hydronic loops, solar arrays, and residential electrical standards.

What solar inverters are today — standardized, competitive, installable by a licensed electrician — miners can become.

## Why Exergy Is Aligned With This

Everything Exergy builds is designed to be compatible with and to accelerate the open-source stack. That's not altruism — it's the only path to making building-integrated mining mainstream. Hardware that any builder can make, software that any developer can improve, installations that any trades professional can learn. That outcome requires an open foundation. The 256 Foundation is building it.

Libre Board is the most direct example. A control board explicitly designed for hashrate heating integration, solar mining controllers, and Home Assistant connectivity is exactly what Exergy's systems are built around today. Open-source software runs the control layer in every Exergy install. Open pool protocols are what make direct, KYC-free Bitcoin accumulation possible for the building owners we work with.

The centralization problem in mining isn't abstract to Exergy. It's a practical constraint on every system we design. Miners change form factors frequently, but heating infrastructure is built to last decades. Without open-source reference designs and industry standards for how mining hardware interfaces with building thermal systems, every integration is currently dependent on the manufacturer's choices. That's a real constraint, and the 256 Foundation is the right organization to fix it.

## On Succeeding the Co-Founder

Rod Roudi (Bitkite) co-founded the 256 Foundation and built the organizational foundation that made its current work possible. Tyler's appointment as President is a continuation of that work, not a redirection of it. The mission is unchanged. The urgency is the same.

The open-source mining stack needs more resources, more visibility, and stronger connection to the builders and integrators putting real systems into real buildings. That's where Exergy sits, and that's what Tyler brings to the board.

## What Comes Next

The 256 Foundation's core work continues: Ember One, Mujina, Libre Board, and Hydrapool are each in active development, funded by a community of donors who understand why the infrastructure layer matters.

Exergy will continue building within this ecosystem — open-source Home Assistant integrations, systems designed to be compatible with open firmware, and a business model that bets on the stack becoming mainstream rather than on any single manufacturer's roadmap.

For information on the 256 Foundation or to support the work: [256foundation.org](https://256foundation.org).
