goog.provide( 'who.brand.Iceape.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Iceape.is' );
goog.provide( 'who.brand.Iceape.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Iceape
 */

/** @const {string} */
who.brand.Iceape.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Iceape/' );

/** @return {boolean} */
who.brand.Iceape.is = function(){
    return !!who.brand.Iceape.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Iceape.detect = function(){
    if( who.brand.Iceape.is() ){
        p_setBrand( BRAND.Iceape, who.brand.Iceape.NAVIGATOR_VERSION );
        return true;
    };
};