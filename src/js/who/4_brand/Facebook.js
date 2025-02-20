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
    who.util.getVersionString( who.env.strUserAgent, 'FBAV/' ) ||
    who.util.getVersionString( who.env.strUserAgent, 'FBAN/' );

/** @return {boolean} */
who.brand.Facebook.is = function(){
    return !!who.brand.Facebook.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Facebook.detect = function(){
    if( who.brand.Facebook.is() ){
        who.base.setBrand( iAm.EnumBrand.Facebook, who.brand.Facebook.NAVIGATOR_VERSION );
        return true;
    };
};