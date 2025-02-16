goog.provide( 'iAm.DEFINE.MINIFY' );

/**
 * @define {boolean}
 */
iAm.DEFINE.MINIFY = goog.define( 'iAm.DEFINE.MINIFY', false );

/** @define {string | number} */
iAm.DEFINE.ASSUME_ENGINE             = goog.define( 'iAm.DEFINE.ASSUME_ENGINE', iAm.DEFINE.MINIFY ? 0 : '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_PLATFORM             = goog.define( 'iAm.DEFINE.ASSUME_PLATFORM', iAm.DEFINE.MINIFY ? 0 : '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_DEVICE             = goog.define( 'iAm.DEFINE.ASSUME_DEVICE', iAm.DEFINE.MINIFY ? 0 : '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_DEVICE_TYPE = goog.define( 'iAm.DEFINE.ASSUME_DEVICE_TYPE', iAm.DEFINE.MINIFY ? 0 : '' );
