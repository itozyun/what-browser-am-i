goog.provide( 'whatBrowserAmI.brand.Epiphany.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Epiphany.is' );
goog.provide( 'whatBrowserAmI.brand.Epiphany.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Epiphany
 */

/** @const {string} */
whatBrowserAmI.brand.Epiphany.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Epiphany/' );

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