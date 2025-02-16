goog.provide( 'who.brand.Falkon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Falkon.is' );
goog.provide( 'who.brand.Falkon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Falkon
 */

/** @const {string} */
who.brand.Falkon.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strAppVersion, 'Falkon/' );

/** @return {boolean} */
who.brand.Falkon.is = function(){
    return !!who.brand.Falkon.NAVIGATOR_VERSION || who.result.engineName === iAm.EnumEngine.Qt_WebEngine;
};

/** @return {boolean|void} */
who.brand.Falkon.detect = function(){
    if( who.brand.Falkon.is() ){
        who.base.setBrand( iAm.EnumBrand.Falkon, who.brand.Falkon.NAVIGATOR_VERSION );
        return true;
    };
};