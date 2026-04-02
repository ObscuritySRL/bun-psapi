import type { Pointer } from 'bun:ffi';

export enum ListModulesFilterFlag {
  LIST_MODULES_32BIT = 0x01,
  LIST_MODULES_64BIT = 0x02,
  LIST_MODULES_ALL = 0x03,
  LIST_MODULES_DEFAULT = 0x00,
}

export type BOOL = number;
export type DWORD = number;
export type HANDLE = bigint;
export type HMODULE = bigint;
export type LPCSTR = Pointer;
export type LPCWSTR = Pointer;
export type LPDWORD = Pointer;
export type LPHMODULE = Pointer;
export type LPMODULEINFO = Pointer;
export type LPSTR = Pointer;
export type LPVOID = Pointer;
export type LPWSTR = Pointer;
export type PDWORD = Pointer;
export type PENUM_PAGE_FILE_CALLBACKA = Pointer;
export type PENUM_PAGE_FILE_CALLBACKW = Pointer;
export type PPERFORMANCE_INFORMATION = Pointer;
export type PPROCESS_MEMORY_COUNTERS = Pointer;
export type PPSAPI_WS_WATCH_INFORMATION = Pointer;
export type PPSAPI_WS_WATCH_INFORMATION_EX = Pointer;
export type PVOID = Pointer;
