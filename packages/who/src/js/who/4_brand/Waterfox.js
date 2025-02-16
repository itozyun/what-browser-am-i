goog.provide( 'who.brand.Waterfox.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Waterfox.is' );
goog.provide( 'who.brand.Waterfox.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Waterfox
 */

/** @const {string} */
who.brand.Waterfox.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Waterfox/' );

/** @return {boolean} */
who.brand.Waterfox.is = function(){
    return !!who.brand.Waterfox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Waterfox.detect = function(){
    if( who.brand.Waterfox.is() ){
        who.base.setBrand( iAm.EnumBrand.Waterfox, who.brand.Waterfox.NAVIGATOR_VERSION );
        return true;
    };
};