goog.provide( 'iAm.DEFINE.MINIFY' );
goog.provide( 'iAm.UNKNOWN_VALUE' );
goog.provide( 'iAm.DEFINE.ASSUME_ENGINE' );
goog.provide( 'iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION' );
goog.provide( 'iAm.DEFINE.ASSUME_LT__ENGINE_VERSION' );
goog.provide( 'iAm.DEFINE.ASSUME_PLATFORM' );
goog.provide( 'iAm.DEFINE.ASSUME_GTE_PLATFORM_VERSION' );
goog.provide( 'iAm.DEFINE.ASSUME_LT__PLATFORM_VERSION' );
goog.provide( 'iAm.DEFINE.ASSUME_DEVICE' );
goog.provide( 'iAm.DEFINE.ASSUME_GTE_DEVICE_VERSION' );
goog.provide( 'iAm.DEFINE.ASSUME_LT__DEVICE_VERSION' );
goog.provide( 'iAm.DEFINE.ASSUME_DEVICE_TYPE' );

/** @define {boolean} */
iAm.DEFINE.MINIFY = goog.define( 'iAm.DEFINE.MINIFY', false );

/**
 * @package
 * @const {string | number} */
iAm.UNKNOWN_VALUE = iAm.DEFINE.MINIFY ? 0 : '';

/** @define {string | number} */
iAm.DEFINE.ASSUME_ENGINE             = goog.define( 'iAm.DEFINE.ASSUME_ENGINE', iAm.UNKNOWN_VALUE );
/** @define {string | number} */
iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_LT__ENGINE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_LT__ENGINE_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_PLATFORM             = goog.define( 'iAm.DEFINE.ASSUME_PLATFORM', iAm.UNKNOWN_VALUE );
/** @define {string | number} */
iAm.DEFINE.ASSUME_GTE_PLATFORM_VERSION = goog.define( 'iAm.DEFINE.ASSUME_GTE_PLATFORM_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_LT__PLATFORM_VERSION = goog.define( 'iAm.DEFINE.ASSUME_LT__PLATFORM_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_DEVICE             = goog.define( 'iAm.DEFINE.ASSUME_DEVICE', iAm.UNKNOWN_VALUE );
/** @define {string | number} */
iAm.DEFINE.ASSUME_GTE_DEVICE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_GTE_DEVICE_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_LT__DEVICE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_LT__DEVICE_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_DEVICE_TYPE = goog.define( 'iAm.DEFINE.ASSUME_DEVICE_TYPE', iAm.UNKNOWN_VALUE );
