goog.provide( 'who.brand.IceDragon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.IceDragon.is' );
goog.provide( 'who.brand.IceDragon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  IceDragon
 */

/** @const {string} */
who.brand.IceDragon.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'IceDragon/' );

/** @return {boolean} */
who.brand.IceDragon.is = function(){
    return !!who.brand.IceDragon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.IceDragon.detect = function(){
    if( who.brand.IceDragon.is() ){
        p_setBrand( EnumBrand.IceDragon, who.brand.IceDragon.NAVIGATOR_VERSION );
        return true;
    };
};