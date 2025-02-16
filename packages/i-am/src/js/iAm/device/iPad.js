goog.provide( 'iAm.iPad' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
iAm.iPad.gt = function( version ){
    return iAm.iPad() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.gte = function( version ){
    return iAm.iPad() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.lt = function( version ){
    return iAm.iPad() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.lte = function( version ){
    return iAm.iPad() && iAm._deviceVersion.lte( version );
};
