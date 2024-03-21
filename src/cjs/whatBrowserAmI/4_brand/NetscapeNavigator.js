goog.provide( 'whatBrowserAmI.brand.NetscapeNavigator.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.NetscapeNavigator.is' );
goog.provide( 'whatBrowserAmI.brand.NetscapeNavigator.detect' );

/*----------------------------------------------------------------------------//
 *  NetscapeNavigator
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.NetscapeNavigator = {};

/** @const {string} */
whatBrowserAmI.brand.NetscapeNavigator.NAVIGATOR_VERSION =
    p_getVersionString( p_strAppVersion, 'Netscape6/' ) || // 6
    p_getVersionString( p_strAppVersion, 'Netscape/'  ) || // 7~8
    p_getVersionString( p_strAppVersion, 'Navigator/' );   // 9

/** @return {boolean} */
whatBrowserAmI.brand.NetscapeNavigator.is = function(){
    return !!whatBrowserAmI.brand.NetscapeNavigator.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.NetscapeNavigator.detect = function(){
    if( whatBrowserAmI.brand.NetscapeNavigator.is() ){
        p_setBrand( BRAND.NetscapeNavigator, whatBrowserAmI.brand.NetscapeNavigator.NAVIGATOR_VERSION );
        return true;
    };
};