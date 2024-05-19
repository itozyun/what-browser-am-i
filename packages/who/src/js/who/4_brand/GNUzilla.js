goog.provide( 'who.brand.GNUzilla.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.GNUzilla.is' );
goog.provide( 'who.brand.GNUzilla.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  GNUzilla
 */

/** @const {string} */
who.brand.GNUzilla.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'GNUzilla/' );

/** @return {boolean} */
who.brand.GNUzilla.is = function(){
    return !!who.brand.GNUzilla.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.GNUzilla.detect = function(){
    if( who.brand.GNUzilla.is() ){
        p_setBrand( BRAND.GNUzilla, who.brand.GNUzilla.NAVIGATOR_VERSION );
        return true;
    };
};