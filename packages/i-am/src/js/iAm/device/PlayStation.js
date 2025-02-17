goog.provide( 'iAm.PlayStation' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

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
iAm.PlayStation.gt = function( version ){
    return iAm.PlayStation() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.gte = function( version ){
    return iAm.PlayStation() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.lt = function( version ){
    return iAm.PlayStation() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.lte = function( version ){
    return iAm.PlayStation() && iAm._deviceVersionLte( version );
};
