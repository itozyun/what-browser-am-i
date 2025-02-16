goog.provide( 'iAm.AndroidWebView' );
goog.provide( 'iAm.AndroidWebView.gt' );
goog.provide( 'iAm.AndroidWebView.gte' );
goog.provide( 'iAm.AndroidWebView.lt' );
goog.provide( 'iAm.AndroidWebView.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/**
 * @return {boolean}
 */
iAm.AndroidWebView = function(){
    return iAm._engineIs( iAm.EnumEngine.AndroidWebView );
};

/*----------------------------------------------------------------------------//
 *  AndroidWebView
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.gt = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.gte = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.lt = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.lte = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersion.lte( version );
};
