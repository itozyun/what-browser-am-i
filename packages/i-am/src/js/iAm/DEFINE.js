goog.provide( 'iAm.DEFINE' );

goog.require( 'who.ENGINE' );
goog.require( 'who.PLATFORM' );
goog.require( 'who.DEVICE' );
goog.require( 'who.DEVICE_TYPE' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_ENGINE             = goog.define( 'iAm.DEFINE.ASSUME_ENGINE', who.ENGINE.Unknown );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_PLATFORM             = goog.define( 'iAm.DEFINE.ASSUME_PLATFORM', who.PLATFORM.Unknown );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_DEVICE             = goog.define( 'iAm.DEFINE.ASSUME_PLATFORM', who.DEVICE.Unknown );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_DEVICE_TYPE = goog.define( 'iAm.DEFINE.ASSUME_DEVICE_TYPE', who.DEVICE_TYPE.UNKNOWN );
