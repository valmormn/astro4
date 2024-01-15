import { defineConfig } from "astro/config";
// import bun from 'astro-bun-adapter';
import netlify from '@astrojs/netlify';
import htmx from 'astro-htmx';
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import solid from '@astrojs/solid-js';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [mdx(), htmx(), icon({
    include: {
      // mdi: ["*"], // (Default) Loads entire Material Design Icon set
      // ic:["*"]
    },
  }), solid(), svelte(), , tailwind()],
});
