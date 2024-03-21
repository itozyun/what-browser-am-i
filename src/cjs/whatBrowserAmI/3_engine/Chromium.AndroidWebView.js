goog.provide( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.hasChromeObject' );
goog.provide( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.CHROMIUM_IMPLEMENT_VERSION' );

goog.provide( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION' );
goog.provide( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeAOSP' );
goog.provide( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeChromeWebView' );

goog.provide( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.is' );
goog.provide( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.engine.Trident.is' );
goog.require( 'whatBrowserAmI.engine.EdgeHTML.is' );
goog.require( 'whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION' );
goog.require( 'whatBrowserAmI.brand.Iron.NAVIGATOR_VERSION' );
goog.require( 'whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Chromium, Android WebView(AOSP(Chrome Lite), Chrome WebView)
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.ChromiumOrAndroidWebView = {};

/**
 * @private
 * @const {boolean} */
var hasChromeObject =
    !whatBrowserAmI.engine.EdgeHTML.is() && // EdgeHTML has .chrome
    !!(
        window.chrome || window.chromium || // Iron 3 has .chromium without .chrome, Iron 5 has both.
        window.opr                          // 全ての Blink Opera に存在するわけではない?
    );
/**
 * AndroidWebView 4.1 にも .chrome が居るのが Lite 版なので ChromiumOrAndroidWebView と判定しないこと!
 * @const {boolean}
 */
whatBrowserAmI.engine.ChromiumOrAndroidWebView.hasChromeObject = hasChromeObject;

/**
 * TODO Android 標準ブラウザの Chrome WebView + PC site requested では Chrome/11 とあり得ない値が入っている
 * @const {number}
 */
whatBrowserAmI.engine.ChromiumOrAndroidWebView.CHROMIUM_IMPLEMENT_VERSION = 0;

/**
 * Android 3.x~4.0 標準ブラウザには .chrome がいる(WebKit 534~534.3)
 * @const {boolean}
 */
whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeAOSP = hasChromeObject && p_numberWebKit <= 534.3;

/**
 * Android 4.4.4~6.x ChromeWebView 33.0.0.0 (Genymotion) PC site requested の場合、Chrome/のバージョンは常に 11.0.696.34 になる
 * @const {boolean}
 */
whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeChromeWebView =
    p_strPlatformHasLinux && p_hasRegisterElement && whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION === '11.0.696.34';

/**
 * Android WebView のバージョン
 * Android 4.4.4- では Android OS の Version, 5.0+ では Chrome のバージョンを使用。
 * @const {number|string} */
whatBrowserAmI.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION =
    // https://developer.chrome.com/multidevice/webview/overview
    //   The WebView shipped with Android 4.4 (KitKat) is based on the same code as Chrome for Android version 30.
    //   This WebView does not have full feature parity with Chrome for Android and is given the version number 30.0.0.0.
    //   The updated WebView shipped with Android 4.4.3 has the version number 33.0.0.0.
    //   A developer preview WebView is shipping with the Android L Developer Preview. The developer preview version number is 36.0.0.0.
    // https://caniuse.com/#compare=chrome+30,chrome+31,chrome+32,chrome+33,chrome+34,chrome+35,chrome+36,chrome+37,android+4.4.3-4.4.4
    //   chrome30 と Android4.4.3 で未実装で Chrome36 で追加された "CSS touch-action property" を Android5+ の判定に使用。
    // https://qiita.com/DriftwoodJP/items/1916d5519857295622b2
    //   Android OS 5.0（Lollipop）から、Chromium WebView が OS から切り離され、Google Play から 「AndroidシステムのWebView」として更新できるようになった。
    //   この結果、端末ベンダー提供のパッチ適用に影響されずに更新されることになったが、この「ブラウザ」と Chrome for Android とは別物であることには注意が必要である。 
        p_htmlStyle.touchAction !== undefined
            ? whatBrowserAmI.engine.ChromiumOrAndroidWebView.CHROMIUM_IMPLEMENT_VERSION
      : p_hasRegisterElement
            ? '4.4.3'
      : p_hasInt8Array ? (
            !navigator.connection ? 4.4 :
            ( !window.searchBoxJavaBridge_ && !hasChromeObject ) ? 4.2 : /* 4.1- には searchBoxJavaBridge_ と chrome が存在 */
            Number.isNaN ? 4.1 : 4 ) :
        window.SVGSVGElement ? 3 :
        window.onhashchange !== undefined ? ( p_hasAudioElement ? 2.3 : 2.2 ) :
        530 <= p_numberWebKit ? 2.0 : 1.5;

/** @return {boolean} */
whatBrowserAmI.engine.ChromiumOrAndroidWebView.is = function(){
    var isAndroid = p_platformName === PLATFORM.Android;

    /*----------------------------------------------------------------------------//
     *  Android WebView
     */
    if( isAndroid && whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeAOSP ){
        return true;
    /*----------------------------------------------------------------------------//
     *  Chromium or ChromiumMobile
     */
    } else if( hasChromeObject ){
        return true;
    /*----------------------------------------------------------------------------//
     *  Android WebView(Chrome WebView)
     */
    } else if( isAndroid && p_hasRegisterElement ){
        return true;
    /*----------------------------------------------------------------------------//
     *  Android WebView + PC_site requested
     */
    } else if( isAndroid && ( p_Version.NAVIGATOR_VERSION || p_surelyPcSiteRequested ) ){
        return true;
    /*----------------------------------------------------------------------------//
     *  Chromium or ChromiumMobile (without .chrome)
     */
    } else if( whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION || whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION ){
        return true;
    };
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.ChromiumOrAndroidWebView.detect = function(){
    if( whatBrowserAmI.engine.ChromiumOrAndroidWebView.is() ){
        var isAndroid = p_platformName === PLATFORM.Android;

        /*----------------------------------------------------------------------------//
         *  Android WebView
         */
        // Android 3.x-4.1 の Android WebView で window.chrome がいるので AOSP の判定を Chromium より先に
        if( isAndroid && whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeAOSP ){
            p_setEngine( ENGINE.AndroidWebView, whatBrowserAmI.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION );
            if( p_surelyPcSiteRequested ) p_isPcSiteRequested = true;
        /*----------------------------------------------------------------------------//
         *  Chromium or ChromiumMobile
         */
        } else if( hasChromeObject ){
            p_setEngine(
                p_isAndroidBased() ? ENGINE.ChromiumMobile : ENGINE.Chromium,
                whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION || whatBrowserAmI.brand.Iron.NAVIGATOR_VERSION // TODO whatBrowserAmI.engine.ChromiumOrAndroidWebView.CHROMIUM_IMPLEMENT_VERSION
            );
            if( p_surelyPcSiteRequested ) p_isPcSiteRequested = true;
        /*----------------------------------------------------------------------------//
         *  Android WebView(Chrome WebView)
         */
        // http://uupaa.hatenablog.com/entry/2014/04/15/163346
        // Chrome WebView は Android 4.4 の時点では WebGL や WebAudio など一部の機能が利用できません(can i use)。
        // また UserAgent が書き換え可能なため、旧来のAOSPブラウザの UserAgent を偽装した形で配布されているケースがあります。
        // http://caniuse.com/#compare=chrome+40,android+4.2-4.3,android+4.4,android+4.4.3-4.4.4,and_chr+45
        } else if( isAndroid && p_hasRegisterElement ){
            // Android 標準ブラウザ Chrome WebView ブラウザ
            p_setEngine( ENGINE.AndroidWebView, whatBrowserAmI.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION );

            if( !( window.requestFileSystem || window.webkitRequestFileSystem ) ){
                // isAndroidChromeWebView = true;
            };
            if( p_surelyPcSiteRequested ){
                p_isPcSiteRequested = true;
            };
        /*----------------------------------------------------------------------------//
         *  Android WebView + PC_site requested
         */
        } else if( isAndroid && ( p_Version.NAVIGATOR_VERSION || p_surelyPcSiteRequested ) ){
            p_setEngine( ENGINE.AndroidWebView, whatBrowserAmI.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION );
            if( p_surelyPcSiteRequested ){
                p_isPcSiteRequested = true;
            };
        /*----------------------------------------------------------------------------//
         *  Chromium or ChromiumMobile (without .chrome)
         */
        } else if( whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION || whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION ){
            p_setEngine(
                p_isAndroidBased() ? ENGINE.ChromiumMobile : ENGINE.Chromium,
                whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION // TODO whatBrowserAmI.engine.ChromiumOrAndroidWebView.CHROMIUM_IMPLEMENT_VERSION
            );
        };
        return true;
    };
};