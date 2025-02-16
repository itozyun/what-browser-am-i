goog.provide( 'who.brand.Iceweasel.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Iceweasel.is' );
goog.provide( 'who.brand.Iceweasel.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Iceweasel
 */

/** @const {string} */
who.brand.Iceweasel.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Iceweasel/' );

/** @return {boolean} */
who.brand.Iceweasel.is = function(){
    return !!who.brand.Iceweasel.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Iceweasel.detect = function(){
    if( who.brand.Iceweasel.is() ){
        who.base.setBrand( iAm.EnumBrand.Iceweasel, who.brand.Iceweasel.NAVIGATOR_VERSION );
        return true;
    };
};