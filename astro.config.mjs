import { defineConfig } from 'astro/config';
import elmPlugin from "vite-plugin-elm"

console.log(elmPlugin)

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [elmPlugin.default()]
    }
});
