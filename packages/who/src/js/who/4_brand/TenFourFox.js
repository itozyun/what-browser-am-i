goog.provide( 'who.brand.TenFourFox.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.TenFourFox.is' );
goog.provide( 'who.brand.TenFourFox.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  TenFourFox
 */

/** @const {string} */
who.brand.TenFourFox.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'TenFourFox/' );

/** @return {boolean} */
who.brand.TenFourFox.is = function(){
    return !!who.brand.TenFourFox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.TenFourFox.detect = function(){
    if( who.brand.TenFourFox.is() ){
        p_setBrand( EnumBrand.TenFourFox, who.brand.TenFourFox.NAVIGATOR_VERSION );
        return true;
    };
};