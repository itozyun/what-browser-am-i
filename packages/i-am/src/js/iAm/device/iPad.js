goog.provide( 'iAm.iPad' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

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
    return iAm.iPad() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.gte = function( version ){
    return iAm.iPad() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.lt = function( version ){
    return iAm.iPad() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPad.lte = function( version ){
    return iAm.iPad() && iAm._deviceVersionLte( version );
};
