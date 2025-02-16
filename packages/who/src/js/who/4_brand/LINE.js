goog.provide( 'who.brand.LINE.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.LINE.is' );
goog.provide( 'who.brand.LINE.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  LINE
 */

/** @const {string} */
who.brand.LINE.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Line/' );

/** @return {boolean} */
who.brand.LINE.is = function(){
    return !!who.brand.LINE.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.LINE.detect = function(){
    if( who.brand.LINE.is() ){
        p_setBrand( EnumBrand.LINE, who.brand.LINE.NAVIGATOR_VERSION );
        return true;
    };
};