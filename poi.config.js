const pkg = require('./package.json');

const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const VersionPlugin = require('./assets/webpack/version_plugin.js');
const jsonminify = require('jsonminify');
const htmlminify = require('html-minifier').minify;

module.exports = options => ({
    vendor: false,
    html: [
        {
            title: pkg.productName || pkg.name,
            description: pkg.description,
            filename: 'enhance.html', // the name of the output file
            template: 'src/enhance.ejs'
        }
    ],
    filename: {
        js: `enhance.min.js`,
        css: `enhance.min.css`
    },
    homepage: './',
    devServer: {
        historyApiFallback: {
            disableDotRule: true
        },
        historyApiFallback: {
            rewrites: [{ from: /./, to: '/pages/404.html' }]
        }
    },
    sourceMap: true,
    /*
    copy: [
        {
            from: path.resolve(__dirname, 'assets'),
            to: path.resolve(__dirname, 'dist/assets'),
            transform(content, path) {
                // minify files only for a production build
                if (options.mode !== 'production') {
                    return content;
                }

                // minify .json files
                if (/\.json$/gi.test(path)) {
                    return jsonminify(content.toString());
                }

                // minify .html files
                if (/\.html$/gi.test(path)) {
                    return htmlminify(content.toString(), { collapseWhitespace: true, minifyCSS: true });
                }

                return content;
            }
        }
    ],
    */
    // open the explore data page on localhost:3001 by default when running `npm run dev`
    /*  devServer: {
        index: 'explore-data-fr.html'
    }, */
    presets: [
        // there is problem with using babel-minify if you want to have source maps as well: https://github.com/webpack-contrib/babel-minify-webpack-plugin/issues/68
        // TODO: cannot uglify with babel without the EI hack in vuex store
        // see IE11 issue here for details https://github.com/istrib/vuex-typescript/issues/13
        // require('poi-preset-babel-minify')({}, { comments: false }),
        require('poi-preset-typescript')(),
        require('poi-preset-karma')({
            port: 5001, // default
            files: ['test/unit/*.ts'] // default,
        })
    ],
    extendWebpack(config) {
        // enable to see the bundle structure
        // config.plugin('bundleAnalyzer').use(BundleAnalyzerPlugin);

        config.plugin('versionPlugin').use(VersionPlugin);

        // add a loader for csv translation files
        config.module
            .rule('lint')
            .test(/\.csv$/)
            .use('eslint')
            .loader('dsv-loader');
    }
    /*,
    karma: {
        mime: {
            'text/x-typescript': ['ts']
        },
        preprocessors: {
            'test/unit/*.ts': ['webpack', 'sourcemap']
        }
    }
    */
});
