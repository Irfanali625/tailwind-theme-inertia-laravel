import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        laravel({
            input: [ 'resources/js/app.js', 'resources/scss/main.scss'],
            refresh: true,
        }),
        vue({
            transformAssetUrls: {
                base: null,
                includeAbsolute: false,
            }
        }),
    ],
    css: {
        devSourcemap: true,
    }
});

