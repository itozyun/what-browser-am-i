goog.provide( 'who.platform.iOS.is' );
goog.provide( 'who.platform.iOS.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.UCWEB.iOSVersionWithUCWEB' );
goog.require( 'who.brand.Puffin.iOSImplementVersion' );
goog.require( 'who.device.AppleSmartDevice.is' );
goog.require( 'who.brand.Sleipnir.isOnIOS' );
goog.require( 'who.engine.iOSWebView.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  iOS
 *
 *  https://marcus.io/blog/websites-on-apple-watch
 */

/**
 * @private
 * @const {string} */
var iOSNavigatorVersionWithUCWEB  = who.engine.UCWEB.iOSVersionWithUCWEB;

/**
 * @private
 * @const {string|number|void} */
var iOSImplementVersionWithPuffin = who.brand.Puffin.iOSImplementVersion;

/** @return {boolean} */
who.platform.iOS.is = function(){
    return who.device.AppleSmartDevice.is() ||
           !!iOSNavigatorVersionWithUCWEB || !!iOSImplementVersionWithPuffin;
};

/** @return {boolean|void} */
who.platform.iOS.detect = function(){
    if( who.platform.iOS.is() ){
        if( iOSImplementVersionWithPuffin ){
            who.base.setPlatform( iAm.EnumPlatform.iOS, iOSImplementVersionWithPuffin );
        } else {
            who.result.platformName = iAm.EnumPlatform.iOS;

            if( iOSNavigatorVersionWithUCWEB ){
                who.result.platformVersion = iOSNavigatorVersionWithUCWEB;
            } else {
                who.result.platformVersion = who.util.getAppleVersionString( who.env.strAppVersion, 'OS ' );

                if( !who.result.platformVersion ){
                    who.result.isPcSiteRequested = true;
                };

                if( !who.result.platformVersion || who.brand.Sleipnir.isOnIOS ){ // iOS + Sleipnir は嘘のバージョンが UA 文字列に設定されている
                    who.result.platformVersion = who.engine.iOSWebView.IMPLEMENT_VERSION;
                };
            };
        };
        return true;
    };
};
