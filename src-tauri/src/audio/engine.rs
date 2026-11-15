//! cpal stream initialization & audio callback.
//!
//! The audio callback must never block or allocate: commands from the UI
//! thread arrive through `rtrb` ring buffers.
