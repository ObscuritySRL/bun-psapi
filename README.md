# bun-psapi

Zero-dependency, zero-overhead Win32 PSAPI bindings for [Bun](https://bun.sh) on Windows.

## Overview

`bun-psapi` exposes the `psapi.dll` exports using Bun's FFI. It provides a single class, `Psapi`, which lazily binds native symbols on first use. You can optionally preload a subset or all symbols up-front via `Preload()`.

## Features

- [Bun](https://bun.sh)-first ergonomics on Windows 10/11.
- Direct FFI to `psapi.dll` (process enumeration, module info, memory stats, working sets, device drivers, and more).
- In-source docs in `structs/Psapi.ts` with links to Microsoft Docs.
- Lazy binding on first call; optional eager preload (`Psapi.Preload()`).
- No wrapper overhead; calls map 1:1 to native APIs.
- Strongly-typed Win32 aliases (see `types/Psapi.ts`).

## Requirements

- [Bun](https://bun.sh) runtime
- Windows 10 or later

## Installation

```sh
bun add bun-psapi
```

## Quick Start

```ts
import Psapi from 'bun-psapi';

// Optionally bind a subset up-front
Psapi.Preload(['EnumProcesses', 'GetModuleBaseNameW']);

// Enumerate all process IDs
const idBuffer = Buffer.alloc(4096);
const sizeNeeded = Buffer.alloc(4);

Psapi.EnumProcesses(idBuffer.ptr, idBuffer.byteLength, sizeNeeded.ptr);

const count = sizeNeeded.readUInt32LE(0) / 4;
console.log('Processes: %d', count);
```

## Examples

Run the included example to see the library in action:

```sh
bun run example              # Process enumeration + performance info
```

## Notes

- Either rely on lazy binding or call `Psapi.Preload()`.
- Windows only. Bun runtime required.
