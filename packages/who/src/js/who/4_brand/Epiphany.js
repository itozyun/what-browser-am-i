goog.provide( 'who.brand.Epiphany.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Epiphany.is' );
goog.provide( 'who.brand.Epiphany.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Epiphany
 */

/** @const {string} */
who.brand.Epiphany.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Epiphany/' );

/** @return {boolean} */
who.brand.Epiphany.is = function(){
    return !!who.brand.Epiphany.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Epiphany.detect = function(){
    if( who.brand.Epiphany.is() ){
        p_setBrand( BRAND.Epiphany, who.brand.Epiphany.NAVIGATOR_VERSION );
        return true;
    };
};