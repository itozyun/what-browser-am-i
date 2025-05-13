/**
 * @externs
 */

/**
 * @const {!Object.<string,(string | number | boolean)> | !Array.<string | number | boolean>}
 */
var ua = {};

/** @const {string}           */ ua.ENGINE            = '';
/** @const {string | number}  */ ua.ENGINE_VERSION    = 0;
/** @const {string}           */ ua.PLATFORM          = '';
/** @const {string | number}  */ ua.PLATFORM_VERSION  = 0;
/** @const {string}           */ ua.BRAND             = '';
/** @const {string | number}  */ ua.BRAND_VERSION     = 0;
/** @const {string}           */ ua.DEVICE            = '';
/** @const {string | number}  */ ua.DEVICE_GENERATION = 0;
/** @const {string}           */ ua.DEVICE_TYPE       = '';
/** @const {boolean}          */ ua.PCSITE_REQUESTED  = false;

/**
 * -1: version1 < version2
 *  0: version1 == version2
 *  1: version1 > version2
 * 
 * @nosideeffects
 * @param {number | string} version1
 * @param {number | string} version2
 * @return {number} -1 or 0 or 1
 */
ua.conpare = function(version1, version2){};
