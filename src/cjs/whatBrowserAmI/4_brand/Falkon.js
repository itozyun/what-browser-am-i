goog.provide( 'whatBrowserAmI.brand.Falkon.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Falkon.is' );
goog.provide( 'whatBrowserAmI.brand.Falkon.detect' );

/*----------------------------------------------------------------------------//
 *  Falkon
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Falkon = {};

/** @const {string} */
whatBrowserAmI.brand.Falkon.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Falkon/' );

/** @return {boolean} */
whatBrowserAmI.brand.Falkon.is = function(){
    return !!whatBrowserAmI.brand.Falkon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Falkon.detect = function(){
    if( whatBrowserAmI.brand.Falkon.is() ){
        p_setBrand( BRAND.Falkon, whatBrowserAmI.brand.Falkon.NAVIGATOR_VERSION );
        return true;
    };
};