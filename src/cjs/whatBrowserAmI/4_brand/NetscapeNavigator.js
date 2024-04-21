goog.provide( 'whatBrowserAmI.brand.NetscapeNavigator.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.NetscapeNavigator.is' );
goog.provide( 'whatBrowserAmI.brand.NetscapeNavigator.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  NetscapeNavigator
 */

/** @const {string} */
whatBrowserAmI.brand.NetscapeNavigator.NAVIGATOR_VERSION =
    p_getVersionString( p_strUserAgent, 'Netscape6/' ) || // 6
    p_getVersionString( p_strUserAgent, 'Netscape/'  ) || // 7~8
    p_getVersionString( p_strUserAgent, 'Navigator/' );   // 9

/** @return {boolean} */
whatBrowserAmI.brand.NetscapeNavigator.is = function(){
    return !!whatBrowserAmI.brand.NetscapeNavigator.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.NetscapeNavigator.detect = function(){
    if( whatBrowserAmI.brand.NetscapeNavigator.is() ){
        p_setBrand( BRAND.Netscape_Navigator, whatBrowserAmI.brand.NetscapeNavigator.NAVIGATOR_VERSION );
        return true;
    };
};