goog.provide( 'whatBrowserAmI.DEVICE' );

goog.require( 'whatBrowserAmI.DEFINE.MINIFY' );

/** @enum {string|number} */
whatBrowserAmI.DEVICE = {
    Unknown             : whatBrowserAmI.DEFINE.MINIFY ?  0 : '',

    SONY_mylo           : whatBrowserAmI.DEFINE.MINIFY ?  1 : 'mylo',
    NewNintendo3DS      : whatBrowserAmI.DEFINE.MINIFY ?  2 : 'NewNintendo3DS',
    Nintendo3DS         : whatBrowserAmI.DEFINE.MINIFY ?  3 : 'Nintendo3DS',
    NintendoDS          : whatBrowserAmI.DEFINE.MINIFY ?  4 : 'NintendoDS',
    NintendoDSi         : whatBrowserAmI.DEFINE.MINIFY ?  5 : 'NintendoDSi',
    NintendoSwitch      : whatBrowserAmI.DEFINE.MINIFY ?  6 : 'NintendoSwitch',
    PlayStation         : whatBrowserAmI.DEFINE.MINIFY ?  7 : 'PlayStation',
    PlayStationPortable : whatBrowserAmI.DEFINE.MINIFY ?  8 : 'PlayStationPortable',
    PlayStationVita     : whatBrowserAmI.DEFINE.MINIFY ?  9 : 'PlayStationVita',
    Wii                 : whatBrowserAmI.DEFINE.MINIFY ? 10 : 'Wii',
    WiiU                : whatBrowserAmI.DEFINE.MINIFY ? 11 : 'WiiU',
    Xbox360             : whatBrowserAmI.DEFINE.MINIFY ? 12 : 'Xbox360',
    XboxOne             : whatBrowserAmI.DEFINE.MINIFY ? 13 : 'XboxOne',
    XboxSeries          : whatBrowserAmI.DEFINE.MINIFY ? 14 : 'XboxSeries',
    iPhone              : whatBrowserAmI.DEFINE.MINIFY ? 15 : 'iPhone',
    iPod                : whatBrowserAmI.DEFINE.MINIFY ? 16 : 'iPod',
    iPad                : whatBrowserAmI.DEFINE.MINIFY ? 17 : 'iPad',
    BOOX                : whatBrowserAmI.DEFINE.MINIFY ? 18 : 'BOOX',
    Cybook              : whatBrowserAmI.DEFINE.MINIFY ? 19 : 'Cybook',
    eClicto             : whatBrowserAmI.DEFINE.MINIFY ? 20 : 'eClicto',
    Fidibook            : whatBrowserAmI.DEFINE.MINIFY ? 21 : 'Fidibook',
    FireTV              : whatBrowserAmI.DEFINE.MINIFY ? 22 : 'FireTV',
    Hisense             : whatBrowserAmI.DEFINE.MINIFY ? 23 : 'Hisense',
    icarus              : whatBrowserAmI.DEFINE.MINIFY ? 24 : 'icarus',
    Kindle              : whatBrowserAmI.DEFINE.MINIFY ? 25 : 'Kindle',
    KindleFire          : whatBrowserAmI.DEFINE.MINIFY ? 26 : 'KindleFire',
    Kobo                : whatBrowserAmI.DEFINE.MINIFY ? 27 : 'Kobo',
    Likebook            : whatBrowserAmI.DEFINE.MINIFY ? 28 : 'Likebook',
    Manta               : whatBrowserAmI.DEFINE.MINIFY ? 29 : 'Manta',
    Movistar            : whatBrowserAmI.DEFINE.MINIFY ? 30 : 'Movistar',
    Nook                : whatBrowserAmI.DEFINE.MINIFY ? 31 : 'Nook',
    PocketBook          : whatBrowserAmI.DEFINE.MINIFY ? 32 : 'PocketBook',
    SonyReader          : whatBrowserAmI.DEFINE.MINIFY ? 33 : 'SonyReader',
    Tolino              : whatBrowserAmI.DEFINE.MINIFY ? 34 : 'Tolino'
};