
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    files: [
        '_gh_pages/**/*',
        'dist/*',
    ],
    server: {
        baseDir: '_gh_pages',
        index: 'index.html',
        routes: {
            '/dist': 'dist',
            '/node_modules': 'node_modules',
            '/vendor': 'vendor',
        },
    },
    port: 4001,
    open: false,
    notify: false,
};
