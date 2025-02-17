goog.provide( 'iAm.eClicto' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.eClicto = function(){
    return iAm._deviceIs( iAm.EnumDevice.eClicto );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.gt = function( version ){
    return iAm.eClicto() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.gte = function( version ){
    return iAm.eClicto() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.lt = function( version ){
    return iAm.eClicto() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.lte = function( version ){
    return iAm.eClicto() && iAm._deviceVersionLte( version );
};
