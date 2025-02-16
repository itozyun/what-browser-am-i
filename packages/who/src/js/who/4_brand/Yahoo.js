goog.provide( 'who.brand.Yahoo.isOnAndroid' );
goog.provide( 'who.brand.Yahoo.is' );
goog.provide( 'who.brand.Yahoo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Yahoo
 */

/** @const {boolean} */
who.brand.Yahoo.isOnAndroid = who.util.hasSubstring( who.env.strAppVersion, 'YJApp-ANDROID' ); // Android 7, Y!browser 2.5.56

/** 
 * https://himenaotaro.hatenablog.com/entry/20151011/1444564265
 * YJApp-IOS ユーザエージェント(User Agent)
 * @const {string}
 */
who.brand.Yahoo.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent.toLowerCase(), 'ybrowser/' );

/** @return {boolean} */
who.brand.Yahoo.is = function(){
    return who.brand.Yahoo.isOnAndroid;
};

/** @return {boolean|void} */
who.brand.Yahoo.detect = function(){
    if( who.brand.Yahoo.is() ){
        who.base.setBrand( iAm.EnumBrand.Yahoo, who.brand.Yahoo.NAVIGATOR_VERSION );
        return true;
    };
};
