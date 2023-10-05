import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/static';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), sitemap(), partytown()],
  output: "server",
  adapter: vercel({
    analytics: true
  }),
});
