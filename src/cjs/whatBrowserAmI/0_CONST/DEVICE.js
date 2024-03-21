goog.provide( 'whatBrowserAmI.DEVICE' );

goog.require( 'whatBrowserAmI' );
goog.require( 'whatBrowserAmI.DEFINE.MINIFY' );

/** @enum {string|number} */
whatBrowserAmI.DEVICE = {
    Unknown : whatBrowserAmI.DEFINE.MINIFY ? 0 : 'UNKNOWN_DEVICE',
    iPhone  : whatBrowserAmI.DEFINE.MINIFY ? 1 : 'iPhone',
    iPod    : whatBrowserAmI.DEFINE.MINIFY ? 2 : 'iPod',
    iPad    : whatBrowserAmI.DEFINE.MINIFY ? 3 : 'iPad'
};