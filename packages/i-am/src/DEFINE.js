goog.provide( 'iAm.DEFINE' );

goog.require( 'who.ENGINE.Unknown' );
goog.require( 'who.PLATFORM.Unknown' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_ENGINE      = goog.define( 'iAm.DEFINE.ASSUME_ENGINE', who.ENGINE.Unknown );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MIN_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MIN_VERSION', '' );
/** @define {string | number} */
iAm.DEFINE.ASSUME_MAX_VERSION = goog.define( 'iAm.DEFINE.ASSUME_MAX_VERSION', '' );

/** @define {string | number} */
iAm.DEFINE.ASSUME_PLATFORM    = goog.define( 'iAm.DEFINE.ASSUME_PLATFORM', who.PLATFORM.Unknown );