goog.provide( 'whatBrowserAmI.brand.Firefox.is' );
goog.provide( 'whatBrowserAmI.brand.Firefox.detect' );
goog.provide( 'whatBrowserAmI.brand.Firefox.isOnFireTV' );
goog.provide( 'whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION_FOR_IOS' );

goog.require( 'whatBrowserAmI.brand.FirefoxFocus.is' );

/*----------------------------------------------------------------------------//
 *  Firefox
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Firefox = {};

/**
 * Firefox のバージョンは rv: の値を使用するが、Android9 + Firefox67.0 + PC site requested で rv: が存在しないケースもある
 * @const {string}
 */
whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Firefox/' );

/** @const {string} */
whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION_FOR_IOS = p_getVersionString( p_strUserAgent, 'FxiOS/' );

/**
 * https://github.com/mozilla-mobile/firefox-tv/blob/master/app/src/main/java/org/mozilla/tv/firefox/ext/Js.kt
 * @const {boolean} */
whatBrowserAmI.brand.Firefox.isOnFireTV = !!window._firefoxTV_playbackStateObserverJava;

/** @const {boolean} */
whatBrowserAmI.brand.Firefox.is = function(){
    return p_platformName === ENGINE.Gecko         || // Gecko
           p_platformName === ENGINE.Fennec        || // Gecko for Mobile
           whatBrowserAmI.brand.Firefox.isOnFireTV || // AndroidWebView(FireTV)
           !whatBrowserAmI.brand.FirefoxFocus.is() &&
               whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION_FOR_IOS; // iOSWebView
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Firefox.detect = function(){
    if( whatBrowserAmI.brand.Firefox.is() ){
        p_setBrand(
            BRAND.Firefox,
            p_platformName === ENGINE.Gecko || p_platformName === ENGINE.Fennec
                ? p_platformVersion
                : ( whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION || whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION_FOR_IOS )
        );
        return true;
    };
};
