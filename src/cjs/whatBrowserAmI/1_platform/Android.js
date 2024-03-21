goog.provide( 'whatBrowserAmI.platform.Android.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.platform.Android.is' );
goog.provide( 'whatBrowserAmI.platform.Android.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.engine.UCWEB.AndroidVersionWithUCWEB' );
goog.require( 'whatBrowserAmI.brand.Yahoo.isOnAndroid' );
goog.require( 'whatBrowserAmI.brand.Lunascape.maybeLunascapeOnAndroid' );
goog.require( 'whatBrowserAmI.brand.Sleipnir.isOnAndroid' );
goog.require( 'whatBrowserAmI.engine.Gecko.is' );
goog.require( 'whatBrowserAmI.engine.Presto.is' );
goog.require( 'whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION' );
goog.require( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.hasChromeObject' );
goog.require( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeAOSP' );
goog.require( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION' );
goog.require( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeChromeWebView' );
goog.require( 'whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Android
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.Android = {};

/**
 * @private
 * @const {string} */
var versionAndroid = p_getVersionString( p_strPlatform  , 'Android ' ) ||
                     p_getVersionString( p_strAppVersion, 'Android ' ) ||
                     p_getVersionString( p_strUserAgent , 'Android ' ) ||
                     whatBrowserAmI.engine.UCWEB.AndroidVersionWithUCWEB;
/**
 * @private
 * @const {boolean} */
var isAndroid = p_hasSubstring( p_strPlatform, 'Android' ) ||
                ( /* whatBrowserAmI.engine.Gecko.is() && */ p_hasSubstring( p_strAppVersion, 'Android' ) ) || /* Android2.3.5 Firefox3.1 */
                whatBrowserAmI.brand.Yahoo.isOnAndroid;

/**
 * @private
 * @const {boolean} */
var maybeLunascapeOnAndroid = whatBrowserAmI.brand.Lunascape.maybeLunascapeOnAndroid;

/**
 * @private
 * @const {boolean} */
var isSleipnirAndroid = whatBrowserAmI.brand.Sleipnir.isOnAndroid;

/**
 * @private
 * @return {boolean}
 */
function isAndroidWithFennec(){
    return isAndroid && whatBrowserAmI.engine.Gecko.is();
};

/**
 * @private
 * @return {boolean}
 */
function isAndroidWithPresto(){
    return isAndroid && whatBrowserAmI.engine.Presto.is();
};

/**
 * @private
 * @return {boolean}
 */
function maybePcSiteRequested(){
    return ( p_isConflictingLinuxCPUStringsFound && p_isTouch && ( p_numberWebKit || whatBrowserAmI.engine.Gecko.is() ) )
           ||
           ( !versionAndroid && whatBrowserAmI.brand.Yahoo.isOnAndroid );
};

/**
 * @private
 * @return {boolean}
 */
function isAndroidPcSiteRequested(){
    return p_strPlatformHasLinux && maybePcSiteRequested();
};

/** @const {string} */
whatBrowserAmI.platform.Android.NAVIGATOR_VERSION = versionAndroid;

/** @const {boolean} */
whatBrowserAmI.platform.Android.is = function(){
    return !!versionAndroid || maybeLunascapeOnAndroid || isSleipnirAndroid || isAndroidWithFennec() || isAndroidWithPresto() || isAndroidPcSiteRequested();
};

/** @return {boolean|void} */
whatBrowserAmI.platform.Android.detect = function(){
    /*----------------------------------------------------------------------------//
     *  Android OS + Fennec
     */
    if( isAndroidWithFennec() ){
        // PCモードの Android Firefox では platform に Android 0.0.0 が存在
        // Fennec41- 用
        // https://developer.mozilla.org/ja/docs/Gecko_user_agent_string_reference
        // バージョン 41 以降の Android 版 Firefox では platform トークンに Android バージョンが含まれます。
        // 相互運用性向上のため、Android 4 以前のバージョンでブラウザが動作している場合は 4.4 と出力します。
        if( p_hasSubstring( p_strUserAgent, 'Android 4.4;' ) ){
            p_setPlatform( PLATFORM.Android, { min : 2.3 }, DEVICE_TYPE.PHONE );
        } else
        // Android バージョン 4 以降では実際のバージョン番号が出力されます。
        if( 4 <= parseFloat( versionAndroid ) ){
            p_setPlatform( PLATFORM.Android, versionAndroid, DEVICE_TYPE.PHONE );
        } else {
            p_setPlatform( PLATFORM.Android, { min : 2.2 }, DEVICE_TYPE.PHONE );
        };
        if( maybePcSiteRequested() ){
            p_isPcSiteRequested = true;
        };
        return true;
    } else
    /*----------------------------------------------------------------------------//
     *  Android OS + Presto
     */
    if( isAndroidWithPresto() ){
        var isTablet = p_hasSubstring( p_strUserAgent, 'Tablet' );

        if( versionAndroid ){
            p_setPlatform( PLATFORM.Android, versionAndroid, isTablet ? DEVICE_TYPE.TABLET : DEVICE_TYPE.PHONE );
        } else {
            p_setPlatform( PLATFORM.Android, { min : 1.6 }, isTablet ? DEVICE_TYPE.TABLET : DEVICE_TYPE.PHONE );
            p_isPcSiteRequested = true;
        };
        return true;
    } else
    /*----------------------------------------------------------------------------//
     *  Android OS
     */
    if( versionAndroid ){
        p_setPlatform( PLATFORM.Android, versionAndroid, DEVICE_TYPE.PHONE );
        return true;
    } else
    /*----------------------------------------------------------------------------//
     *  Android OS + PC site requested
     */
    if( maybeLunascapeOnAndroid || isSleipnirAndroid || isAndroidPcSiteRequested() ){
        var hasChromeObject = whatBrowserAmI.engine.ChromiumOrAndroidWebView.hasChromeObject;
        var maybeAOSP       = whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeAOSP;

        // https://ja.wikipedia.org/wiki/WebKit
        // http://www.au.kddi.com/developer/android/kishu/ua/

        // AOSP の判定は Version/ の有無. 但し「デスクトップ版で見る」場合、Version/ が居なくなる...
        // PC版で見る、にチェックが付いている場合、ユーザーエージェント文字列にも platform にも Android の文字列が存在しない(標準ブラウザ&Chrome)
        // Audio でタッチが必要か？の判定にとても困る...
        // ua には Linux x86_64 になっている p_strPlatform と矛盾する. ATOM CPU の場合は？
        if( whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION ){ // SamsungBrowser/2.0+ が Android4.4.4 から登場する
            p_setPlatform( PLATFORM.Android, { min : 4.4 }, DEVICE_TYPE.PHONE );
        } else
        if( ( hasChromeObject && !maybeAOSP ) || whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION ){
            p_setPlatform( PLATFORM.Android, { min : 4 }, DEVICE_TYPE.PHONE );
        } else {
            var implVersion = whatBrowserAmI.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION;

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
            p_setPlatform(
                PLATFORM.Android,
                p_conpareVersion( implVersion, 5 ) < 0
                    ? implVersion
                    : { min : 5 },
                DEVICE_TYPE.PHONE
            );
        };
        p_surelyPcSiteRequested = true;
        return true;
    } else
    /*----------------------------------------------------------------------------//
     *  Android ≦5 + Chrome for WebView + PCSITE_REQUESTED
     */
    if( whatBrowserAmI.engine.ChromiumOrAndroidWebView.maybeChromeWebView ){
        p_setPlatform( PLATFORM.Android, { min : 5 }, DEVICE_TYPE.PHONE );
        p_surelyPcSiteRequested = true;
        return true;
    };
};
