goog.provide( 'whatBrowserAmI.brand.Camino.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Camino.is' );
goog.provide( 'whatBrowserAmI.brand.Camino.detect' );

/*----------------------------------------------------------------------------//
 *  Camino
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Camino = {};

/** @const {string} */
whatBrowserAmI.brand.Camino.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Camino/' );

/** @return {boolean} */
whatBrowserAmI.brand.Camino.is = function(){
    return !!whatBrowserAmI.brand.Camino.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Camino.detect = function(){
    if( whatBrowserAmI.brand.Camino.is() ){
        p_setBrand( BRAND.Camino, whatBrowserAmI.brand.Camino.NAVIGATOR_VERSION );
        return true;
    };
};