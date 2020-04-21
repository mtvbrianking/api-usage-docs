let mix = require('laravel-mix');

mix.copyDirectory('node_modules/jquery/dist', 'public/vendor/jquery/dist');

mix.copyDirectory('node_modules/redoc/bundles', 'public/vendor/redoc/bundles');

mix.copyDirectory('node_modules/swagger-editor-dist', 'public/vendor/swagger-editor-dist');

mix.copyDirectory('node_modules/swagger-ui-dist', 'public/vendor/swagger-ui-dist');
