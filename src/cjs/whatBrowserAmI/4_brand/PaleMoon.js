goog.provide( 'whatBrowserAmI.brand.PaleMoon.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.PaleMoon.is' );
goog.provide( 'whatBrowserAmI.brand.PaleMoon.detect' );

/*----------------------------------------------------------------------------//
 *  PaleMoon
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.PaleMoon = {};

/** @const {string} */
whatBrowserAmI.brand.PaleMoon.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'PaleMoon/' );

/** @return {boolean} */
whatBrowserAmI.brand.PaleMoon.is = function(){
    return !!whatBrowserAmI.brand.PaleMoon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.PaleMoon.detect = function(){
    if( whatBrowserAmI.brand.PaleMoon.is() ){
        p_setBrand( BRAND.PaleMoon, whatBrowserAmI.brand.PaleMoon.NAVIGATOR_VERSION );
        return true;
    };
};