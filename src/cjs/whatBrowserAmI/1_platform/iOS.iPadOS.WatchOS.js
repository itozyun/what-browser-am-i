goog.provide( 'whatBrowserAmI.platform.iOS.is' );
goog.provide( 'whatBrowserAmI.platform.iOS.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.engine.UCWEB.iOSVersionWithUCWEB' );
goog.require( 'whatBrowserAmI.brand.Puffin.iOSImplementVersion' );
goog.require( 'whatBrowserAmI.device.AppleSmartDevice.is' );
goog.require( 'whatBrowserAmI.brand.Sleipnir.isOnIOS' );
goog.require( 'whatBrowserAmI.engine.iOSWebView.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  iOS
 *
 *  https://marcus.io/blog/websites-on-apple-watch
 */

/**
 * @private
 * @const {string} */
var iOSNavigatorVersionWithUCWEB  = whatBrowserAmI.engine.UCWEB.iOSVersionWithUCWEB;

/**
 * @private
 * @const {string|number|void} */
var iOSImplementVersionWithPuffin = whatBrowserAmI.brand.Puffin.iOSImplementVersion;

/** @return {boolean} */
whatBrowserAmI.platform.iOS.is = function(){
    return whatBrowserAmI.device.AppleSmartDevice.is() ||
           !!iOSNavigatorVersionWithUCWEB || !!iOSImplementVersionWithPuffin;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.iOS.detect = function(){
    if( whatBrowserAmI.platform.iOS.is() ){
        if( iOSImplementVersionWithPuffin ){
            p_setPlatform( PLATFORM.iOS, iOSImplementVersionWithPuffin );
        } else {
            p_platformName = PLATFORM.iOS;

            if( iOSNavigatorVersionWithUCWEB ){
                p_platformVersion = iOSNavigatorVersionWithUCWEB;
            } else {
                p_platformVersion = p_getAppleVersionString( p_strAppVersion, 'OS ' );

                if( !p_platformVersion ){
                    p_isPcSiteRequested = true;
                };

                if( !p_platformVersion || whatBrowserAmI.brand.Sleipnir.isOnIOS ){ // iOS + Sleipnir は嘘のバージョンが UA 文字列に設定されている
                    p_platformVersion = whatBrowserAmI.engine.iOSWebView.IMPLEMENT_VERSION;
                };
            };
        };
        return true;
    };
};
