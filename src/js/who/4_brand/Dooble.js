goog.provide( 'who.brand.Dooble.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Dooble.is' );
goog.provide( 'who.brand.Dooble.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Dooble
 */

/** @const {string} */
who.brand.Dooble.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Dooble/' );

/** @return {boolean} */
who.brand.Dooble.is = function(){
    return !!who.brand.Dooble.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Dooble.detect = function(){
    if( who.brand.Dooble.is() ){
        who.base.setBrand( iAm.EnumBrand.Dooble, who.brand.Dooble.NAVIGATOR_VERSION );
        return true;
    };
};