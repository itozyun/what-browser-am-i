goog.provide( 'who.brand.Silk.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Silk.is' );
goog.provide( 'who.brand.Silk.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  UC Browser
 */

/** @const {string} */
who.brand.Silk.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Silk/' );

/** @return {boolean} */
who.brand.Silk.is = function(){
    return !!who.brand.Silk.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Silk.detect = function(){
    if( who.brand.Silk.is() ){
        p_setBrand( BRAND.Silk, who.brand.Silk.NAVIGATOR_VERSION );
        return true;
    };
};
