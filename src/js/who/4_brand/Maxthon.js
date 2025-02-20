goog.provide( 'who.brand.Maxthon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Maxthon.is' );
goog.provide( 'who.brand.Maxthon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Maxthon
 */

/** @const {string} */
who.brand.Maxthon.NAVIGATOR_VERSION =
    who.util.getVersionString( who.env.strUserAgent, 'Maxthon/' ) ||
    who.util.getVersionString( who.env.strUserAgent, 'Maxthon ' ) ||
    who.util.getVersionString( who.env.strUserAgent, 'MXiOS/'   );

/** @return {boolean} */
who.brand.Maxthon.is = function(){
    return !!who.brand.Maxthon.NAVIGATOR_VERSION || who.util.hasSubstring( who.env.strUserAgent, 'Maxthon' );
};

/** @return {boolean|void} */
who.brand.Maxthon.detect = function(){
    if( who.brand.Maxthon.is() ){
        who.base.setBrand( iAm.EnumBrand.Maxthon, who.brand.Maxthon.NAVIGATOR_VERSION );
        return true;
    };
};