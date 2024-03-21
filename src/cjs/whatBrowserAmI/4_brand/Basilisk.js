goog.provide( 'whatBrowserAmI.brand.Basilisk.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Basilisk.is' );
goog.provide( 'whatBrowserAmI.brand.Basilisk.detect' );

/*----------------------------------------------------------------------------//
 *  Basilisk
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Basilisk = {};

/** @const {string} */
whatBrowserAmI.brand.Basilisk.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Basilisk/' );

/** @return {boolean} */
whatBrowserAmI.brand.Basilisk.is = function(){
    return !!whatBrowserAmI.brand.Basilisk.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Basilisk.detect = function(){
    if( whatBrowserAmI.brand.Basilisk.is() ){
        p_setBrand( BRAND.Basilisk, whatBrowserAmI.brand.Basilisk.NAVIGATOR_VERSION );
        return true;
    };
};