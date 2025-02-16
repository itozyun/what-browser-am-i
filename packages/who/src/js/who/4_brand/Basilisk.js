goog.provide( 'who.brand.Basilisk.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Basilisk.is' );
goog.provide( 'who.brand.Basilisk.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Basilisk
 */

/** @const {string} */
who.brand.Basilisk.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Basilisk/' );

/** @return {boolean} */
who.brand.Basilisk.is = function(){
    return !!who.brand.Basilisk.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Basilisk.detect = function(){
    if( who.brand.Basilisk.is() ){
        p_setBrand( EnumBrand.Basilisk, who.brand.Basilisk.NAVIGATOR_VERSION );
        return true;
    };
};