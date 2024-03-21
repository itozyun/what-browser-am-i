goog.provide( 'whatBrowserAmI.brand.OmniWeb.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.OmniWeb.is' );
goog.provide( 'whatBrowserAmI.brand.OmniWeb.detect' );

/*----------------------------------------------------------------------------//
 *  OmniWeb
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.OmniWeb = {};

/** @const {string} */
whatBrowserAmI.brand.OmniWeb.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'OmniWeb/' );

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