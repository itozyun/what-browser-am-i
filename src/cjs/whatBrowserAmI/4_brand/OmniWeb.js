goog.provide( 'whatBrowserAmI.brand.OmniWeb.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.OmniWeb.is' );
goog.provide( 'whatBrowserAmI.brand.OmniWeb.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  OmniWeb
 */

/** @const {string} */
whatBrowserAmI.brand.OmniWeb.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'OmniWeb/' );

/** @return {boolean} */
whatBrowserAmI.brand.OmniWeb.is = function(){
    return !!whatBrowserAmI.brand.OmniWeb.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.OmniWeb.detect = function(){
    if( whatBrowserAmI.brand.OmniWeb.is() ){
        p_setBrand( BRAND.OmniWeb, whatBrowserAmI.brand.OmniWeb.NAVIGATOR_VERSION );
        return true;
    };
};