goog.provide( 'whatBrowserAmI.brand.TenFourFox.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.TenFourFox.is' );
goog.provide( 'whatBrowserAmI.brand.TenFourFox.detect' );

/*----------------------------------------------------------------------------//
 *  TenFourFox
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.TenFourFox = {};

/** @const {string} */
whatBrowserAmI.brand.TenFourFox.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'TenFourFox/' );

/** @return {boolean} */
whatBrowserAmI.brand.TenFourFox.is = function(){
    return !!whatBrowserAmI.brand.TenFourFox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.TenFourFox.detect = function(){
    if( whatBrowserAmI.brand.TenFourFox.is() ){
        p_setBrand( BRAND.TenFourFox, whatBrowserAmI.brand.TenFourFox.NAVIGATOR_VERSION );
        return true;
    };
};