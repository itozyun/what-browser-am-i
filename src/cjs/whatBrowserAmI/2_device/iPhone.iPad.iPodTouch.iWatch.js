goog.provide( 'whatBrowserAmI.device.AppleSmartDevice.is' );
goog.provide( 'whatBrowserAmI.device.AppleSmartDevice.detect' );

goog.require( 'whatBrowserAmI.engine.UCWEB.iOSVersionWithUCWEB' );
goog.require( 'whatBrowserAmI.brand.Puffin.iOSImplementVersion' );
goog.require( 'whatBrowserAmI.brand.Puffin.clientInfo' );
goog.require( 'whatBrowserAmI.brand.Sleipnir.isOnIOS' );
goog.require( 'whatBrowserAmI.engine.iOSWebView.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  AppleSmartDevice
 *
 *  https://marcus.io/blog/websites-on-apple-watch
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.device.AppleSmartDevice = {};

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
 * @private
 * @const {string} */
var iOSImplementVersionWithPuffin = whatBrowserAmI.brand.Puffin.iOSImplementVersion;

/** @return {boolean} */
whatBrowserAmI.device.AppleSmartDevice.is = function(){
    return p_platformName === PLATFORM.iOS;
};

/** @return {boolean|void} */
whatBrowserAmI.device.AppleSmartDevice.detect = function(){
    if( whatBrowserAmI.device.AppleSmartDevice.is() ){
        if( iOSImplementVersionWithPuffin ){
            var puffinModel = whatBrowserAmI.brand.Puffin.clientInfo.model;

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
