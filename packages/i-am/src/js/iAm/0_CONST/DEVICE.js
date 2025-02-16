goog.provide( 'who.DEVICE' );

goog.require( 'who.DEFINE.MINIFY' );

/** @enum {string|number} */
who.DEVICE = {
    Unknown             : who.DEFINE.MINIFY ?  0 : '',

    SONY_mylo           : who.DEFINE.MINIFY ?  1 : 'mylo',
    NewNintendo3DS      : who.DEFINE.MINIFY ?  2 : 'NewNintendo3DS',
    Nintendo3DS         : who.DEFINE.MINIFY ?  3 : 'Nintendo3DS',
    NintendoDS          : who.DEFINE.MINIFY ?  4 : 'NintendoDS',
    NintendoDSi         : who.DEFINE.MINIFY ?  5 : 'NintendoDSi',
    NintendoSwitch      : who.DEFINE.MINIFY ?  6 : 'NintendoSwitch',
    PlayStation         : who.DEFINE.MINIFY ?  7 : 'PlayStation',
    PlayStationPortable : who.DEFINE.MINIFY ?  8 : 'PlayStationPortable',
    PlayStationVita     : who.DEFINE.MINIFY ?  9 : 'PlayStationVita',
    Wii                 : who.DEFINE.MINIFY ? 10 : 'Wii',
    WiiU                : who.DEFINE.MINIFY ? 11 : 'WiiU',
    Xbox360             : who.DEFINE.MINIFY ? 12 : 'Xbox360',
    XboxOne             : who.DEFINE.MINIFY ? 13 : 'XboxOne',
    XboxSeries          : who.DEFINE.MINIFY ? 14 : 'XboxSeries',
    iPhone              : who.DEFINE.MINIFY ? 15 : 'iPhone',
    iPod                : who.DEFINE.MINIFY ? 16 : 'iPod',
    iPad                : who.DEFINE.MINIFY ? 17 : 'iPad',
    BOOX                : who.DEFINE.MINIFY ? 18 : 'BOOX',
    Cybook              : who.DEFINE.MINIFY ? 19 : 'Cybook',
    eClicto             : who.DEFINE.MINIFY ? 20 : 'eClicto',
    Fidibook            : who.DEFINE.MINIFY ? 21 : 'Fidibook',
    FireTV              : who.DEFINE.MINIFY ? 22 : 'FireTV',
    Hisense             : who.DEFINE.MINIFY ? 23 : 'Hisense',
    icarus              : who.DEFINE.MINIFY ? 24 : 'icarus',
    Kindle              : who.DEFINE.MINIFY ? 25 : 'Kindle',
    KindleFire          : who.DEFINE.MINIFY ? 26 : 'KindleFire',
    Kobo                : who.DEFINE.MINIFY ? 27 : 'Kobo',
    Likebook            : who.DEFINE.MINIFY ? 28 : 'Likebook',
    Manta               : who.DEFINE.MINIFY ? 29 : 'Manta',
    Movistar            : who.DEFINE.MINIFY ? 30 : 'Movistar',
    Nook                : who.DEFINE.MINIFY ? 31 : 'Nook',
    PocketBook          : who.DEFINE.MINIFY ? 32 : 'PocketBook',
    SonyReader          : who.DEFINE.MINIFY ? 33 : 'SonyReader',
    Tolino              : who.DEFINE.MINIFY ? 34 : 'Tolino'
};