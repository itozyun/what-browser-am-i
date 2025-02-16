goog.provide( 'iAm.EnumDeviceType' );

goog.require( 'iAm.DEFINE.MINIFY' );

/** @enum {string|number} */
iAm.EnumDeviceType = {
    UNKNOWN      : iAm.DEFINE.MINIFY ? 0 : '',
    PC           : iAm.DEFINE.MINIFY ? 1 : 'PC',
    PHONE        : iAm.DEFINE.MINIFY ? 2 : 'PHONE',
    TABLET       : iAm.DEFINE.MINIFY ? 3 : 'TABLET',
    EINK_READER  : iAm.DEFINE.MINIFY ? 4 : 'EINK_READER',
    MEDIA_PLAYER : iAm.DEFINE.MINIFY ? 5 : 'MEDIA_PLAYER',
    TV           : iAm.DEFINE.MINIFY ? 6 : 'TV',
    GAME         : iAm.DEFINE.MINIFY ? 7 : 'GAME',
    PDA          : iAm.DEFINE.MINIFY ? 8 : 'PDA',
    CAR          : iAm.DEFINE.MINIFY ? 9 : 'CAR'
};