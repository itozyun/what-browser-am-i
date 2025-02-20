goog.provide( 'iAm.AndroidWebView' );
goog.provide( 'iAm.AndroidWebView.gt' );
goog.provide( 'iAm.AndroidWebView.gte' );
goog.provide( 'iAm.AndroidWebView.lt' );
goog.provide( 'iAm.AndroidWebView.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

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
    return iAm.AndroidWebView() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.gte = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.lt = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidWebView.lte = function( version ){
    return iAm.AndroidWebView() && iAm._engineVersionLte( version );
};
