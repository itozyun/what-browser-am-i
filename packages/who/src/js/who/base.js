goog.provide( 'who.base' );
goog.provide( 'who.base.finalizePlatform' );
goog.provide( 'who.base.finalizeDevice' );
goog.provide( 'who.base.finalizeDeviceType' );
goog.provide( 'who.base.finalizeEngine' );
goog.provide( 'who.base.finalizeBrand' );
goog.provide( 'who.base.finalizePcSiteRequested' );

goog.require( 'who.ENUM' );
goog.require( 'who.env' );
goog.require( 'who.util' );

/** @const */
var PLATFORM    = who.PLATFORM;
/** @const */
var ENGINE      = who.ENGINE;
/** @const */
var BRAND       = who.BRAND;
/** @const */
var DEVICE      = who.DEVICE;
/** @const */
var DEVICE_TYPE = who.DEVICE_TYPE;
/** @const */
var INDEX       = who.INDEX;

/** @type {string|number} */
var p_platformName = who.PLATFORM.Unknown;
/** @type {string|number|void} */
var p_platformVersion;

/** @type {string|number} */
var p_engineName = who.ENGINE.Unknown;
/** @type {string|number|void} */
var p_engineVersion;

/** @type {string|number} */
var p_brandName = who.BRAND.Unknown;
/** @type {string|number|void} */
var p_brandVersion;

/** @type {string|number} */
var p_deviceName = who.DEVICE.Unknown;
/** @type {string|number|void} */
var p_deviceGeneration;

/** @type {string|number} */
var p_deviceType = who.DEVICE_TYPE.UNKNOWN;

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
           p_platformName === PLATFORM.FireOS; // TODO Google_TV, Android_TV
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

who.base.finalizePlatform = function(){
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
 * @param {string|number=} opt_deviceType 
 */
function p_setDevice( device, opt_deviceGeneration, opt_deviceType ){
    p_deviceName = device;

    if( opt_deviceGeneration || 0 <= opt_deviceGeneration ){
        p_deviceGeneration = opt_deviceGeneration;
    };
    if( opt_deviceType || 0 <= opt_deviceType ){
        p_deviceType = opt_deviceType;
    };
};

who.base.finalizeDevice = function(){
    if( p_deviceName ){
        ua[ INDEX.DEVICE ] = p_deviceName;
        if( p_deviceGeneration ){
            ua[ INDEX.DEVICE_GENERATION ] = p_toVersionString( p_deviceGeneration );
            // ua[ p_deviceName ] = p_toVersionNumber( p_deviceGeneration );
        } else {
            // ua[ p_deviceName ] = true;
        };
    };
};

who.base.finalizeDeviceType = function(){
    if( p_deviceType ){
        ua[ INDEX.DEVICE_TYPE ] = p_deviceType;
        // ua[ p_deviceName ] = p_toVersionNumber( p_deviceGeneration );
    } else {
        // ua[ p_deviceName ] = true;
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

who.base.finalizeEngine = function(){
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

who.base.finalizeBrand = function(){
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

who.base.finalizePcSiteRequested = function(){
    ua[ INDEX.PCSITE_REQUESTED ] = p_isPcSiteRequested;
};
