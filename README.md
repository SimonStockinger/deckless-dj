# deckless-dj (Apollon)







## Repository Structure
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
