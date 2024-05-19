goog.provide( 'who.brand.NetscapeNavigator.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.NetscapeNavigator.is' );
goog.provide( 'who.brand.NetscapeNavigator.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  NetscapeNavigator
 */

/** @const {string} */
who.brand.NetscapeNavigator.NAVIGATOR_VERSION =
    p_getVersionString( p_strUserAgent, 'Netscape6/' ) || // 6
    p_getVersionString( p_strUserAgent, 'Netscape/'  ) || // 7~8
    p_getVersionString( p_strUserAgent, 'Navigator/' );   // 9

/** @return {boolean} */
who.brand.NetscapeNavigator.is = function(){
    return !!who.brand.NetscapeNavigator.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.NetscapeNavigator.detect = function(){
    if( who.brand.NetscapeNavigator.is() ){
        p_setBrand( BRAND.Netscape_Navigator, who.brand.NetscapeNavigator.NAVIGATOR_VERSION );
        return true;
    };
};