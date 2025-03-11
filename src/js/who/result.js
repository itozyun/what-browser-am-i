goog.provide( 'who.result' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm.EnumBrand' );
goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm.EnumDeviceType' );

/** @type {string|number} */
who.result.platformName = iAm.EnumPlatform.Unknown;
/** @type {string|number|void} */
who.result.platformVersion;

/** @type {string|number} */
who.result.engineName = iAm.EnumEngine.Unknown;
/** @type {string|number|void} */
who.result.engineVersion;

/** @type {string|number} */
who.result.brandName = iAm.EnumBrand.Unknown;
/** @type {string|number|void} */
who.result.brandVersion;

/** @type {string|number} */
who.result.deviceName = iAm.EnumDevice.Unknown;
/** @type {string|number|void} */
who.result.deviceGeneration;

/** @type {string|number} */
who.result.deviceType = iAm.EnumDeviceType.Unknown;

/** @type {boolean} */
who.result.isPcSiteRequested = false;

/** @type {boolean} */
who.result.surelyPcSiteRequested = false;
