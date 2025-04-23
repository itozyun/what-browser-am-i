goog.provide( 'iAm.QtWebEngine' );
goog.provide( 'iAm.QtWebEngine.gt' );
goog.provide( 'iAm.QtWebEngine.gte' );
goog.provide( 'iAm.QtWebEngine.lt' );
goog.provide( 'iAm.QtWebEngine.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.QtWebEngine = function(){
    return iAm._engineIs( iAm.EnumEngine.Qt_WebEngine );
};

/*----------------------------------------------------------------------------//
 *  QtWebEngine
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.gt = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.gte = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.lt = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.lte = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersionLte( version );
};
