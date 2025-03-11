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
var isIPhone = who.util.startWith( who.env.strPlatform, 'iPhone' );

/**
 * @private
 * @const {boolean} */
var isIPad   = who.util.startWith( who.env.strPlatform, 'iPad' );

/**
 * @private
 * @const {boolean} */
var isIPod   = who.util.startWith( who.env.strPlatform, 'iPod' );

/**
 * https://www.bit-hive.com/articles/20190820
 *   > macOS上のSafariかiPadOS上のSafariか判定するJavaScriptコード例
 * @private
 * @const {boolean} */
var isIPadOSPcSiteRequested = who.env.strPlatform === 'MacIntel' && who.env.standalone !== undefined;

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
                    who.base.setDevice( iAm.EnumDevice.iPhone, who.util.getVersionString( puffinModel, 'iPhone' ), iAm.EnumDeviceType.Phone );
                    break;
                case 'iPad' :
                    who.base.setDevice( iAm.EnumDevice.iPad, who.util.getVersionString( puffinModel, 'iPad' ), iAm.EnumDeviceType.Tablet );
                    break;
                case 'iPod' :
                    who.base.setDevice( iAm.EnumDevice.iPod, who.util.getVersionString( puffinModel, 'iPod' ), iAm.EnumDeviceType.MediaPlayer );
                    break;
            };
        } else {
            var dpRatioIs1 = window.devicePixelRatio === 1;
            // 4:3 model
            var is43Model  = who.env.screenWidth === who.env.screenHeight * 1.5 || who.env.screenWidth * 1.5 === who.env.screenHeight;
    
            if( isIPhone ){ // iPhone or iPhone Simulator
                who.base.setDevice( iAm.EnumDevice.iPhone, is43Model ? ( dpRatioIs1 ? '1~3' : '4~5' ) : '6~', iAm.EnumDeviceType.Phone );
            } else if( isIPad || isIPadOSPcSiteRequested ){ // iPad or iPad Simulator
                who.base.setDevice( iAm.EnumDevice.iPad, dpRatioIs1 ? '~2' : '3~', iAm.EnumDeviceType.Tablet );
            } else if( isIPod ){
                who.base.setDevice( iAm.EnumDevice.iPod, is43Model ? ( dpRatioIs1 ? '~3' : 4 ) : '5~', iAm.EnumDeviceType.MediaPlayer );
            };
        };
        return true;
    };
};
