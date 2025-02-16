goog.provide( 'who.brand.OperaCoast.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.OperaCoast.is' );
goog.provide( 'who.brand.OperaCoast.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Opera Coast
 */

/** @const {string} */
who.brand.OperaCoast.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strAppVersion, 'Coast/' );

/** @return {boolean} */
who.brand.OperaCoast.is = function(){
    return !!who.brand.OperaCoast.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.OperaCoast.detect = function(){
    if( who.brand.OperaCoast.is() ){
        who.base.setBrand( iAm.EnumBrand.Opera_Coast, who.brand.OperaCoast.NAVIGATOR_VERSION );
        return true;
    };
};
