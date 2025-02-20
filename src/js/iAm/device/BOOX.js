goog.provide( 'iAm.BOOX' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.BOOX = function(){
    return iAm._deviceIs( iAm.EnumDevice.BOOX );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.gt = function( version ){
    return iAm.BOOX() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.gte = function( version ){
    return iAm.BOOX() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.lt = function( version ){
    return iAm.BOOX() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.lte = function( version ){
    return iAm.BOOX() && iAm._deviceVersionLte( version );
};
