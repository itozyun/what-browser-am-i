goog.provide( 'who.brand.PaleMoon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.PaleMoon.is' );
goog.provide( 'who.brand.PaleMoon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  PaleMoon
 */

/** @const {string} */
who.brand.PaleMoon.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'PaleMoon/' );

/** @return {boolean} */
who.brand.PaleMoon.is = function(){
    return !!who.brand.PaleMoon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.PaleMoon.detect = function(){
    if( who.brand.PaleMoon.is() ){
        p_setBrand( BRAND.PaleMoon, who.brand.PaleMoon.NAVIGATOR_VERSION );
        return true;
    };
};