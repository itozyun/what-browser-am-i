goog.provide( 'who.brand.Waterfox.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Waterfox.is' );
goog.provide( 'who.brand.Waterfox.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Waterfox
 */

/** @const {string} */
who.brand.Waterfox.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Waterfox/' );

/** @return {boolean} */
who.brand.Waterfox.is = function(){
    return !!who.brand.Waterfox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Waterfox.detect = function(){
    if( who.brand.Waterfox.is() ){
        p_setBrand( EnumBrand.Waterfox, who.brand.Waterfox.NAVIGATOR_VERSION );
        return true;
    };
};