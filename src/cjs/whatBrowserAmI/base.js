goog.provide( 'whatBrowserAmI.base' );
goog.provide( 'whatBrowserAmI.base.finalizePlatform' );
goog.provide( 'whatBrowserAmI.base.finalizeDevice' );
goog.provide( 'whatBrowserAmI.base.finalizeEngine' );
goog.provide( 'whatBrowserAmI.base.finalizeBrand' );

goog.require( 'whatBrowserAmI' );
goog.require( 'whatBrowserAmI.util' );
goog.require( 'whatBrowserAmI.DEFINE' );
goog.require( 'whatBrowserAmI.PLATFORM' );
goog.require( 'whatBrowserAmI.ENGINE' );
goog.require( 'whatBrowserAmI.BRAND' );
goog.require( 'whatBrowserAmI.DEVICE' );
goog.require( 'whatBrowserAmI.DEVICE_TYPE' );
goog.require( 'whatBrowserAmI.INDEX' );
goog.require( 'whatBrowserAmI.ENV' );

/** @const */
var DEFINE      = whatBrowserAmI.DEFINE;
/** @const */
var PLATFORM    = whatBrowserAmI.PLATFORM;
/** @const */
var ENGINE      = whatBrowserAmI.ENGINE;
/** @const */
var BRAND       = whatBrowserAmI.BRAND;
/** @const */
var DEVICE      = whatBrowserAmI.DEVICE;
/** @const */
var DEVICE_TYPE = whatBrowserAmI.DEVICE_TYPE;
/** @const */
var INDEX       = whatBrowserAmI.INDEX;

/** @type {string|number} */
var p_platformName = whatBrowserAmI.PLATFORM.Unknown;
/** @type {string|number|void} */
var p_platformVersion;

/** @type {string|number} */
var p_engineName = whatBrowserAmI.ENGINE.Unknown;
/** @type {string|number|void} */
var p_engineVersion;

/** @type {string|number} */
var p_brandName = whatBrowserAmI.BRAND.Unknown;
/** @type {string|number|void} */
var p_brandVersion;

/** @type {string|number} */
var p_deviceName = whatBrowserAmI.DEVICE.Unknown;
/** @type {string|number|void} */
var p_deviceGeneration;

/** @type {string|number|void} */
var p_deviceType = whatBrowserAmI.DEVICE_TYPE.UNKNOWN;

/** @type {boolean} */
var p_isPcSiteRequested = false;

/** @type {boolean} */
var p_surelyPcSiteRequested = false;

/**
 * detectPlatform の決定後に device, engine, brand で使用
 * @return {boolean}
 */
function p_isAndroidBased(){
    return p_platformName === PLATFORM.Android ||
           p_platformName === PLATFORM.FireOS; 
};

/**
 * 
 * @param {string|number} platform 
 * @param {string|number=} opt_platformVersion 
 * @param {string|number=} opt_deviceType 
 */
function p_setPlatform( platform, opt_platformVersion, opt_deviceType ){
    p_platformName = platform;

    if( opt_platformVersion || 0 <= opt_platformVersion ){
        p_platformVersion = opt_platformVersion;
    };
    if( opt_deviceType || 0 <= opt_deviceType ){
        p_deviceType = opt_deviceType;
    };
};

whatBrowserAmI.base.finalizePlatform = function(){
    if( p_platformName ){
        ua[ INDEX.PLATFORM ] = p_platformName;
        if( p_platformVersion ){
            ua[ INDEX.PLATFORM_VERSION ] = p_toVersionString( p_platformVersion );
            // ua[ p_platformName ] = p_toVersionNumber( p_platformVersion );
        } else {
            // ua[ p_platformName ] = true;
        };
    };
};

/**
 * 
 * @param {string|number} device 
 * @param {string|number=} opt_deviceGeneration
 */
function p_setDevice( device, opt_deviceGeneration ){
    p_deviceName = device;

    if( opt_deviceGeneration || 0 <= opt_deviceGeneration ){
        p_deviceGeneration = opt_deviceGeneration;
    };
};

whatBrowserAmI.base.finalizeDevice = function(){
    if( p_deviceName ){
        ua[ INDEX.DEVICE ] = p_deviceName;
        if( p_deviceGeneration ){
            ua[ INDEX.DEVICE_GENERATIOMN ] = p_toVersionString( p_deviceGeneration );
            // ua[ p_deviceName ] = p_toVersionNumber( p_deviceGeneration );
        } else {
            // ua[ p_deviceName ] = true;
        };
    };
};

/**
 * 
 * @param {string|number} engine 
 * @param {string|number=} opt_engineVersion
 */
function p_setEngine( engine, opt_engineVersion ){
    p_engineName = engine;

    if( opt_engineVersion || 0 <= opt_engineVersion ){
        p_engineVersion = opt_engineVersion;
    };
};

whatBrowserAmI.base.finalizeEngine = function(){
    if( p_engineName ){
        ua[ INDEX.ENGINE ] = p_engineName;
        if( p_engineVersion ){
            ua[ INDEX.ENGINE_VERSION ] = p_toVersionString( p_engineVersion );
            // ua[ p_engineName ] = p_toVersionNumber( p_engineVersion );
        } else {
            // ua[ p_engineName ] = true;
        };
    };
};

/**
 * 
 * @param {string|number} brand 
 * @param {string|number=} opt_brandVersion
 */
function p_setBrand( brand, opt_brandVersion ){
    p_brandName = brand;

    if( opt_brandVersion || 0 <= opt_brandVersion ){
        p_brandVersion = opt_brandVersion;
    };
};

whatBrowserAmI.base.finalizeBrand = function(){
    if( p_brandName ){
        ua[ INDEX.BRAND ] = p_brandName;
        if( p_brandVersion ){
            ua[ INDEX.BRAND_VERSION ] = p_toVersionString( p_brandVersion );
            // ua[ p_brandName ] = p_toVersionNumber( p_brandVersion );
        } else {
            // ua[ p_brandName ] = true;
        };
    };
};
