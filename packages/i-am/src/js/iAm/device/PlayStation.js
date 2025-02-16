goog.provide( 'iAm.PlayStation' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.PlayStation = function(){
    return iAm._deviceIs( iAm.EnumDevice.PlayStation );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.Gt = function( version ){
    return iAm.PlayStation() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.Gte = function( version ){
    return iAm.PlayStation() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.Lt = function( version ){
    return iAm.PlayStation() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.Lte = function( version ){
    return iAm.PlayStation() && iAm._deviceVersion.Lte( version );
};
