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

/**
 * @const {!Object|undefined}
 */
var puffinDevice = {
    clientInfo : {
        os        : '',
        osVersion : '',
        model     : ''
    }
};

/**
 * @type {function(!Event)}
 */
Window.prototype.onmoztimechange = function(e){};

/**
 * @type {boolean}
 */
Navigator.prototype.standalone;

/**
 * @type {number}
 */
var screenY;

/**
 * @type {number}
 */
var innerHeight;

/**
 * @type {number}
 */
var outerHeight;

/**
 * @const {!Object|undefined}
 */
var chrome = {};

/**
 * @const {!Object|undefined}
 */
var chromium = {};

/**
 * @const {!Object|undefined}
 */
var opr = {};

/**
 * @const {!Object|undefined}
 */
var __opera = {};

/**
 * iOS 12.2 Sleipnir
 * @const {!Object|undefined}
 */
var FNRBrowser = {}

/**
 * @const {!Object|undefined}
 */
var operamini = {};

/**
 * @const {function()}
 */
var palmGetResource = function(){};

/**
 * @const {!Object|undefined}
 */
var searchBoxJavaBridge_ = {};

/**
 * @type {string}
 */
HTMLElement.prototype.msContentZoomFactor;

/**
 * FireTV Firefox
 * @type {!Object|undefined}
 */
var _firefoxTV_playbackStateObserverJava = {}

/**
 * Maybe Lunascape Android
 * @const {!Object|undefined}
 */
var ReactNativeWebView = {}

/**
 * Opera GX LVL2 (core: 68.0.3618.206)
 * @type {function(!Event)}
 */
window.onoperadetachedviewchange = function(){};

/**
 * @const {!Object|undefined}
 */
opera.wiiremote = {};

 /**
 * @const {!Object|undefined}
 */
var wiiu = {};
