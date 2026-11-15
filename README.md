# deckless-dj (Apollon)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Greek name explained (optional)
>
> [Source](https://en.wikipedia.org/wiki/Apollo)

---

Short Description

**Author:** [Simon Stockinger](https://github.com/simonstockinger)

---

## Contents

- [Overview](#Overview)
- [Features](#features)
- [Installation](#Installation)
- [Usage](#usage)
- [Releases](#releases)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Overview

## Features

### Topic

| Feature      | Description |
| ------------ | ----------- |
| **Features** | ...         |

## Installation

**Prerequisites:**

### Package Managers

:

## Usage

### Topic

<details>
<summary><strong>Navigation</strong></summary>

| Key                                | Action                                   |
| ---------------------------------- | ---------------------------------------- |
| `j` / `k` or `↓` / `↑`             | Move down/up                             |
| `g` / `G` or `Home` / `End`        | Jump to top/bottom                       |
| `p`                                | Jump to parent heading                   |
| `d` / `u` or `PageDown` / `PageUp` | Page down/up                             |
| `Tab`                              | Switch focus between outline and content |
| `1`-`9`                            | Jump to heading by number                |
| ``                                 |                                          |
|                                    |                                          |

**Makros**

| `Key`            | `Action`                   |
| ---------------- | -------------------------- |
| `alt gr` + <key> | Record _Makros_ into <key> |

</details>

## Releases

### Pre-built Binaries

Download from the [releases page](https://github.com/SimonStockinger/<deckless-dj>/releases):
See [CHANGELOG](<>) for the major changes in each release.

| Platform                    | Binary      |
| --------------------------- | ----------- |
| Linux x86_64                | `<release>` |
| Linux ARM64                 | `<release>` |
| macOS x86_64                | `<release>` |
| macOS ARM64 (Apple Silicon) | `<release>` |
| Windows x86_64              | `<release>` |

**macOS binaries** are signed with Developer ID and notarized by Apple.

### Building from Source

```bash

```

Artifacts are output to `target/release-artifacts/`.

## Documentation

### Repository Structure

```
deckless-dj/
├── src/                      # TypeScript Frontend
│   ├── components/           # Deck, Mixer, WaveformCanvas, Library
│   ├── input/                # Keyboard hotkey & trackpad gesture engine
│   └── state/                # Reactive telemetry stores (playhead, VU meters)
└── src-tauri/                # Rust Backend
    ├── Cargo.toml
    └── src/
        ├── main.rs           # Tauri entry point & IPC commands
        ├── audio/
        │   ├── engine.rs     # cpal stream initialization & audio callback
        │   ├── deck.rs       # Track buffer, playhead, EQ, & pitch state
        │   └── decoder.rs    # symphonia background track decoding
        └── library/          # SQLite database & BPM/waveform analysis
```

### Architecture

## Roadmap

**Completed**

- [x] ...

**Planned**

- [ ] ...

## Contributing

### Contact

## Acknowledgements

[![Built With ...](https://...)

## License

Copyright (c) Simon Stockinger. See [MIT-LICENSE.txt](LICENSE) for details.
