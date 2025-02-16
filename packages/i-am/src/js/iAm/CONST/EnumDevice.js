goog.provide( 'iAm.EnumDevice' );

goog.require( 'iAm.DEFINE.MINIFY' );

/** @enum {string|number} */
iAm.EnumDevice = {
    Unknown             : iAm.DEFINE.MINIFY ?  0 : '',

    SONY_mylo           : iAm.DEFINE.MINIFY ?  1 : 'mylo',
    NewNintendo3DS      : iAm.DEFINE.MINIFY ?  2 : 'NewNintendo3DS',
    Nintendo3DS         : iAm.DEFINE.MINIFY ?  3 : 'Nintendo3DS',
    NintendoDS          : iAm.DEFINE.MINIFY ?  4 : 'NintendoDS',
    NintendoDSi         : iAm.DEFINE.MINIFY ?  5 : 'NintendoDSi',
    NintendoSwitch      : iAm.DEFINE.MINIFY ?  6 : 'NintendoSwitch',
    PlayStation         : iAm.DEFINE.MINIFY ?  7 : 'PlayStation',
    PlayStationPortable : iAm.DEFINE.MINIFY ?  8 : 'PlayStationPortable',
    PlayStationVita     : iAm.DEFINE.MINIFY ?  9 : 'PlayStationVita',
    Wii                 : iAm.DEFINE.MINIFY ? 10 : 'Wii',
    WiiU                : iAm.DEFINE.MINIFY ? 11 : 'WiiU',
    Xbox360             : iAm.DEFINE.MINIFY ? 12 : 'Xbox360',
    XboxOne             : iAm.DEFINE.MINIFY ? 13 : 'XboxOne',
    XboxSeries          : iAm.DEFINE.MINIFY ? 14 : 'XboxSeries',
    iPhone              : iAm.DEFINE.MINIFY ? 15 : 'iPhone',
    iPod                : iAm.DEFINE.MINIFY ? 16 : 'iPod',
    iPad                : iAm.DEFINE.MINIFY ? 17 : 'iPad',
    BOOX                : iAm.DEFINE.MINIFY ? 18 : 'BOOX',
    Cybook              : iAm.DEFINE.MINIFY ? 19 : 'Cybook',
    eClicto             : iAm.DEFINE.MINIFY ? 20 : 'eClicto',
    Fidibook            : iAm.DEFINE.MINIFY ? 21 : 'Fidibook',
    FireTV              : iAm.DEFINE.MINIFY ? 22 : 'FireTV',
    Hisense             : iAm.DEFINE.MINIFY ? 23 : 'Hisense',
    icarus              : iAm.DEFINE.MINIFY ? 24 : 'icarus',
    Kindle              : iAm.DEFINE.MINIFY ? 25 : 'Kindle',
    KindleFire          : iAm.DEFINE.MINIFY ? 26 : 'KindleFire',
    Kobo                : iAm.DEFINE.MINIFY ? 27 : 'Kobo',
    Likebook            : iAm.DEFINE.MINIFY ? 28 : 'Likebook',
    Manta               : iAm.DEFINE.MINIFY ? 29 : 'Manta',
    Movistar            : iAm.DEFINE.MINIFY ? 30 : 'Movistar',
    Nook                : iAm.DEFINE.MINIFY ? 31 : 'Nook',
    PocketBook          : iAm.DEFINE.MINIFY ? 32 : 'PocketBook',
    SonyReader          : iAm.DEFINE.MINIFY ? 33 : 'SonyReader',
    Tolino              : iAm.DEFINE.MINIFY ? 34 : 'Tolino'
};