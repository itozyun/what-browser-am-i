goog.provide( 'who.brand.Silk.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Silk.is' );
goog.provide( 'who.brand.Silk.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  UC Browser
 */

/** @const {string} */
who.brand.Silk.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strAppVersion, 'Silk/' );

/** @return {boolean} */
who.brand.Silk.is = function(){
    return !!who.brand.Silk.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Silk.detect = function(){
    if( who.brand.Silk.is() ){
        who.base.setBrand( iAm.EnumBrand.Silk, who.brand.Silk.NAVIGATOR_VERSION );
        return true;
    };
};
