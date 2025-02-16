goog.provide( 'iAm.QtWebEngine' );
goog.provide( 'iAm.QtWebEngine.gt' );
goog.provide( 'iAm.QtWebEngine.gte' );
goog.provide( 'iAm.QtWebEngine.lt' );
goog.provide( 'iAm.QtWebEngine.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/**
 * @return {boolean}
 */
iAm.QtWebEngine = function(){
    return iAm._engineIs( iAm.EnumEngine.QtWebEngine );
};

/*----------------------------------------------------------------------------//
 *  QtWebEngine
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.gt = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.gte = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.lt = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.lte = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersion.lte( version );
};
