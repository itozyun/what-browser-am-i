goog.provide( 'whatBrowserAmI.brand.Silk.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Silk.is' );
goog.provide( 'whatBrowserAmI.brand.Silk.detect' );

/*----------------------------------------------------------------------------//
 *  UC Browser
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Silk = {};

/** @const {string} */
whatBrowserAmI.brand.Silk.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Silk/' );

/** @return {boolean} */
whatBrowserAmI.brand.Silk.is = function(){
    return !!whatBrowserAmI.brand.Silk.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Silk.detect = function(){
    if( whatBrowserAmI.brand.Silk.is() ){
        p_setBrand( BRAND.Silk, whatBrowserAmI.brand.Silk.NAVIGATOR_VERSION );
        return true;
    };
};
