goog.provide( 'who.brand.coccoc.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.coccoc.is' );
goog.provide( 'who.brand.coccoc.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  coccoc
 */

/** @const {string} */
who.brand.coccoc.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'coc_coc_browser/' );

/** @return {boolean} */
who.brand.coccoc.is = function(){
    return !!who.brand.coccoc.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.coccoc.detect = function(){
    if( who.brand.coccoc.is() ){
        who.base.setBrand( iAm.EnumBrand.coccoc, who.brand.coccoc.NAVIGATOR_VERSION );
        return true;
    };
};