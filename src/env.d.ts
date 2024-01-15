/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import type { HTMLAttributes } from "astro/types";

type ButtonWithHTMX = ButtonHTMLAttributes<HTMLButtonElement> & {
    _?: string;
  };