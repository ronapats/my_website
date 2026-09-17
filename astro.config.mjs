import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Update `site` once a custom domain is attached — Netlify's own
// subdomain works fine for now and Astro only uses this for the
// sitemap / canonical URLs.
export default defineConfig({
  site: "https://example.netlify.app",
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
});
