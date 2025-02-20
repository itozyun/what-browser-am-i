goog.provide( 'who.brand.Basilisk.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Basilisk.is' );
goog.provide( 'who.brand.Basilisk.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Basilisk
 */

/** @const {string} */
who.brand.Basilisk.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Basilisk/' );

/** @return {boolean} */
who.brand.Basilisk.is = function(){
    return !!who.brand.Basilisk.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Basilisk.detect = function(){
    if( who.brand.Basilisk.is() ){
        who.base.setBrand( iAm.EnumBrand.Basilisk, who.brand.Basilisk.NAVIGATOR_VERSION );
        return true;
    };
};