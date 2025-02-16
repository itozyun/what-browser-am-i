goog.provide( 'iAm.Chromium' );
goog.provide( 'iAm.Chromium.Based' );
goog.provide( 'iAm.Chromium.gt' );
goog.provide( 'iAm.Chromium.gte' );
goog.provide( 'iAm.Chromium.lt' );
goog.provide( 'iAm.Chromium.lte' );
goog.provide( 'iAm.AnyChromium' );
goog.provide( 'iAm.AnyChromium.gt' );
goog.provide( 'iAm.AnyChromium.gte' );
goog.provide( 'iAm.AnyChromium.lt' );
goog.provide( 'iAm.AnyChromium.lte' );
goog.provide( 'iAm.ChromiumMobile' );
goog.provide( 'iAm.ChromiumMobile.gt' );
goog.provide( 'iAm.ChromiumMobile.gte' );
goog.provide( 'iAm.ChromiumMobile.lt' );
goog.provide( 'iAm.ChromiumMobile.lte' );

goog.require( 'iAm.AndroidWebView' );
goog.require( 'iAm.SamsungInternet' );
goog.require( 'iAm.QtWebEngine' );
goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Chromium = function(){
    return iAm._engineIs( iAm.EnumEngine.Chromium );
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
iAm.Chromium.gt = function( version ){
    return iAm.Chromium() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Chromium.gte = function( version ){
    return iAm.Chromium() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Chromium.lt = function( version ){
    return iAm.Chromium() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Chromium.lte = function( version ){
    return iAm.Chromium() && iAm._engineVersion.lte( version );
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
iAm.AnyChromium.gt = function( version ){
    return iAm.AnyChromium() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyChromium.gte = function( version ){
    return iAm.AnyChromium() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyChromium.lt = function( version ){
    return iAm.AnyChromium() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyChromium.lte = function( version ){
    return iAm.AnyChromium() && iAm._engineVersion.lte( version );
};

/*----------------------------------------------------------------------------//
 *  Chromium Mobile
 */

/**
 * @return {boolean}
 */
iAm.ChromiumMobile = function(){
    return iAm._engineIs( iAm.EnumEngine.Chromium_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromiumMobile.gt = function( version ){
    return iAm.ChromiumMobile() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromiumMobile.gte = function( version ){
    return iAm.ChromiumMobile() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromiumMobile.lt = function( version ){
    return iAm.ChromiumMobile() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromiumMobile.lte = function( version ){
    return iAm.ChromiumMobile() && iAm._engineVersion.lte( version );
};
