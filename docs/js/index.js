'use strict';

var anchors = require('exports?anchors!../../node_modules/anchor-js/anchor.js');

/**
 * Add anchors.
 * @{@link  http://bryanbraun.github.io/anchorjs/#basic-usage}
 */
anchors.options.placement = 'left';
anchors.add([
    '.luster-docs-content > h2',
    '.luster-docs-content > h3',
    '.luster-docs-content > h4',
    '.luster-docs-content > h5',
    '.luster-docs-content > h6',
].join(', '));
