import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    // root: 'public', // tell Vite where index.html is
    // build: {
    //     outDir: '../dist' // output to dist at root level
    // },
    plugins: [
        viteStaticCopy({
            targets: [
                { src: 'node_modules/jquery/dist', dest: 'vendor/jquery' },
                { src: 'node_modules/redoc/bundles', dest: 'vendor/redoc' },
                { src: 'node_modules/swagger-editor-dist/*', dest: 'vendor/swagger-editor/dist' },
                { src: 'node_modules/swagger-ui-dist/*', dest: 'vendor/swagger-ui/dist' },
            ]
        })
    ],
});
