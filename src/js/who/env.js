goog.provide( 'who.env' );

goog.require( 'who.util' );

/** @type {boolean} */
who.env.surelyPcSiteRequested = false;

/** @const {string} */
who.env.strUserAgent  = navigator.userAgent;
/** @const {string} */
who.env.strAppVersion = navigator.appVersion;
/** @const {number} */
who.env.numAppVersion = parseFloat( who.env.strAppVersion ) || 0;
/** @const {string} */
who.env.strPlatform   = navigator.platform;

/** @const {number|void} */
who.env.documentMode       = document.documentMode;
/** @const {boolean} */
who.env.hasDocumentAll     = !!document.all;
/** @const {boolean} */
who.env.hasRegisterElement = !!document.registerElement;
/** @const {number} */
who.env.screenWidth        = screen.width;
/** @const {number} */
who.env.screenHeight       = screen.height;

/** @const {HTMLHtmlElement|null|void} */
who.env.htmlElement = document.documentElement;
/** @const {CSSStyleDeclaration|void} */
who.env.htmlStyle   = who.env.htmlElement && who.env.htmlElement.style;

/** @const {boolean} */
who.env.hasAudioElement = !!window.HTMLAudioElement;
/** @const {Performance|void} */
who.env.performance     = window.performance;
/** @const {boolean} */
who.env.hasInt8Array    = !!window.Int8Array;

/** @const {boolean} */
who.env.isTouch = window.ontouchstart !== undefined;

/** @const {boolean|void} */
who.env.standalone = navigator.standalone;

/** @const */
who.env.Something = {};
/** @const {string} */
who.env.Something.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strAppVersion, 'Version/' ) ||
                                      who.util.getVersionString( who.env.strUserAgent , 'Version/' );

/** @const */
who.env.firefoxOnIOS = {};
/** @const {string} */
who.env.firefoxOnIOS.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent , 'FxiOS/' );

/**
 * userAgent から取り出した WebKit のバージョン
 * @const {number}
 */
who.env.numberWebKit = who.util.getNumber( who.env.strUserAgent, 'AppleWebKit/' );

/**
 * Gecko(Fennec) or Goanna
 * @type {boolean} */
who.env.isGeckoFamily = false;

if( !who.env.hasDocumentAll ){ // Preventing errors in IE4
    // https://www.fxsitecompat.com/ja/docs/2017/moz-appearance-property-has-been-removed/
    // -moz-appearance プロパティが廃止されました -> 更新: この変更は Firefox 54 で予定されていましたが、延期されました。
    // who.env.htmlStyle.MozAppearance !== undefined, // window.Components
        for( var __k in who.env.htmlStyle ){
            if( who.util.startWith( __k, 'Moz' ) ){
                who.env.isGeckoFamily = true;
                break;
            };
        };
};

/**
 * Maybe Linux or Android
 * @const {boolean}
 */
who.env.strPlatformHasLinux = who.util.hasSubstring( who.env.strPlatform, 'Linux' );

/**
 * navigator.platform is a Linux+CPU string
 * @const {boolean}
 */
who.env.strPlatformIsLinuxCPU = who.util.hasLinuxCPUString( who.env.strPlatform );

/**
 * Conflicting Linux+CPU strings found
 * @const {boolean}
 */
who.env.isConflictingLinuxCPUStringsFound =
    who.env.strPlatformIsLinuxCPU &&
   !who.util.hasSubstring( who.env.strUserAgent, who.env.strPlatform ) &&
    who.util.hasLinuxCPUString( who.env.strUserAgent );
