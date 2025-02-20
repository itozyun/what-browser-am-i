goog.provide( 'who.brand.Iceape.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Iceape.is' );
goog.provide( 'who.brand.Iceape.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Iceape
 */

/** @const {string} */
who.brand.Iceape.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Iceape/' );

/** @return {boolean} */
who.brand.Iceape.is = function(){
    return !!who.brand.Iceape.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Iceape.detect = function(){
    if( who.brand.Iceape.is() ){
        who.base.setBrand( iAm.EnumBrand.Iceape, who.brand.Iceape.NAVIGATOR_VERSION );
        return true;
    };
};