goog.provide( 'iAm.WebKit' );
goog.provide( 'iAm.WebKit.Based' );
goog.provide( 'iAm.WebKit.gt' );
goog.provide( 'iAm.WebKit.gte' );
goog.provide( 'iAm.WebKit.lt' );
goog.provide( 'iAm.WebKit.lte' );
goog.provide( 'iAm.WebKit.asSafari.gt' );
goog.provide( 'iAm.WebKit.asSafari.gte' );
goog.provide( 'iAm.WebKit.asSafari.lt' );
goog.provide( 'iAm.WebKit.asSafari.lte' );
goog.provide( 'iAm.AnySafariMobile' );
goog.provide( 'iAm.AnySafariMobile.gt' );
goog.provide( 'iAm.AnySafariMobile.gte' );
goog.provide( 'iAm.AnySafariMobile.lt' );
goog.provide( 'iAm.AnySafariMobile.lte' );
goog.provide( 'iAm.SafariMobile' );
goog.provide( 'iAm.SafariMobile.gt' );
goog.provide( 'iAm.SafariMobile.gte' );
goog.provide( 'iAm.SafariMobile.lt' );
goog.provide( 'iAm.SafariMobile.lte' );
goog.provide( 'iAm.iOSWebView' );
goog.provide( 'iAm.iOSWebView.gt' );
goog.provide( 'iAm.iOSWebView.gte' );
goog.provide( 'iAm.iOSWebView.lt' );
goog.provide( 'iAm.iOSWebView.lte' );

goog.require( 'iAm.QtWebKit' );
goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.WebKit = function(){
    return iAm._engineIs( iAm.EnumEngine.WebKit );
};

/*----------------------------------------------------------------------------//
 *  WebKit Based
 */

/**
 * @return {boolean}
 */
iAm.WebKit.Based = function(){
    return iAm.WebKit() || iAm.AnySafariMobile() || iAm.QtWebKit();
};

/*----------------------------------------------------------------------------//
 *  WebKit
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.gt = function( version ){
    return iAm.WebKit() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.gte = function( version ){
    return iAm.WebKit() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.lt = function( version ){
    return iAm.WebKit() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.lte = function( version ){
    return iAm.WebKit() && iAm._engineVersionLte( version );
};

/*----------------------------------------------------------------------------//
 *  WebKit as Safari
 */

/** @const */
iAm.WebKit.asSafari = {};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.asSafari.gt = function( version ){
    return iAm.WebKit() && iAm._safariVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.asSafari.gte = function( version ){
    return iAm.WebKit() && iAm._safariVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.asSafari.lt = function( version ){
    return iAm.WebKit() && iAm._safariVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.asSafari.lte = function( version ){
    return iAm.WebKit() && iAm._safariVersionLte( version );
};

/*----------------------------------------------------------------------------//
 *  Any WebKit
 */

/**
 * @return {boolean}
 */
iAm.AnySafariMobile = function(){
    return iAm.SafariMobile() || iAm.iOSWebView();
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnySafariMobile.gt = function( version ){
    return iAm.AnySafariMobile() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnySafariMobile.gte = function( version ){
    return iAm.AnySafariMobile() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnySafariMobile.lt = function( version ){
    return iAm.AnySafariMobile() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnySafariMobile.lte = function( version ){
    return iAm.AnySafariMobile() && iAm._engineVersionLte( version );
};

/*----------------------------------------------------------------------------//
 *  SafariMobile
 */

/**
 * @return {boolean}
 */
iAm.SafariMobile = function(){
    return iAm._engineIs( iAm.EnumEngine.Safari_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SafariMobile.gt = function( version ){
    return iAm.SafariMobile() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SafariMobile.gte = function( version ){
    return iAm.SafariMobile() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SafariMobile.lt = function( version ){
    return iAm.SafariMobile() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SafariMobile.lte = function( version ){
    return iAm.SafariMobile() && iAm._engineVersionLte( version );
};

/*----------------------------------------------------------------------------//
 *  iOS WebView
 */

/**
 * @return {boolean}
 */
iAm.iOSWebView = function(){
    return iAm._engineIs( iAm.EnumEngine.iOS_WebView );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOSWebView.gt = function( version ){
    return iAm.iOSWebView() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOSWebView.gte = function( version ){
    return iAm.iOSWebView() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOSWebView.lt = function( version ){
    return iAm.iOSWebView() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOSWebView.lte = function( version ){
    return iAm.iOSWebView() && iAm._engineVersionLte( version );
};
