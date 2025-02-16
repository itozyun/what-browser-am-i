goog.provide( 'iAm.Cybook' );

goog.require( 'who.DEVICE' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Cybook = function(){
    return iAm._deviceIs( who.DEVICE.Cybook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.Gt = function( version ){
    return iAm.Cybook() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.Gte = function( version ){
    return iAm.Cybook() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.Lt = function( version ){
    return iAm.Cybook() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.Lte = function( version ){
    return iAm.Cybook() && iAm._deviceVersion.Lte( version );
};
