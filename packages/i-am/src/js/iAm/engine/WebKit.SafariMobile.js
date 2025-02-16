goog.provide( 'iAm.WebKit' );
goog.provide( 'iAm.WebKit.Based' );
goog.provide( 'iAm.WebKit.Gt' );
goog.provide( 'iAm.WebKit.Gte' );
goog.provide( 'iAm.WebKit.Lt' );
goog.provide( 'iAm.WebKit.Lte' );
goog.provide( 'iAm.WebKit.asSafari.Gt' );
goog.provide( 'iAm.WebKit.asSafari.Gte' );
goog.provide( 'iAm.WebKit.asSafari.Lt' );
goog.provide( 'iAm.WebKit.asSafari.Lte' );
goog.provide( 'iAm.AnySafariMobile' );
goog.provide( 'iAm.AnySafariMobile.Gt' );
goog.provide( 'iAm.AnySafariMobile.Gte' );
goog.provide( 'iAm.AnySafariMobile.Lt' );
goog.provide( 'iAm.AnySafariMobile.Lte' );
goog.provide( 'iAm.SafariMobile' );
goog.provide( 'iAm.SafariMobile.Gt' );
goog.provide( 'iAm.SafariMobile.Gte' );
goog.provide( 'iAm.SafariMobile.Lt' );
goog.provide( 'iAm.SafariMobile.Lte' );
goog.provide( 'iAm.iOSWebView' );
goog.provide( 'iAm.iOSWebView.Gt' );
goog.provide( 'iAm.iOSWebView.Gte' );
goog.provide( 'iAm.iOSWebView.Lt' );
goog.provide( 'iAm.iOSWebView.Lte' );

goog.require( 'iAm.QtWebKit' );
goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

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
iAm.WebKit.Gt = function( version ){
    return iAm.WebKit() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.Gte = function( version ){
    return iAm.WebKit() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.Lt = function( version ){
    return iAm.WebKit() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.Lte = function( version ){
    return iAm.WebKit() && iAm._engineVersion.Lte( version );
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
iAm.WebKit.asSafari.Gt = function( version ){
    return iAm.WebKit() && iAm._safariVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.asSafari.Gte = function( version ){
    return iAm.WebKit() && iAm._safariVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.asSafari.Lt = function( version ){
    return iAm.WebKit() && iAm._safariVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebKit.asSafari.Lte = function( version ){
    return iAm.WebKit() && iAm._safariVersion.Lte( version );
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
iAm.AnySafariMobile.Gt = function( version ){
    return iAm.AnySafariMobile() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnySafariMobile.Gte = function( version ){
    return iAm.AnySafariMobile() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnySafariMobile.Lt = function( version ){
    return iAm.AnySafariMobile() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnySafariMobile.Lte = function( version ){
    return iAm.AnySafariMobile() && iAm._engineVersion.Lte( version );
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
iAm.SafariMobile.Gt = function( version ){
    return iAm.SafariMobile() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SafariMobile.Gte = function( version ){
    return iAm.SafariMobile() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SafariMobile.Lt = function( version ){
    return iAm.SafariMobile() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SafariMobile.Lte = function( version ){
    return iAm.SafariMobile() && iAm._engineVersion.Lte( version );
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
iAm.iOSWebView.Gt = function( version ){
    return iAm.iOSWebView() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOSWebView.Gte = function( version ){
    return iAm.iOSWebView() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOSWebView.Lt = function( version ){
    return iAm.iOSWebView() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOSWebView.Lte = function( version ){
    return iAm.iOSWebView() && iAm._engineVersion.Lte( version );
};
