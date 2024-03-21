goog.provide( 'whatBrowserAmI.brand.FirefoxFocus.is' );
goog.provide( 'whatBrowserAmI.brand.FirefoxFocus.detect' );
goog.provide( 'whatBrowserAmI.brand.FirefoxFocus.isOnFireTV' );

goog.require( 'whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION_FOR_IOS' );

/*----------------------------------------------------------------------------//
 *  Firefox Focus
 *
 *  https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference
 *    > バージョン 6 より前では、 Focus for Android は Android WebView によって実現されていたため、以下の UA 文字列形式を使用していました。
 *    > Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
 * 
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.FirefoxFocus = {};

/**
 * @const {string} */
whatBrowserAmI.brand.FirefoxFocus.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Focus/' ) || p_getVersionString( p_strUserAgent, 'Klar/' );

/** @const {boolean} */
whatBrowserAmI.brand.FirefoxFocus.is = function(){
    var versionFxiOS = whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION_FOR_IOS;

    return !!whatBrowserAmI.brand.FirefoxFocus.NAVIGATOR_VERSION ||
        // https://apps.apple.com/jp/app/firefox-focus-e3-83-97-e3-83-a9-e3-82-a4-e3-83-90-e3/id1055677337
        // iOS 12.2, Focus 8.1.2, (iOS 11.0以降)
        // https://web.archive.org/web/20230203011812/https://en.wikipedia.org/wiki/Firefox_for_iOS#cite_note-10
        // Focus   : FxiOS が 8.x にも拘わらず、iOS のバージョンが 11 以上、を使って判定
        // Firefox : FxiOS が 9.x 以降が、iSO 11+ 対応を持って判定
           versionFxiOS && parseFloat( versionFxiOS ) < 9 && p_engineName === ENGINE.iOSWebView && 11 <= parseFloat( p_platformVersion );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.FirefoxFocus.detect = function(){
    if( whatBrowserAmI.brand.FirefoxFocus.is() ){
        p_setBrand( BRAND.FirefoxFocus, whatBrowserAmI.brand.FirefoxFocus.NAVIGATOR_VERSION || whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION_FOR_IOS );
        return true;
    };
};
