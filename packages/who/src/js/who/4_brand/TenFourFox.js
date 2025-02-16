goog.provide( 'who.brand.TenFourFox.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.TenFourFox.is' );
goog.provide( 'who.brand.TenFourFox.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  TenFourFox
 */

/** @const {string} */
who.brand.TenFourFox.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'TenFourFox/' );

/** @return {boolean} */
who.brand.TenFourFox.is = function(){
    return !!who.brand.TenFourFox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.TenFourFox.detect = function(){
    if( who.brand.TenFourFox.is() ){
        who.base.setBrand( iAm.EnumBrand.TenFourFox, who.brand.TenFourFox.NAVIGATOR_VERSION );
        return true;
    };
};