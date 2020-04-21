let mix = require('laravel-mix');

mix.copyDirectory('node_modules/jquery', 'public/vendor/jquery');

mix.copyDirectory('node_modules/redoc', 'public/vendor/redoc');

mix.copyDirectory('node_modules/swagger-editor-dist', 'public/vendor/swagger-editor-dist');

mix.copyDirectory('node_modules/swagger-ui-dist', 'public/vendor/swagger-ui-dist');

