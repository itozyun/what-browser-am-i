goog.provide( 'whatBrowserAmI.brand.Facebook.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Facebook.is' );
goog.provide( 'whatBrowserAmI.brand.Facebook.detect' );

/*----------------------------------------------------------------------------//
 *  Facebook
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Facebook = {};

/**
 * https://twitter.com/itozyun/status/1293709088501555200
 * @const {string} */
whatBrowserAmI.brand.Facebook.NAVIGATOR_VERSION =
    p_getVersionString( p_strAppVersion, 'FBAV/' ) ||
    p_getVersionString( p_strAppVersion, 'FBAN/' );

/** @return {boolean} */
whatBrowserAmI.brand.Facebook.is = function(){
    return !!whatBrowserAmI.brand.Facebook.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Facebook.detect = function(){
    if( whatBrowserAmI.brand.Facebook.is() ){
        p_setBrand( BRAND.Facebook, whatBrowserAmI.brand.Facebook.NAVIGATOR_VERSION );
        return true;
    };
};