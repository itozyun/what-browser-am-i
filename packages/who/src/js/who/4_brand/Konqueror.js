goog.provide( 'who.brand.Konqueror.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Konqueror.is' );
goog.provide( 'who.brand.Konqueror.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Konqueror
 */

/** @const {string} */
who.brand.Konqueror.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Konqueror/' );

/** @return {boolean} */
who.brand.Konqueror.is = function(){
    return !!who.brand.Konqueror.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Konqueror.detect = function(){
    if( who.brand.Konqueror.is() ){
        who.base.setBrand( iAm.EnumBrand.Konqueror, who.brand.Konqueror.NAVIGATOR_VERSION );
        return true;
    };
};