goog.provide( 'whatBrowserAmI.brand.Brave.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Brave.is' );
goog.provide( 'whatBrowserAmI.brand.Brave.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Brave
 */

/** @const {string} */
whatBrowserAmI.brand.Brave.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Brave/' );

/**
 * @package
 * @return {boolean} */
whatBrowserAmI.brand.Brave.is = function(){
    return !!whatBrowserAmI.brand.Brave.NAVIGATOR_VERSION || p_hasSubstring( p_strUserAgent, ' Brave ' )
               || p_engineName === ENGINE.iOS_WebView && !!p_inObject( 'sameOrigin', window );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Brave.detect = function(){
    if( whatBrowserAmI.brand.Brave.is() ){
        p_setBrand(
            BRAND.Brave,
            whatBrowserAmI.brand.Brave.NAVIGATOR_VERSION ||
                (
                    p_engineName === ENGINE.Chromium || p_engineName === ENGINE.Chromium_Mobile
                        ? whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION
                        : undefined
                )
        );
        return true;
    };
};
