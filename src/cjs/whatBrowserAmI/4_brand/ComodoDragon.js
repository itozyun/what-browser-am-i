goog.provide( 'whatBrowserAmI.brand.ComodoDragon.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.ComodoDragon.is' );
goog.provide( 'whatBrowserAmI.brand.ComodoDragon.detect' );

/*----------------------------------------------------------------------------//
 *  ComodoDragon
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.ComodoDragon = {};

/** @const {string} */
whatBrowserAmI.brand.ComodoDragon.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Comodo Dragon/' );

/** @return {boolean} */
whatBrowserAmI.brand.ComodoDragon.is = function(){
    return !!whatBrowserAmI.brand.ComodoDragon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.ComodoDragon.detect = function(){
    if( whatBrowserAmI.brand.ComodoDragon.is() ){
        p_setBrand( BRAND.ComodoDragon, whatBrowserAmI.brand.ComodoDragon.NAVIGATOR_VERSION );
        return true;
    };
};