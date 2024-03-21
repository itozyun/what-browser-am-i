goog.provide( 'whatBrowserAmI.brand.Brave.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Brave.is' );
goog.provide( 'whatBrowserAmI.brand.Brave.detect' );

goog.require( 'whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Brave
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Brave = {};

/** @const {string} */
whatBrowserAmI.brand.Brave.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Brave/' );

/** @return {boolean} */
whatBrowserAmI.brand.Brave.is = function(){
    return !!whatBrowserAmI.brand.Brave.NAVIGATOR_VERSION || p_hasSubstring( p_strUserAgent, ' Brave ' )
               || p_engineName === ENGINE.iOSWebView && p_inObject( 'sameOrigin', window );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Brave.detect = function(){
    if( whatBrowserAmI.brand.Brave.is() ){
        p_setBrand(
            BRAND.Brave,
            whatBrowserAmI.brand.Brave.NAVIGATOR_VERSION ||
                p_platformName === ENGINE.Chromuim && whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION
        );
        return true;
    };
};
