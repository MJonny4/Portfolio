import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({
        applyBaseStyles: true
    }), icon(), react()],
    site: 'https://www.ximuntion.dev',
});