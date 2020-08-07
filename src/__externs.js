/**
 * @type {Object}
 */
var ua = {};

/**
 * @type {Object}
 */
var UserAgentObject = {
    ENGINE           : '',
    ENGINE_VERSION   : '',
    PLATFORM         : '',
    PLATFORM_VERSION : '',
    BRAND            : '',
    BRAND_VERSION    : '',
    DEVICE           : '',
    DEVICE_VERSION   : '',
    DEVICE_TYPE      : 1,
    PC_MODE          : true,

// PLATFORM
    NDS           : 1,
    NDSi          : 507,
    New3DS        : 1,
    N3DS          : 1,
    Switch        : 1,
    WiiU          : 1,
    Wii           : 1,
    PSVita        : 1,
    PSP           : 1,
    PS3           : 3.5,
    XBoxOne       : 1,
    XBox360       : 1,
    Mylo          : 2,
    iOS           : 12.2,
    Kobo          : 1,
    SonyReader    : 1,
    ChromeOS      : 1,
    FirefoxOS     : 2.2,
    webOS         : 1,
    Tizen         : 2,
    WindowsPhone  : 8.1,
    FeaturePhone  : true,
    FireOS        : 6.3,
    Kindle        : 3.0,
    MeeGo         : true,
    Maemo         : true,
    WindowsMobile : true,
    WinCE         : true,
    Win16         : 3.1,
    Win32         : 5.1,
    Win64         : 10,
    MacPPC        : true,
    Mac68K        : true,
    MacIntel      : 10.12,
    BlackBerry    : 10,
    SunOS         : true,
    FreeBSD       : true,
    OpenBSD       : true,
    NetBSD        : true,
    Android       : 5,
    Ubuntu        : true,
    Mint          : true,
    Fedora        : true,
    Gentoo        : true,
    Linux         : true,
// ENGINE
    WebKit         : 533,
    SafariMobile   : 12.2,
    iOSWebView     : 12.2,
    Presto         : 12.1,
    PrestoMobile   : 12.1,
    OperaMini      : 11,
    Tasman         : 5.2,
    Trident        : 4,
    TridentMobile  : 11,
    EdgeHTML       : 12,
    EdgeMobile     : 12,
    Goanna         : 3,
    Gecko          : 64,
    Fennec         : 18,
    Chromium       : 70,
    ChromiumMobile : 70,
    ChromeWebView  : 9,
    iCab           : 3,
    UCWEB          : 2,
    KHTML          : 3,
    NetFront       : 3.3,
    Sony           : 3.5,
    AOSP           : 4.4,
    Samsung        : 2,
// BRAND
    NetFrontNX   : 1,
    Safari       : 12.2,
    IEHost       : 11,
    ModernIE     : 11,
    MacIE        : 4.5,
    Opera        : 15,
    Edge         : 17,
    Coast        : 1,
    OperaTouch   : 3,
    Yahoo        : 1,
    UC           : 1,
    Silk         : 1,
    Vivaldi      : 1,
    QQ           : 1,
    Yandex       : 1,
    coccoc       : 1,
    Camino       : 1,
    Sogou        : true,
    Focus        : 1,
    Klar         : 1,
    AOL          : 1,
    IceDragon    : 1,
    Iceweasel    : 1,
    ITenFourFox  : 1,
    Waterfox     : 1,
    GNUzilla     : 1,
    SeaMonkey    : 1,
    PaleMoon     : 1,
    Basilisk     : 1,
    Maxthon      : 1,
    Avant        : true,
    Lunascape    : 1,
    Konqueror    : 1,
    Midori       : 1,
    OmniWeb      : 1,
    Roccat       : 1,
    Epiphany     : 1,
    WebPositive  : 1,
    Iron         : 70,
    ComodoDragon : 1,
    Brave        : 70,
    Rockmelt     : 1,
    Sleipnir     : true,
    Puffin       : 1,
    Dooble       : 1,
    Flock        : 1,
    Galeon       : 1,
    Falkon       : 1,
    Iceape       : 1,
    KMeleon      : 1,
    NN           : 9,
    Iris         : 1,
    LINE         : 1,
    Facebook     : 1,
    QtWebEngine  : 5.12,
    QtWebKit     : 1,
    Firefox      : 64,
    Chrome       : 74,
    IE           : 11,
    unknown      : true,
// DEVICE
    iPhone         : {},
    iPad           : {},
    iPod           : {}
};

/**
 * @type {Object}
 */
var puffinDevice = {};

/**
 * @type {Object}
 */
var PuffinDeviceObject = {
    clientInfo : {}
};

/**
 * @type {Object}
 */
var PuffinDeviceClientInfoObject = {
    os        : '',
    osVersion : '',
    model     : ''
};

/**
 * @type {function()}
 */
var onmoztimechange = function(){};

/**
 * @type {boolean}
 */
Navigator.prototype.standalone;

/**
 * @type {number}
 */
var screenY;

/**
 * @type {number}
 */
var innerHeight;

/**
 * @type {number}
 */
var outerHeight;

/**
 * @type {Object}
 */
var chrome = {};

/**
 * @type {Object}
 */
var opr = {};

/**
 * @type {Object}
 */
var __opera = {};

/**
 * iOS 12.2 Sleipnir
 * @type {Object}
 */
var FNRBrowser = {}

/**
 * @type {Object}
 */
var operamini = {};

/**
 * @type {function()}
 */
var palmGetResource = function(){};

/**
 * @type {Object}
 */
var searchBoxJavaBridge_ = {};

/**
 * @type {string}
 */
HTMLElement.prototype.msContentZoomFactor;

/**
 * FireTV Firefox
 * @type {Object}
 */
var _firefoxTV_playbackStateObserverJava = {}