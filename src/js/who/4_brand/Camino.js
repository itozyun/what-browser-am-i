goog.provide( 'who.brand.Camino.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Camino.is' );
goog.provide( 'who.brand.Camino.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Camino
 */

/** @const {string} */
who.brand.Camino.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Camino/' );

/** @return {boolean} */
who.brand.Camino.is = function(){
    return !!who.brand.Camino.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Camino.detect = function(){
    if( who.brand.Camino.is() ){
        who.base.setBrand( iAm.EnumBrand.Camino, who.brand.Camino.NAVIGATOR_VERSION );
        return true;
    };
};