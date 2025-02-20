goog.provide( 'who.brand.Galeon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Galeon.is' );
goog.provide( 'who.brand.Galeon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Galeon
 */

/** @const {string} */
who.brand.Galeon.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Galeon/' );

/** @return {boolean} */
who.brand.Galeon.is = function(){
    return !!who.brand.Galeon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Galeon.detect = function(){
    if( who.brand.Galeon.is() ){
        who.base.setBrand( iAm.EnumBrand.Galeon, who.brand.Galeon.NAVIGATOR_VERSION );
        return true;
    };
};