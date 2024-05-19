goog.provide( 'who.brand.Falkon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Falkon.is' );
goog.provide( 'who.brand.Falkon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Falkon
 */

/** @const {string} */
who.brand.Falkon.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Falkon/' );

/** @return {boolean} */
who.brand.Falkon.is = function(){
    return !!who.brand.Falkon.NAVIGATOR_VERSION || p_engineName === ENGINE.Qt_WebEngine;
};

/** @return {boolean|void} */
who.brand.Falkon.detect = function(){
    if( who.brand.Falkon.is() ){
        p_setBrand( BRAND.Falkon, who.brand.Falkon.NAVIGATOR_VERSION );
        return true;
    };
};