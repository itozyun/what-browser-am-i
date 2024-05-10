goog.provide( 'iAm.WebKit' );
goog.provide( 'iAm.WebKit.Based' );
goog.provide( 'iAm.WebKit.Gt' );
goog.provide( 'iAm.WebKit.Gte' );
goog.provide( 'iAm.WebKit.Lt' );
goog.provide( 'iAm.WebKit.Lte' );
goog.provide( 'iAm.AnyWebKit' );
goog.provide( 'iAm.AnyWebKit.Gt' );
goog.provide( 'iAm.AnyWebKit.Gte' );
goog.provide( 'iAm.AnyWebKit.Lt' );
goog.provide( 'iAm.AnyWebKit.Lte' );
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
goog.require( 'whatBrowserAmI.ENGINE' );

/**
 * @return {boolean}
 */
iAm.WebKit = function(){
    return iAm._engineIs( whatBrowserAmI.ENGINE.WebKit );
};

/*----------------------------------------------------------------------------//
 *  WebKit Based
 */

/**
 * @return {boolean}
 */
iAm.WebKit.Based = function(){
    return iAm.AnyWebKit() || iAm.SafariMobile() || iAm.iOSWebView() || iAm.QtWebKit();
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
 *  Any WebKit
 */

/**
 * @return {boolean}
 */
iAm.AnyWebKit = function(){
    return iAm.WebKit() || iAm.SafariMobile() || iAm.iOSWebView();
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyWebKit.Gt = function( version ){
    return iAm.AnyWebKit() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyWebKit.Gte = function( version ){
    return iAm.AnyWebKit() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyWebKit.Lt = function( version ){
    return iAm.AnyWebKit() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyWebKit.Lte = function( version ){
    return iAm.AnyWebKit() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  SafariMobile
 */

/**
 * @return {boolean}
 */
iAm.SafariMobile = function(){
    return iAm._engineIs( whatBrowserAmI.ENGINE.Safari_Mobile );
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
    return iAm._engineIs( whatBrowserAmI.ENGINE.iOS_WebView );
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
