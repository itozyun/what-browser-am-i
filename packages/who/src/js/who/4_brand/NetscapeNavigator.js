goog.provide( 'who.brand.NetscapeNavigator.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.NetscapeNavigator.is' );
goog.provide( 'who.brand.NetscapeNavigator.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  NetscapeNavigator
 */

/** @const {string} */
who.brand.NetscapeNavigator.NAVIGATOR_VERSION =
    who.util.getVersionString( who.env.strUserAgent, 'Netscape6/' ) || // 6
    who.util.getVersionString( who.env.strUserAgent, 'Netscape/'  ) || // 7~8
    who.util.getVersionString( who.env.strUserAgent, 'Navigator/' );   // 9

/** @return {boolean} */
who.brand.NetscapeNavigator.is = function(){
    return !!who.brand.NetscapeNavigator.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.NetscapeNavigator.detect = function(){
    if( who.brand.NetscapeNavigator.is() ){
        who.base.setBrand( iAm.EnumBrand.Netscape_Navigator, who.brand.NetscapeNavigator.NAVIGATOR_VERSION );
        return true;
    };
};