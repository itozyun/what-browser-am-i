goog.provide( 'iAm.AndroidWebView' );
goog.provide( 'iAm.AndroidWebView.Gt' );
goog.provide( 'iAm.AndroidWebView.Gte' );
goog.provide( 'iAm.AndroidWebView.Lt' );
goog.provide( 'iAm.AndroidWebView.Lte' );

goog.require( 'who.ENGINE' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.AndroidWebView = function(){
    return iAm._engineIs( who.ENGINE.AndroidWebView );
};

/*----------------------------------------------------------------------------//
 *  AndroidWebView
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.Gt = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.Gte = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.Lt = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.Lte = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersion.Lte( version );
};
