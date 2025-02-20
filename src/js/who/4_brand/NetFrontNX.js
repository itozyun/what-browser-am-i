goog.provide( 'who.brand.NetFrontNX.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.NetFrontNX.is' );
goog.provide( 'who.brand.NetFrontNX.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  NetFront NX
 */

/** @const {string} */
who.brand.NetFrontNX.NAVIGATOR_VERSION =
    who.util.getVersionString( who.env.strAppVersion, 'NX/' ) ||
    who.util.getVersionString( who.env.strAppVersion, 'NF/' );

/** @return {boolean} */
who.brand.NetFrontNX.is = function(){
    return !!who.brand.NetFrontNX.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.NetFrontNX.detect = function(){
    if( who.brand.NetFrontNX.is() ){
        who.base.setBrand( iAm.EnumBrand.NetFront$R_Browser_NX, who.brand.NetFrontNX.NAVIGATOR_VERSION );
        return true;
    };
};