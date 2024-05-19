goog.provide( 'who.brand.Camino.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Camino.is' );
goog.provide( 'who.brand.Camino.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Camino
 */

/** @const {string} */
who.brand.Camino.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Camino/' );

/** @return {boolean} */
who.brand.Camino.is = function(){
    return !!who.brand.Camino.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Camino.detect = function(){
    if( who.brand.Camino.is() ){
        p_setBrand( BRAND.Camino, who.brand.Camino.NAVIGATOR_VERSION );
        return true;
    };
};