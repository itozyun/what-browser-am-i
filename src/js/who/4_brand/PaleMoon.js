goog.provide( 'who.brand.PaleMoon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.PaleMoon.is' );
goog.provide( 'who.brand.PaleMoon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  PaleMoon
 */

/** @const {string} */
who.brand.PaleMoon.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'PaleMoon/' );

/** @return {boolean} */
who.brand.PaleMoon.is = function(){
    return !!who.brand.PaleMoon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.PaleMoon.detect = function(){
    if( who.brand.PaleMoon.is() ){
        who.base.setBrand( iAm.EnumBrand.PaleMoon, who.brand.PaleMoon.NAVIGATOR_VERSION );
        return true;
    };
};