/** @provideGoog */

/** @const */
var goog = goog || {};

goog.provide = function(name) {};
goog.require = function(namespace) {};
goog.requireType = function(namespace) {};
goog.scope = function(fn) {};

/**
 * @param {string} name The distinguished name to provide.
 * @param {T} defaultValue
 * @return {T} The defined value.
 * @template T
 */
goog.define = function(name, defaultValue) {};
