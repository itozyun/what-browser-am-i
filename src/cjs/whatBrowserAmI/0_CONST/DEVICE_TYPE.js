goog.provide( 'whatBrowserAmI.DEVICE_TYPE' );

goog.require( 'whatBrowserAmI' );
goog.require( 'whatBrowserAmI.DEFINE.MINIFY' );

/** @enum {string|number} */
whatBrowserAmI.DEVICE_TYPE = {
    UNKNOWN      : whatBrowserAmI.DEFINE.MINIFY ? 0 : 'UNKNOWN_DEVICE_TYPE',
    PC           : whatBrowserAmI.DEFINE.MINIFY ? 1 : 'PC',
    PHONE        : whatBrowserAmI.DEFINE.MINIFY ? 2 : 'PHONE',
    TABLET       : whatBrowserAmI.DEFINE.MINIFY ? 3 : 'TABLET',
    EBOOK_READER : whatBrowserAmI.DEFINE.MINIFY ? 4 : 'EBOOK_READER',
    MEDIA_PLAYER : whatBrowserAmI.DEFINE.MINIFY ? 5 : 'MEDIA_PLAYER',
    TV           : whatBrowserAmI.DEFINE.MINIFY ? 6 : 'TV',
    GAME         : whatBrowserAmI.DEFINE.MINIFY ? 7 : 'GAME',
    PDA          : whatBrowserAmI.DEFINE.MINIFY ? 8 : 'PDA',
    CAR          : whatBrowserAmI.DEFINE.MINIFY ? 9 : 'CAR'
};