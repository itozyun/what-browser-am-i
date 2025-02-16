goog.provide( 'who.brand.SeaMonkey.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.SeaMonkey.is' );
goog.provide( 'who.brand.SeaMonkey.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  SeaMonkey
 */

/** @const {string} */
who.brand.SeaMonkey.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'SeaMonkey/' );

/** @return {boolean} */
who.brand.SeaMonkey.is = function(){
    return !!who.brand.SeaMonkey.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.SeaMonkey.detect = function(){
    if( who.brand.SeaMonkey.is() ){
        p_setBrand( EnumBrand.SeaMonkey, who.brand.SeaMonkey.NAVIGATOR_VERSION );
        return true;
    };
};