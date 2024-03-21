goog.provide( 'whatBrowserAmI.platform.iOS.is' );
goog.provide( 'whatBrowserAmI.platform.iOS.detect' );

goog.require( 'whatBrowserAmI.engine.UCWEB.iOSVersionWithUCWEB' );
goog.require( 'whatBrowserAmI.brand.Puffin.iOSImplementVersion' );
goog.require( 'whatBrowserAmI.brand.Puffin.clientInfo' );
goog.require( 'whatBrowserAmI.brand.Sleipnir.isOnIOS' );
goog.require( 'whatBrowserAmI.engine.iOSWebView.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  iOS
 *
 *  https://marcus.io/blog/websites-on-apple-watch
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.iOS = {};

/**
 * @private
 * @const {boolean} */
var isIPhone = p_startWith( p_strPlatform, 'iPhone' );
/**
 * @private
 * @const {boolean} */
var isIPad   = p_startWith( p_strPlatform, 'iPad' );
/**
 * @private
 * @const {boolean} */
var isIPod   = p_startWith( p_strPlatform, 'iPod' );

/**
 * https://www.bit-hive.com/articles/20190820
 *   > macOS上のSafariかiPadOS上のSafariか判定するJavaScriptコード例
 * @private
 * @const {boolean} */
var isIPadOSPcSiteRequested = p_strPlatform === 'MacIntel' && p_standalone !== undefined;
/**
 * @private
 * @const {string} */
var iOSNavigatorVersionWithUCWEB  = whatBrowserAmI.engine.UCWEB.iOSVersionWithUCWEB;
/**
 * @private
 * @const {string} */
var iOSImplementVersionWithPuffin = whatBrowserAmI.brand.Puffin.iOSImplementVersion;

/** @return {boolean} */
whatBrowserAmI.platform.iOS.is = function(){
    return isIPhone || isIPad || isIPod || isIPadOSPcSiteRequested ||
           iOSNavigatorVersionWithUCWEB || iOSImplementVersionWithPuffin;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.iOS.detect = function(){
    if( whatBrowserAmI.platform.iOS.is() ){
        if( iOSImplementVersionWithPuffin ){
            var puffinModel = whatBrowserAmI.brand.Puffin.clientInfo.model;

            p_setPlatform( PLATFORM.iOS, iOSImplementVersionWithPuffin );

            switch( puffinModel.substr( 0, 4 ) ){
                case 'iPho' :
                    p_setDevice( DEVICE.iPhone, p_getVersionString( puffinModel, 'iPhone' ) );
                    break;
                case 'iPad' :
                    p_setDevice( DEVICE.iPad, p_getVersionString( puffinModel, 'iPad' ) );
                    break;
                case 'iPod' :
                    p_setDevice( DEVICE.iPod, p_getVersionString( puffinModel, 'iPod' ) );
                    break;
            };
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
            var dpRatioIs1 = window.devicePixelRatio === 1;
            // 4:3 model
            var is43Model  = p_screenWidth === p_screenHeight * 1.5 || p_screenWidth * 1.5 === p_screenHeight;
    
            if( isIPhone ){ // iPhone or iPhone Simulator
                p_setDevice( DEVICE.iPhone, is43Model ? ( dpRatioIs1 ? { max : 3 } : { min : 4, max : 5 } ) : { min : 6 } );
            } else if( isIPad || isIPadOSPcSiteRequested ){ // iPad or iPad Simulator
                p_setDevice( DEVICE.iPad, dpRatioIs1 ? { max : 2 } : { min : 3 } );
            } else if( isIPod ){
                p_setDevice( DEVICE.iPod, is43Model ? ( dpRatioIs1 ? { max : 3 } : 4 ) : { min : 5 } );
            };
        };
        return true;
    };
};
