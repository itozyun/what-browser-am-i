goog.provide( 'whatBrowserAmI.brand.Lunascape.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Lunascape.maybeLunascapeOnAndroid' );
goog.provide( 'whatBrowserAmI.brand.Lunascape.is' );
goog.provide( 'whatBrowserAmI.brand.Lunascape.detect' );

/*----------------------------------------------------------------------------//
 *  Lunascape
 */

/** @const {string} */
whatBrowserAmI.brand.Lunascape.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Lunascape/' );

/**
 * https://twitter.com/itozyun/status/1293628829248794624
 * TODO ChromeWebView の version が17に!
 * @const {boolean} */
whatBrowserAmI.brand.Lunascape.maybeLunascapeOnAndroid = !!window.ReactNativeWebView;

/** @const {boolean} */
whatBrowserAmI.brand.Lunascape.is = function(){
    return !!whatBrowserAmI.brand.Lunascape.NAVIGATOR_VERSION || whatBrowserAmI.brand.Lunascape.maybeLunascapeOnAndroid;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Lunascape.detect = function(){
    if( whatBrowserAmI.brand.Lunascape.is() ){
        p_setBrand( BRAND.Lunascape, whatBrowserAmI.brand.Lunascape.NAVIGATOR_VERSION );
        return true;
    };
};
