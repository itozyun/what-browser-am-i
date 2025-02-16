goog.provide( 'who.brand.SeaMonkey.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.SeaMonkey.is' );
goog.provide( 'who.brand.SeaMonkey.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  SeaMonkey
 */

/** @const {string} */
who.brand.SeaMonkey.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'SeaMonkey/' );

/** @return {boolean} */
who.brand.SeaMonkey.is = function(){
    return !!who.brand.SeaMonkey.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.SeaMonkey.detect = function(){
    if( who.brand.SeaMonkey.is() ){
        who.base.setBrand( iAm.EnumBrand.SeaMonkey, who.brand.SeaMonkey.NAVIGATOR_VERSION );
        return true;
    };
};