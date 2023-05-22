const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js("resources/js/app.jsx", "public/js").postCss(
//     "resources/css/app.css",
//     "public/css",
//     [
//         //
//     ]
// );

mix.react("resources/js/app.jsx", "public/js")
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .webpackConfig({
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                "@": path.resolve(__dirname, "resources/js"),
            },
        },
        output: {
            chunkFilename: "js/[name].js?id=[chunkhash]",
        },
    });