goog.provide( 'whatBrowserAmI.brand.Yahoo.isOnAndroid' );
goog.provide( 'whatBrowserAmI.brand.Yahoo.is' );
goog.provide( 'whatBrowserAmI.brand.Yahoo.detect' );

/*----------------------------------------------------------------------------//
 *  Yahoo
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Yahoo = {};

/** @const {boolean} */
whatBrowserAmI.brand.Yahoo.isOnAndroid = p_hasSubstring( p_strAppVersion, 'YJApp-ANDROID' ); // Android 7, Y!browser 2.5.56

/** 
 * https://himenaotaro.hatenablog.com/entry/20151011/1444564265
 * YJApp-IOS ユーザエージェント(User Agent)
 * @const {string}
 */
whatBrowserAmI.brand.Yahoo.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent.toLowerCase(), 'ybrowser/' );

/** @const {boolean} */
whatBrowserAmI.brand.Yahoo.is = function(){
    return whatBrowserAmI.brand.Yahoo.isOnAndroid;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Yahoo.detect = function(){
    if( whatBrowserAmI.brand.Yahoo.is() ){
        p_setBrand( BRAND.Yahoo, whatBrowserAmI.brand.Yahoo.NAVIGATOR_VERSION );
        return true;
    };
};
