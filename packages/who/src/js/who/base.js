goog.provide( 'who.base' );
goog.provide( 'who.base.finalizePlatform' );
goog.provide( 'who.base.finalizeDevice' );
goog.provide( 'who.base.finalizeDeviceType' );
goog.provide( 'who.base.finalizeEngine' );
goog.provide( 'who.base.finalizeBrand' );
goog.provide( 'who.base.finalizePcSiteRequested' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm.EnumBrand' );
goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm.EnumDeviceType' );
goog.require( 'iAm.EnumIndex' );
goog.require( 'who.env' );
goog.require( 'who.util' );

/** @const */
var EnumPlatform   = iAm.EnumPlatform;
/** @const */
var EnumEngine     = iAm.EnumEngine;
/** @const */
var EnumBrand      = iAm.EnumBrand;
/** @const */
var EnumDevice     = iAm.EnumDevice;
/** @const */
var EnumDeviceType = iAm.EnumDeviceType;
/** @const */
var EnumIndex      = iAm.EnumIndex;

/** @type {string|number} */
var p_platformName = iAm.EnumPlatform.Unknown;
/** @type {string|number|void} */
var p_platformVersion;

/** @type {string|number} */
var p_engineName = iAm.EnumEngine.Unknown;
/** @type {string|number|void} */
var p_engineVersion;

/** @type {string|number} */
var p_brandName = iAm.EnumBrand.Unknown;
/** @type {string|number|void} */
var p_brandVersion;

/** @type {string|number} */
var p_deviceName = iAm.EnumDevice.Unknown;
/** @type {string|number|void} */
var p_deviceGeneration;

/** @type {string|number} */
var p_deviceType = iAm.EnumDeviceType.UNKNOWN;

/** @type {boolean} */
var p_isPcSiteRequested = false;

/** @type {boolean} */
var p_surelyPcSiteRequested = false;

/**
 * detectPlatform の決定後に device, engine, brand で使用
 * @return {boolean}
 */
function p_isAndroidBased(){
    return p_platformName === EnumPlatform.Android ||
           p_platformName === EnumPlatform.FireOS; // TODO Google_TV, Android_TV
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
        ua[ EnumIndex.PLATFORM ] = p_platformName;
        if( p_platformVersion ){
            ua[ EnumIndex.PLATFORM_VERSION ] = p_toVersionString( p_platformVersion );
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
        ua[ EnumIndex.DEVICE ] = p_deviceName;
        if( p_deviceGeneration ){
            ua[ EnumIndex.DEVICE_GENERATION ] = p_toVersionString( p_deviceGeneration );
            // ua[ p_deviceName ] = p_toVersionNumber( p_deviceGeneration );
        } else {
            // ua[ p_deviceName ] = true;
        };
    };
};

who.base.finalizeDeviceType = function(){
    if( p_deviceType ){
        ua[ EnumIndex.DEVICE_TYPE ] = p_deviceType;
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
        ua[ EnumIndex.ENGINE ] = p_engineName;
        if( p_engineVersion ){
            ua[ EnumIndex.ENGINE_VERSION ] = p_toVersionString( p_engineVersion );
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
        ua[ EnumIndex.BRAND ] = p_brandName;
        if( p_brandVersion ){
            ua[ EnumIndex.BRAND_VERSION ] = p_toVersionString( p_brandVersion );
            // ua[ p_brandName ] = p_toVersionNumber( p_brandVersion );
        } else {
            // ua[ p_brandName ] = true;
        };
    };
};

who.base.finalizePcSiteRequested = function(){
    ua[ EnumIndex.PCSITE_REQUESTED ] = p_isPcSiteRequested;
};
