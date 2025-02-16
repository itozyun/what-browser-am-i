goog.provide( 'who.DEVICE_TYPE' );

goog.require( 'who.DEFINE.MINIFY' );

/** @enum {string|number} */
who.DEVICE_TYPE = {
    UNKNOWN      : who.DEFINE.MINIFY ? 0 : '',
    PC           : who.DEFINE.MINIFY ? 1 : 'PC',
    PHONE        : who.DEFINE.MINIFY ? 2 : 'PHONE',
    TABLET       : who.DEFINE.MINIFY ? 3 : 'TABLET',
    EINK_READER  : who.DEFINE.MINIFY ? 4 : 'EINK_READER',
    MEDIA_PLAYER : who.DEFINE.MINIFY ? 5 : 'MEDIA_PLAYER',
    TV           : who.DEFINE.MINIFY ? 6 : 'TV',
    GAME         : who.DEFINE.MINIFY ? 7 : 'GAME',
    PDA          : who.DEFINE.MINIFY ? 8 : 'PDA',
    CAR          : who.DEFINE.MINIFY ? 9 : 'CAR'
};