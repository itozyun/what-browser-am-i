/**
 * @externs
 */

/** @typedef {{min : (string|number|void), max : (string|number|void)}} */
var VersionRange;

/**
 * @const {!Object.<string,(string|number|boolean|!VersionRange)>|!Array.<string|number|boolean|!VersionRange>}
 */
var ua = {};

/**
 * -1: version1 < version2, 0: version1 == version2, 1: version1 > version2
 * 
 * @nosideeffects
 * @param {number|string} version1
 * @param {number|string} version2
 * @return {number}
 */
ua.conpare = function(version1, version2){}
