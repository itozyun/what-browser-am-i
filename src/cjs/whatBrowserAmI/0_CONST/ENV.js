goog.provide( 'whatBrowserAmI.ENV' );

goog.require( 'whatBrowserAmI.util' );

/** @const {string} */
var p_strUserAgent  = navigator.userAgent;
/** @const {string} */
var p_strAppVersion = navigator.appVersion;
/** @const {number} */
var p_numAppVersion = parseFloat( p_strAppVersion ) || 0;
/** @const {string} */
var p_strPlatform   = navigator.platform;

/** @const {number|void} */
var p_documentMode       = document.documentMode;
/** @const {boolean} */
var p_hasDocumentAll     = !!document.all;
/** @const {boolean} */
var p_hasRegisterElement = !!document.registerElement;
/** @const {number} */
var p_screenWidth        = screen.width;
/** @const {number} */
var p_screenHeight       = screen.height;

/** @const {HTMLHtmlElement|null|void} */
var p_htmlElement = document.documentElement;
/** @const {CSSStyleDeclaration|void} */
var p_htmlStyle   = p_htmlElement && p_htmlElement.style;

/** @const {boolean} */
var p_hasAudioElement = !!window.HTMLAudioElement;
/** @const {Performance|void} */
var p_performance     = window.performance;
/** @const {boolean} */
var p_hasInt8Array    = !!window.Int8Array;

/** @const {boolean} */
var p_isTouch = window.ontouchstart !== undefined;

/** @const {boolean|void} */
var p_standalone = navigator.standalone;

/** @const */
var p_Version = {};
/** @const {string} */
p_Version.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Version/' ) ||
                              p_getVersionString( p_strUserAgent , 'Version/' );

/**
 * userAgent から取り出した WebKit のバージョン
 * @const {number}
 */
var p_numberWebKit = p_getNumber( p_strUserAgent, 'AppleWebKit/' );

/**
 * Gecko(Fennec) or Goanna
 * @const {boolean} */
p_isGeckoFamily =
    !p_hasDocumentAll && // Preventing errors in IE4
        !!(function(){
        // https://www.fxsitecompat.com/ja/docs/2017/moz-appearance-property-has-been-removed/
        // -moz-appearance プロパティが廃止されました -> 更新: この変更は Firefox 54 で予定されていましたが、延期されました。
        // p_htmlStyle.MozAppearance !== undefined, // window.Components
            for( var k in p_htmlStyle ){
                if( p_startWith( k, 'Moz' ) ) return true;
            };
        })();

/**
 * Maybe Linux or Android
 * @const {boolean}
 */
var p_strPlatformHasLinux = p_hasSubstring( p_strPlatform, 'Linux' );

/**
 * navigator.platform is a Linux+CPU string
 * @const {boolean}
 */
var p_strPlatformIsLinuxCPU = p_hasLinuxCPUString( p_strPlatform );

/**
 * Conflicting Linux+CPU strings found
 * @const {boolean}
 */
var p_isConflictingLinuxCPUStringsFound =
        p_strPlatformIsLinuxCPU &&
        !p_hasSubstring( p_strUserAgent, p_strPlatform ) &&
        p_hasLinuxCPUString( p_strUserAgent );
