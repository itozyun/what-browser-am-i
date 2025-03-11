goog.provide( 'iAm.EnumDeviceType' );

goog.require( 'iAm.DEFINE.MINIFY' );
goog.require( 'iAm.UNKNOWN_VALUE' );

/** @enum {string|number} */
iAm.EnumDeviceType = {
    Unknown     : iAm.UNKNOWN_VALUE,
    PC          : iAm.DEFINE.MINIFY ? 1 : 'PC',
    Phone       : iAm.DEFINE.MINIFY ? 2 : 'Phone',
    Tablet      : iAm.DEFINE.MINIFY ? 3 : 'Tablet',
    EInkReader  : iAm.DEFINE.MINIFY ? 4 : 'EInkReader',
    MediaPlayer : iAm.DEFINE.MINIFY ? 5 : 'MediaPlayer',
    TV          : iAm.DEFINE.MINIFY ? 6 : 'TV',
    Game        : iAm.DEFINE.MINIFY ? 7 : 'Game',
    PDA         : iAm.DEFINE.MINIFY ? 8 : 'PDA',
    Car         : iAm.DEFINE.MINIFY ? 9 : 'Car'
};