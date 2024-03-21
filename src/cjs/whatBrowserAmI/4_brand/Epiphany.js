goog.provide( 'whatBrowserAmI.brand.Epiphany.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Epiphany.is' );
goog.provide( 'whatBrowserAmI.brand.Epiphany.detect' );

/*----------------------------------------------------------------------------//
 *  Epiphany
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Epiphany = {};

/** @const {string} */
whatBrowserAmI.brand.Epiphany.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Epiphany/' );

/** @return {boolean} */
whatBrowserAmI.brand.Epiphany.is = function(){
    return !!whatBrowserAmI.brand.Epiphany.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Epiphany.detect = function(){
    if( whatBrowserAmI.brand.Epiphany.is() ){
        p_setBrand( BRAND.Epiphany, whatBrowserAmI.brand.Epiphany.NAVIGATOR_VERSION );
        return true;
    };
};