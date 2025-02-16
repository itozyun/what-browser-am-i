goog.provide( 'who.brand.Midori.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Midori.is' );
goog.provide( 'who.brand.Midori.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Midori
 */

/** @const {string} */
who.brand.Midori.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Midori/' );

/** @return {boolean} */
who.brand.Midori.is = function(){
    return !!who.brand.Midori.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Midori.detect = function(){
    if( who.brand.Midori.is() ){
        who.base.setBrand( iAm.EnumBrand.Midori, who.brand.Midori.NAVIGATOR_VERSION );
        return true;
    };
};