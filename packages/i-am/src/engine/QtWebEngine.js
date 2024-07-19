goog.provide( 'iAm.QtWebEngine' );
goog.provide( 'iAm.QtWebEngine.Gt' );
goog.provide( 'iAm.QtWebEngine.Gte' );
goog.provide( 'iAm.QtWebEngine.Lt' );
goog.provide( 'iAm.QtWebEngine.Lte' );

goog.require( 'who.ENGINE' );

/**
 * @return {boolean}
 */
iAm.QtWebEngine = function(){
    return iAm._engineIs( who.ENGINE.QtWebEngine );
};

/*----------------------------------------------------------------------------//
 *  QtWebEngine
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.Gt = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.Gte = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.Lt = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebEngine.Lte = function( version ){
    return iAm.QtWebEngine() && iAm._engineVersion.Lte( version );
};
