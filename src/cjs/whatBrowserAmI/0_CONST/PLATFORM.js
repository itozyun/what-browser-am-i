goog.provide( 'whatBrowserAmI.PLATFORM' );

goog.require( 'whatBrowserAmI' );
goog.require( 'whatBrowserAmI.DEFINE.MINIFY' );

/** @enum {string|number} */
whatBrowserAmI.PLATFORM = {
    Unknown             : whatBrowserAmI.DEFINE.MINIFY ?  0 : 'UnknownPlatform',
    NintendoDS          : whatBrowserAmI.DEFINE.MINIFY ?  1 : 'NintendoDS',
    NintendoDSi         : whatBrowserAmI.DEFINE.MINIFY ?  2 : 'NintendoDSi',
    Nintendo3DS         : whatBrowserAmI.DEFINE.MINIFY ?  3 : 'Nintendo3DS',
    NewNintendo3DS      : whatBrowserAmI.DEFINE.MINIFY ?  4 : 'NewNintendo3DS',
    Wii                 : whatBrowserAmI.DEFINE.MINIFY ?  5 : 'Wii',
    WiiU                : whatBrowserAmI.DEFINE.MINIFY ?  6 : 'WiiU',
    NintendoSwitch      : whatBrowserAmI.DEFINE.MINIFY ?  7 : 'NintendoSwitch',
    PlayStationPortable : whatBrowserAmI.DEFINE.MINIFY ?  8 : 'PlayStationPortable',
    PlayStationVita     : whatBrowserAmI.DEFINE.MINIFY ?  9 : 'PlayStationVita',
    PlayStation3        : whatBrowserAmI.DEFINE.MINIFY ? 10 : 'PlayStation3', // PlayStation2 ?
    PlayStation4        : whatBrowserAmI.DEFINE.MINIFY ? 11 : 'PlayStation4',
    PlayStation5        : whatBrowserAmI.DEFINE.MINIFY ? 12 : 'PlayStation5',
    Xbox360             : whatBrowserAmI.DEFINE.MINIFY ? 13 : 'Xbox360',
    XboxOne             : whatBrowserAmI.DEFINE.MINIFY ? 14 : 'XboxOne',
    XboxSeries          : whatBrowserAmI.DEFINE.MINIFY ? 15 : 'XboxSeries',
    FeaturePhone        : whatBrowserAmI.DEFINE.MINIFY ? 16 : 'FeaturePhone',
    mylo                : whatBrowserAmI.DEFINE.MINIFY ? 17 : 'mylo',
    Kobo                : whatBrowserAmI.DEFINE.MINIFY ? 18 : 'Kobo',
    SonyReader          : whatBrowserAmI.DEFINE.MINIFY ? 19 : 'SonyReader',
    Kindle              : whatBrowserAmI.DEFINE.MINIFY ? 20 : 'Kindle',
    WindowsCE           : whatBrowserAmI.DEFINE.MINIFY ? 21 : 'WindowsCE',
    WindowsMobile       : whatBrowserAmI.DEFINE.MINIFY ? 22 : 'WindowsMobile',
    WindowsPhone        : whatBrowserAmI.DEFINE.MINIFY ? 23 : 'WindowsPhone',
    iOS                 : whatBrowserAmI.DEFINE.MINIFY ? 24 : 'iOS',
    iPadOS              : whatBrowserAmI.DEFINE.MINIFY ? 25 : 'iPadOS',
    WatchOS             : whatBrowserAmI.DEFINE.MINIFY ? 26 : 'WatchOS', 
    Android             : whatBrowserAmI.DEFINE.MINIFY ? 27 : 'Android',
    FireOS              : whatBrowserAmI.DEFINE.MINIFY ? 28 : 'FireOS',
    ChromeOS            : whatBrowserAmI.DEFINE.MINIFY ? 29 : 'ChromeOS',
    FirefoxOS           : whatBrowserAmI.DEFINE.MINIFY ? 30 : 'FirefoxOS',
    KaiOS               : whatBrowserAmI.DEFINE.MINIFY ? 31 : 'KaiOS',
    SymbianS60          : whatBrowserAmI.DEFINE.MINIFY ? 32 : 'SymbianS60',
    MeeGo               : whatBrowserAmI.DEFINE.MINIFY ? 33 : 'MeeGo',
    Maemo               : whatBrowserAmI.DEFINE.MINIFY ? 34 : 'Maemo',
    WebOS               : whatBrowserAmI.DEFINE.MINIFY ? 35 : 'WebOS',
    Tizen               : whatBrowserAmI.DEFINE.MINIFY ? 36 : 'Tizen',
    BlackBerry          : whatBrowserAmI.DEFINE.MINIFY ? 37 : 'BlackBerry',
    Windows16           : whatBrowserAmI.DEFINE.MINIFY ? 38 : 'Windows16',
    Windows             : whatBrowserAmI.DEFINE.MINIFY ? 39 : 'Windows',
    MacPPC              : whatBrowserAmI.DEFINE.MINIFY ? 41 : 'MacPPC',
    Mac68K              : whatBrowserAmI.DEFINE.MINIFY ? 42 : 'Mac68K',
    MacIntel            : whatBrowserAmI.DEFINE.MINIFY ? 43 : 'MacIntel',
    MacM1               : whatBrowserAmI.DEFINE.MINIFY ? 44 : 'MacM1', // https://stackoverflow.com/questions/64853342/whats-the-value-of-navigator-platform-on-arm-macs
    SunOS               : whatBrowserAmI.DEFINE.MINIFY ? 45 : 'SunOS',
    FreeBSD             : whatBrowserAmI.DEFINE.MINIFY ? 46 : 'FreeBSD',
    OpenBSD             : whatBrowserAmI.DEFINE.MINIFY ? 47 : 'OpenBSD',
    NetBSD              : whatBrowserAmI.DEFINE.MINIFY ? 48 : 'NetBSD',
    Ubuntu              : whatBrowserAmI.DEFINE.MINIFY ? 49 : 'Ubuntu',
    Mint                : whatBrowserAmI.DEFINE.MINIFY ? 50 : 'Mint',
    Fedora              : whatBrowserAmI.DEFINE.MINIFY ? 51 : 'Fedora',
    Gentoo              : whatBrowserAmI.DEFINE.MINIFY ? 52 : 'Gento',
    Linux               : whatBrowserAmI.DEFINE.MINIFY ? 53 : 'Linux'
};