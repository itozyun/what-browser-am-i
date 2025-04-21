goog.provide( 'who.base' );
goog.provide( 'who.base.finalizePlatform' );
goog.provide( 'who.base.finalizeDevice' );
goog.provide( 'who.base.finalizeDeviceType' );
goog.provide( 'who.base.finalizeEngine' );
goog.provide( 'who.base.finalizeBrand' );
goog.provide( 'who.base.finalizePcSiteRequested' );

goog.require( 'who.result' );
goog.require( 'iAm.EnumIndex' );
goog.require( 'who.util' );
goog.require( 'who.env' );

/**
 * 
 * @param {string|number} platform 
 * @param {string|number=} opt_platformVersion 
 * @param {string|number=} opt_deviceType 
 */
who.base.setPlatform = function( platform, opt_platformVersion, opt_deviceType ){
    who.result.platformName = platform;

    if( opt_platformVersion || 0 <= opt_platformVersion ){
        who.result.platformVersion = opt_platformVersion;
    };
    if( opt_deviceType || 0 <= opt_deviceType ){
        who.result.deviceType = opt_deviceType;
    };
};

who.base.finalizePlatform = function(){
    if( who.result.platformName ){
        ua[ iAm.EnumIndex.PLATFORM ] = who.result.platformName;
        if( who.result.platformVersion ){
            ua[ iAm.EnumIndex.PLATFORM_VERSION ] = who.util.toVersionString( who.result.platformVersion );
        };
    };
};

/**
 * 
 * @param {string|number} device 
 * @param {string|number=} opt_deviceGeneration
 * @param {string|number=} opt_deviceType 
 */
who.base.setDevice = function( device, opt_deviceGeneration, opt_deviceType ){
    who.result.deviceName = device;

    if( opt_deviceGeneration || 0 <= opt_deviceGeneration ){
        who.result.deviceGeneration = opt_deviceGeneration;
    };
    if( opt_deviceType || 0 <= opt_deviceType ){
        who.result.deviceType = opt_deviceType;
    };
};

who.base.finalizeDevice = function(){
    if( who.result.deviceName ){
        ua[ iAm.EnumIndex.DEVICE ] = who.result.deviceName;
        if( who.result.deviceGeneration ){
            ua[ iAm.EnumIndex.DEVICE_GENERATION ] = who.util.toVersionString( who.result.deviceGeneration );
        };
    };
};

who.base.finalizeDeviceType = function(){
    if( who.result.deviceType ){
        ua[ iAm.EnumIndex.DEVICE_TYPE ] = who.result.deviceType;
    };
};

/**
 * 
 * @param {string|number} engine 
 * @param {string|number=} opt_engineVersion
 */
who.base.setEngine = function( engine, opt_engineVersion ){
    who.result.engineName = engine;

    if( opt_engineVersion || 0 <= opt_engineVersion ){
        who.result.engineVersion = opt_engineVersion;
    };
};

who.base.finalizeEngine = function(){
    if( who.result.engineName ){
        ua[ iAm.EnumIndex.ENGINE ] = who.result.engineName;
        if( who.result.engineVersion ){
            ua[ iAm.EnumIndex.ENGINE_VERSION ] = who.util.toVersionString( who.result.engineVersion );
        };
    };
};

/**
 * 
 * @param {string|number} brand 
 * @param {string|number=} opt_brandVersion
 */
who.base.setBrand = function( brand, opt_brandVersion ){
    who.result.brandName = brand;

    if( opt_brandVersion || 0 <= opt_brandVersion ){
        who.result.brandVersion = opt_brandVersion;
    };
};

who.base.finalizeBrand = function(){
    if( who.result.brandName ){
        ua[ iAm.EnumIndex.BRAND ] = who.result.brandName;
        if( who.result.brandVersion ){
            ua[ iAm.EnumIndex.BRAND_VERSION ] = who.util.toVersionString( who.result.brandVersion );
        };
    };
};

who.base.finalizePcSiteRequested = function(){
    ua[ iAm.EnumIndex.PCSITE_REQUESTED ] = who.result.isPcSiteRequested;
};
