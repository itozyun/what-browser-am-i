goog.provide( 'who.brand.Firefox.is' );
goog.provide( 'who.brand.Firefox.detect' );
goog.provide( 'who.brand.Firefox.isOnFireTV' );
goog.provide( 'who.brand.Firefox.NAVIGATOR_VERSION' );

goog.require( 'who.base' );
goog.require( 'who.brand.FirefoxFocus.is' );

/*----------------------------------------------------------------------------//
 *  Firefox
 */

/**
 * Firefox のバージョンは rv: の値を使用するが、Android9 + Firefox67.0 + PC site requested で rv: が存在しないケースもある
 * @const {string}
 */
who.brand.Firefox.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Firefox/' );

/**
 * https://github.com/mozilla-mobile/firefox-tv/blob/master/app/src/main/java/org/mozilla/tv/firefox/ext/Js.kt
 * @const {boolean} */
who.brand.Firefox.isOnFireTV = !!window._firefoxTV_playbackStateObserverJava;

/**
 * @package
 * @return {boolean} */
who.brand.Firefox.is = function(){
    return p_engineName === ENGINE.Gecko         || // Gecko
           p_engineName === ENGINE.Fennec        || // Gecko for Mobile
           who.brand.Firefox.isOnFireTV || // AndroidWebView(FireTV)
           !who.brand.FirefoxFocus.is() &&
               !!p_firefoxOnIOS.NAVIGATOR_VERSION; // iOSWebView
};

/** @return {boolean|void} */
who.brand.Firefox.detect = function(){
    if( who.brand.Firefox.is() ){
        p_setBrand(
            BRAND.Firefox,
            p_engineName === ENGINE.Gecko || p_engineName === ENGINE.Fennec
                ? p_engineVersion
                : ( who.brand.Firefox.NAVIGATOR_VERSION || p_firefoxOnIOS.NAVIGATOR_VERSION )
        );
        return true;
    };
};
