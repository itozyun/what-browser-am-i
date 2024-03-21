goog.provide( 'whatBrowserAmI.brand.IceDragon.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.IceDragon.is' );
goog.provide( 'whatBrowserAmI.brand.IceDragon.detect' );

/*----------------------------------------------------------------------------//
 *  IceDragon
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.IceDragon = {};

/** @const {string} */
whatBrowserAmI.brand.IceDragon.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'IceDragon/' );

/** @return {boolean} */
whatBrowserAmI.brand.IceDragon.is = function(){
    return !!whatBrowserAmI.brand.IceDragon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.IceDragon.detect = function(){
    if( whatBrowserAmI.brand.IceDragon.is() ){
        p_setBrand( BRAND.IceDragon, whatBrowserAmI.brand.IceDragon.NAVIGATOR_VERSION );
        return true;
    };
};