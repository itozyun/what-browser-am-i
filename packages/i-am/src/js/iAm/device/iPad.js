goog.provide( 'iAm.iPad' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.iPad = function(){
    return iAm._deviceIs( iAm.EnumDevice.iPad );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.Gt = function( version ){
    return iAm.iPad() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.Gte = function( version ){
    return iAm.iPad() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.Lt = function( version ){
    return iAm.iPad() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.Lte = function( version ){
    return iAm.iPad() && iAm._deviceVersion.Lte( version );
};
