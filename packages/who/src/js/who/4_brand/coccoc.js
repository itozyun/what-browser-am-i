goog.provide( 'who.brand.coccoc.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.coccoc.is' );
goog.provide( 'who.brand.coccoc.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  coccoc
 */

/** @const {string} */
who.brand.coccoc.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'coc_coc_browser/' );

/** @return {boolean} */
who.brand.coccoc.is = function(){
    return !!who.brand.coccoc.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.coccoc.detect = function(){
    if( who.brand.coccoc.is() ){
        p_setBrand( BRAND.coccoc, who.brand.coccoc.NAVIGATOR_VERSION );
        return true;
    };
};