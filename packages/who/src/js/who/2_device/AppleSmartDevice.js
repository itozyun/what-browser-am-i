goog.provide( 'who.device.AppleSmartDevice.is' );
goog.provide( 'who.device.AppleSmartDevice.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.UCWEB.iOSVersionWithUCWEB' );
goog.require( 'who.brand.Puffin.iOSImplementVersion' );
goog.require( 'who.brand.Puffin.clientInfo' );
goog.require( 'who.brand.Sleipnir.isOnIOS' );
goog.require( 'who.engine.iOSWebView.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  AppleSmartDevice
 *
 *  https://marcus.io/blog/websites-on-apple-watch
 */

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

/** @return {boolean} */
who.device.AppleSmartDevice.is = function(){
    return isIPhone || isIPad || isIPod || isIPadOSPcSiteRequested;
};

/** @return {boolean|void} */
who.device.AppleSmartDevice.detect = function(){
    if( who.device.AppleSmartDevice.is() ){
        if( who.brand.Puffin.iOSImplementVersion ){
            var puffinModel = who.brand.Puffin.clientInfo.model;

            switch( puffinModel.substr( 0, 4 ) ){
                case 'iPho' :
                    p_setDevice( EnumDevice.iPhone, p_getVersionString( puffinModel, 'iPhone' ) );
                    break;
                case 'iPad' :
                    p_setDevice( EnumDevice.iPad, p_getVersionString( puffinModel, 'iPad' ) );
                    break;
                case 'iPod' :
                    p_setDevice( EnumDevice.iPod, p_getVersionString( puffinModel, 'iPod' ) );
                    break;
            };
        } else {
            var dpRatioIs1 = window.devicePixelRatio === 1;
            // 4:3 model
            var is43Model  = p_screenWidth === p_screenHeight * 1.5 || p_screenWidth * 1.5 === p_screenHeight;
    
            if( isIPhone ){ // iPhone or iPhone Simulator
                p_setDevice( EnumDevice.iPhone, is43Model ? ( dpRatioIs1 ? '1~3' : '4~5' ) : '6~' );
            } else if( isIPad || isIPadOSPcSiteRequested ){ // iPad or iPad Simulator
                p_setDevice( EnumDevice.iPad, dpRatioIs1 ? '~2' : '3~' );
            } else if( isIPod ){
                p_setDevice( EnumDevice.iPod, is43Model ? ( dpRatioIs1 ? '~3' : 4 ) : '5~' );
            };
        };
        return true;
    };
};
