goog.provide( 'who.brand.Rockmelt.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Rockmelt.is' );
goog.provide( 'who.brand.Rockmelt.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Rockmelt
 */

/** @const {string} */
who.brand.Rockmelt.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Rockmelt/' );

/** @return {boolean} */
who.brand.Rockmelt.is = function(){
    return !!who.brand.Rockmelt.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Rockmelt.detect = function(){
    if( who.brand.Rockmelt.is() ){
        p_setBrand( EnumBrand.Rockmelt, who.brand.Rockmelt.NAVIGATOR_VERSION );
        return true;
    };
};