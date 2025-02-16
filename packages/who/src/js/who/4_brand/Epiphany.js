goog.provide( 'who.brand.Epiphany.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Epiphany.is' );
goog.provide( 'who.brand.Epiphany.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Epiphany
 */

/** @const {string} */
who.brand.Epiphany.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Epiphany/' );

/** @return {boolean} */
who.brand.Epiphany.is = function(){
    return !!who.brand.Epiphany.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Epiphany.detect = function(){
    if( who.brand.Epiphany.is() ){
        who.base.setBrand( iAm.EnumBrand.Epiphany, who.brand.Epiphany.NAVIGATOR_VERSION );
        return true;
    };
};