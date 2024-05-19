goog.provide( 'who.brand.Yahoo.isOnAndroid' );
goog.provide( 'who.brand.Yahoo.is' );
goog.provide( 'who.brand.Yahoo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Yahoo
 */

/** @const {boolean} */
who.brand.Yahoo.isOnAndroid = p_hasSubstring( p_strAppVersion, 'YJApp-ANDROID' ); // Android 7, Y!browser 2.5.56

/** 
 * https://himenaotaro.hatenablog.com/entry/20151011/1444564265
 * YJApp-IOS ユーザエージェント(User Agent)
 * @const {string}
 */
who.brand.Yahoo.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent.toLowerCase(), 'ybrowser/' );

/** @return {boolean} */
who.brand.Yahoo.is = function(){
    return who.brand.Yahoo.isOnAndroid;
};

/** @return {boolean|void} */
who.brand.Yahoo.detect = function(){
    if( who.brand.Yahoo.is() ){
        p_setBrand( BRAND.Yahoo, who.brand.Yahoo.NAVIGATOR_VERSION );
        return true;
    };
};
