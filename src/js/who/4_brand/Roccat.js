goog.provide( 'who.brand.Roccat.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Roccat.is' );
goog.provide( 'who.brand.Roccat.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Roccat
 */

/** @const {string} */
who.brand.Roccat.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Roccat/' );

/** @return {boolean} */
who.brand.Roccat.is = function(){
    return !!who.brand.Roccat.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Roccat.detect = function(){
    if( who.brand.Roccat.is() ){
        who.base.setBrand( iAm.EnumBrand.Roccat, who.brand.Roccat.NAVIGATOR_VERSION );
        return true;
    };
};