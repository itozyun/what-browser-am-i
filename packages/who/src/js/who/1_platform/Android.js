goog.provide( 'who.platform.Android.NAVIGATOR_VERSION' );
goog.provide( 'who.platform.Android.is' );
goog.provide( 'who.platform.Android.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.UCWEB.AndroidVersionWithUCWEB' );
goog.require( 'who.brand.Yahoo.isOnAndroid' );
goog.require( 'who.brand.Lunascape.maybeLunascapeOnAndroid' );
goog.require( 'who.brand.Sleipnir.isOnAndroid' );
goog.require( 'who.device.isEinkAndroid' );
goog.require( 'who.engine.Gecko.is' );
goog.require( 'who.engine.Presto.is' );
goog.require( 'who.engine.SamsungInternet.NAVIGATOR_VERSION' );
goog.require( 'who.engine.ChromiumOrAndroidWebView.hasChromeObject' );
goog.require( 'who.engine.ChromiumOrAndroidWebView.maybeAOSP' );
goog.require( 'who.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION' );
goog.require( 'who.engine.ChromiumOrAndroidWebView.maybeChromeWebView' );
goog.require( 'who.brand.Opera.OPR_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Android
 */

/**
 * @private
 * @const {string} */
var _versionAndroid = p_getVersionString( p_strPlatform  , 'Android ' ) ||
                      p_getVersionString( p_strAppVersion, 'Android ' ) ||
                      p_getVersionString( p_strUserAgent , 'Android ' ) ||
                      who.engine.UCWEB.AndroidVersionWithUCWEB;
/**
 * @private
 * @const {boolean} */
var _hasAndroidString = p_hasSubstring( p_strPlatform, 'Android' ) ||
                        p_hasSubstring( p_strAppVersion, 'Android' ); /* Android2.3.5 Firefox31 */

/**
 * @private
 * @const {boolean} */
var _isAndroidWithFennec =
        ( _hasAndroidString || p_isConflictingLinuxCPUStringsFound && p_isTouch )
        && who.engine.Gecko.is();

/**
 * @private
 * @const {boolean} */
var _isAndroidWithPresto = _hasAndroidString && who.engine.Presto.is();

/**
 * @private
 * @const {boolean} */
var _isChromiumFamilyOnAndroidPcSiteRequested = p_isConflictingLinuxCPUStringsFound && p_isTouch && !!p_numberWebKit;

/**
 * @private
 * @const {boolean} */
var _isAndroidAccordingToClues =
        who.brand.Lunascape.maybeLunascapeOnAndroid ||
        who.brand.Sleipnir.isOnAndroid ||
        who.brand.Yahoo.isOnAndroid || _isChromiumFamilyOnAndroidPcSiteRequested || who.device.isEinkAndroid();

/** @const {string} */
who.platform.Android.NAVIGATOR_VERSION = _versionAndroid;

/** @return {boolean} */
who.platform.Android.is = function(){
    return _isAndroidWithFennec || _isAndroidWithPresto || !!_versionAndroid || _isAndroidAccordingToClues;
};

/** @return {boolean|void} */
who.platform.Android.detect = function(){
    /*----------------------------------------------------------------------------//
     *  Android OS + Fennec
     */
    if( _isAndroidWithFennec ){
        // PCモードの Android Firefox では platform に Android 0.0.0 が存在
        // Fennec41- 用
        // https://developer.mozilla.org/ja/docs/Gecko_user_agent_string_reference
        // バージョン 41 以降の Android 版 Firefox では platform トークンに Android バージョンが含まれます。
        // 相互運用性向上のため、Android 4 以前のバージョンでブラウザが動作している場合は 4.4 と出力します。
        if( p_hasSubstring( p_strUserAgent, 'Android 4.4;' ) ){
            p_setPlatform( PLATFORM.Android, '2.2~3', DEVICE_TYPE.PHONE );
        } else
        // Android バージョン 4 以降では実際のバージョン番号が出力されます。
        if( 4 <= parseFloat( _versionAndroid ) ){
            p_setPlatform( PLATFORM.Android, _versionAndroid, DEVICE_TYPE.PHONE );
        } else {
            p_setPlatform( PLATFORM.Android, '2.2~3', DEVICE_TYPE.PHONE );
        };
        if( p_isConflictingLinuxCPUStringsFound ){
            p_isPcSiteRequested = true;
        };
        return true;
    } else
    /*----------------------------------------------------------------------------//
     *  Android OS + Presto
     */
    if( _isAndroidWithPresto ){
        var isTablet = p_hasSubstring( p_strUserAgent, 'Tablet' );

        if( _versionAndroid ){
            p_setPlatform( PLATFORM.Android, _versionAndroid, isTablet ? DEVICE_TYPE.TABLET : DEVICE_TYPE.PHONE );
        } else {
            p_setPlatform( PLATFORM.Android, '1.6~', isTablet ? DEVICE_TYPE.TABLET : DEVICE_TYPE.PHONE );
            p_isPcSiteRequested = true;
        };
        return true;
    } else
    /*----------------------------------------------------------------------------//
     *  Android OS
     */
    if( _versionAndroid ){
        p_setPlatform( PLATFORM.Android, _versionAndroid, DEVICE_TYPE.PHONE );
        return true;
    } else
    /*----------------------------------------------------------------------------//
     *  Android OS + PC site requested
     */
    if( _isAndroidAccordingToClues ){
        var hasChromeObject = who.engine.ChromiumOrAndroidWebView.hasChromeObject;
        var maybeAOSP       = who.engine.ChromiumOrAndroidWebView.maybeAOSP;

        // https://ja.wikipedia.org/wiki/WebKit
        // http://www.au.kddi.com/developer/android/kishu/ua/

        // AOSP の判定は Version/ の有無. 但し「デスクトップ版で見る」場合、Version/ が居なくなる...
        // PC版で見る、にチェックが付いている場合、ユーザーエージェント文字列にも platform にも Android の文字列が存在しない(標準ブラウザ&Chrome)
        // Audio でタッチが必要か？の判定にとても困る...
        // ua には Linux x86_64 になっている p_strPlatform と矛盾する. ATOM CPU の場合は？
        if( who.engine.SamsungInternet.NAVIGATOR_VERSION ){ // SamsungBrowser/2.0+ が Android4.4.4 から登場する
            p_setPlatform( PLATFORM.Android, '4.4~', DEVICE_TYPE.PHONE );
        } else
        if( ( hasChromeObject && !maybeAOSP ) || who.brand.Opera.OPR_NAVIGATOR_VERSION ){
            p_setPlatform( PLATFORM.Android, '4~', DEVICE_TYPE.PHONE );
        } else {
            var implVersion = who.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION;

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
                    : '5~',
                DEVICE_TYPE.PHONE
            );
        };
        p_surelyPcSiteRequested = true;
        return true;
    } else
    /*----------------------------------------------------------------------------//
     *  Android 5≦ + Chrome for WebView + PCSITE_REQUESTED
     */
    if( who.engine.ChromiumOrAndroidWebView.maybeChromeWebView ){
        p_setPlatform( PLATFORM.Android );
        p_surelyPcSiteRequested = true;
        return true;
    };
};
