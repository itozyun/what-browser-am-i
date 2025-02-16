goog.provide( 'who.brand.WebPositive.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.WebPositive.is' );
goog.provide( 'who.brand.WebPositive.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  WebPositive
 */

/** @const {string} */
who.brand.WebPositive.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'WebPositive/' );

/** @return {boolean} */
who.brand.WebPositive.is = function(){
    return !!who.brand.WebPositive.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.WebPositive.detect = function(){
    if( who.brand.WebPositive.is() ){
        p_setBrand( EnumBrand.WebPositive, who.brand.WebPositive.NAVIGATOR_VERSION );
        return true;
    };
};