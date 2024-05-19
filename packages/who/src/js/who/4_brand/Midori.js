goog.provide( 'who.brand.Midori.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Midori.is' );
goog.provide( 'who.brand.Midori.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Midori
 */

/** @const {string} */
who.brand.Midori.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Midori/' );

/** @return {boolean} */
who.brand.Midori.is = function(){
    return !!who.brand.Midori.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Midori.detect = function(){
    if( who.brand.Midori.is() ){
        p_setBrand( BRAND.Midori, who.brand.Midori.NAVIGATOR_VERSION );
        return true;
    };
};