goog.provide( 'who.brand.Facebook.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Facebook.is' );
goog.provide( 'who.brand.Facebook.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Facebook
 */

/**
 * https://twitter.com/itozyun/status/1293709088501555200
 * @const {string} */
who.brand.Facebook.NAVIGATOR_VERSION =
    p_getVersionString( p_strUserAgent, 'FBAV/' ) ||
    p_getVersionString( p_strUserAgent, 'FBAN/' );

/** @return {boolean} */
who.brand.Facebook.is = function(){
    return !!who.brand.Facebook.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Facebook.detect = function(){
    if( who.brand.Facebook.is() ){
        p_setBrand( EnumBrand.Facebook, who.brand.Facebook.NAVIGATOR_VERSION );
        return true;
    };
};