goog.provide( 'iAm.Chromium' );
goog.provide( 'iAm.Chromium.Based' );
goog.provide( 'iAm.Chromium.Gt' );
goog.provide( 'iAm.Chromium.Gte' );
goog.provide( 'iAm.Chromium.Lt' );
goog.provide( 'iAm.Chromium.Lte' );
goog.provide( 'iAm.AnyChromium' );
goog.provide( 'iAm.AnyChromium.Gt' );
goog.provide( 'iAm.AnyChromium.Gte' );
goog.provide( 'iAm.AnyChromium.Lt' );
goog.provide( 'iAm.AnyChromium.Lte' );
goog.provide( 'iAm.ChromiumMobile' );
goog.provide( 'iAm.ChromiumMobile.Gt' );
goog.provide( 'iAm.ChromiumMobile.Gte' );
goog.provide( 'iAm.ChromiumMobile.Lt' );
goog.provide( 'iAm.ChromiumMobile.Lte' );

goog.require( 'iAm.AndroidWebView' );
goog.require( 'iAm.SamsungInternet' );
goog.require( 'iAm.QtWebEngine' );
goog.require( 'who.ENGINE' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Chromium = function(){
    return iAm._engineIs( who.ENGINE.Chromium );
};

/*----------------------------------------------------------------------------//
 *  Chromium Based
 */

/**
 * @return {boolean}
 */
iAm.Chromium.Based = function(){
    return iAm.AnyChromium() || iAm.AndroidWebView() || iAm.SamsungInternet() || iAm.QtWebEngine();
};

/*----------------------------------------------------------------------------//
 *  Chromium
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Chromium.Gt = function( version ){
    return iAm.Chromium() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Chromium.Gte = function( version ){
    return iAm.Chromium() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Chromium.Lt = function( version ){
    return iAm.Chromium() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Chromium.Lte = function( version ){
    return iAm.Chromium() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  Any Chromium
 */

/**
 * @return {boolean}
 */
iAm.AnyChromium = function(){
    return iAm.Chromium() || iAm.ChromiumMobile();
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyChromium.Gt = function( version ){
    return iAm.AnyChromium() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyChromium.Gte = function( version ){
    return iAm.AnyChromium() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyChromium.Lt = function( version ){
    return iAm.AnyChromium() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyChromium.Lte = function( version ){
    return iAm.AnyChromium() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  Chromium Mobile
 */

/**
 * @return {boolean}
 */
iAm.ChromiumMobile = function(){
    return iAm._engineIs( who.ENGINE.Chromium_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromiumMobile.Gt = function( version ){
    return iAm.ChromiumMobile() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromiumMobile.Gte = function( version ){
    return iAm.ChromiumMobile() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromiumMobile.Lt = function( version ){
    return iAm.ChromiumMobile() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromiumMobile.Lte = function( version ){
    return iAm.ChromiumMobile() && iAm._engineVersion.Lte( version );
};
