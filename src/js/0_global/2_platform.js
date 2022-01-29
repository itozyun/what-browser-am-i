var WHAT_BROWSER_AM_I__PLATFORM_unknown       = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  0 : '',
    WHAT_BROWSER_AM_I__PLATFORM_NDS           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  1 : 'NDS',
    WHAT_BROWSER_AM_I__PLATFORM_NDSi          = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  2 : 'NDSi',
    WHAT_BROWSER_AM_I__PLATFORM_N3DS          = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  3 : 'N3DS',
    WHAT_BROWSER_AM_I__PLATFORM_New3DS        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  4 : 'New3DS',
    WHAT_BROWSER_AM_I__PLATFORM_Wii           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  5 : 'Wii',
    WHAT_BROWSER_AM_I__PLATFORM_WiiU          = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  6 : 'WiiU',
    WHAT_BROWSER_AM_I__PLATFORM_Switch        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  7 : 'Switch',
    WHAT_BROWSER_AM_I__PLATFORM_PSP           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  8 : 'PSP',
    WHAT_BROWSER_AM_I__PLATFORM_PSPGo         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ?  9 : 'PSPGo',
    WHAT_BROWSER_AM_I__PLATFORM_PSVita        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 10 : 'PSVita',
    WHAT_BROWSER_AM_I__PLATFORM_PS3           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 11 : 'PS3', // PS2 ?
    WHAT_BROWSER_AM_I__PLATFORM_PS4           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 12 : 'PS4',
    WHAT_BROWSER_AM_I__PLATFORM_PS5           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 13 : 'PS5',
    WHAT_BROWSER_AM_I__PLATFORM_Xbox360       = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 14 : 'Xbox360',
    WHAT_BROWSER_AM_I__PLATFORM_XboxOne       = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 15 : 'XboxOne',
    WHAT_BROWSER_AM_I__PLATFORM_FeaturePhone  = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 16 : 'FeaturePhone',
    WHAT_BROWSER_AM_I__PLATFORM_Mylo          = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 17 : 'Mylo',
    WHAT_BROWSER_AM_I__PLATFORM_Kobo          = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 18 : 'Kobo',
    WHAT_BROWSER_AM_I__PLATFORM_SonyReader    = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 19 : 'SonyReader',
    WHAT_BROWSER_AM_I__PLATFORM_Kindle        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 20 : 'Kindle',
    WHAT_BROWSER_AM_I__PLATFORM_WinCE         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 21 : 'WindowsCE', // Windows Embeded
    WHAT_BROWSER_AM_I__PLATFORM_WindowsMobile = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 22 : 'WindowsMobile',
    WHAT_BROWSER_AM_I__PLATFORM_WindowsPhone  = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 23 : 'WindowsPhone',
    WHAT_BROWSER_AM_I__PLATFORM_iOS           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 24 : 'iOS',
    WHAT_BROWSER_AM_I__PLATFORM_iPadOS        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 25 : 'iPadOS', // WatchOS
    WHAT_BROWSER_AM_I__PLATFORM_Android       = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 26 : 'Android',
    WHAT_BROWSER_AM_I__PLATFORM_FireOS        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 27 : 'FireOS',
    WHAT_BROWSER_AM_I__PLATFORM_ChromeOS      = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 28 : 'ChromeOS',
    WHAT_BROWSER_AM_I__PLATFORM_FirefoxOS     = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 29 : 'FirefoxOS', //KaiOS
    WHAT_BROWSER_AM_I__PLATFORM_WebOS         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 30 : 'WebOS', // S60 ?
    WHAT_BROWSER_AM_I__PLATFORM_Tizen         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 31 : 'Tizen',
    WHAT_BROWSER_AM_I__PLATFORM_MeeGo         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 32 : 'MeeGo',
    WHAT_BROWSER_AM_I__PLATFORM_Maemo         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 33 : 'Maemo',
    WHAT_BROWSER_AM_I__PLATFORM_BlackBerry    = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 34 : 'BlackBerry',
    WHAT_BROWSER_AM_I__PLATFORM_Win16         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 35 : 'Win16',
    WHAT_BROWSER_AM_I__PLATFORM_Win32         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 36 : 'Win32',
    WHAT_BROWSER_AM_I__PLATFORM_Win64         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 37 : 'Win64',
    WHAT_BROWSER_AM_I__PLATFORM_MacPPC        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 38 : 'MacPPC',
    WHAT_BROWSER_AM_I__PLATFORM_Mac68K        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 39 : 'Mac68K',
    WHAT_BROWSER_AM_I__PLATFORM_MacIntel      = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 40 : 'MacIntel',
    WHAT_BROWSER_AM_I__PLATFORM_MacM1         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 41 : 'MacM1', // https://stackoverflow.com/questions/64853342/whats-the-value-of-navigator-platform-on-arm-macs
    WHAT_BROWSER_AM_I__PLATFORM_SunOS         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 42 : 'SunOS',
    WHAT_BROWSER_AM_I__PLATFORM_FreeBSD       = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 43 : 'FreeBSD',
    WHAT_BROWSER_AM_I__PLATFORM_OpenBSD       = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 44 : 'OpenBSD',
    WHAT_BROWSER_AM_I__PLATFORM_NetBSD        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 45 : 'NetBSD',
    WHAT_BROWSER_AM_I__PLATFORM_Ubuntu        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 46 : 'Ubuntu',
    WHAT_BROWSER_AM_I__PLATFORM_Mint          = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 47 : 'Mint',
    WHAT_BROWSER_AM_I__PLATFORM_Fedora        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 48 : 'Fedora',
    WHAT_BROWSER_AM_I__PLATFORM_Gentoo        = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 49 : 'Gento',
    WHAT_BROWSER_AM_I__PLATFORM_Linux         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 50 : 'Linux';