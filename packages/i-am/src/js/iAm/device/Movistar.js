goog.provide( 'iAm.Movistar' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.Movistar = function(){
    return iAm._deviceIs( iAm.EnumDevice.Movistar );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.gt = function( version ){
    return iAm.Movistar() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.gte = function( version ){
    return iAm.Movistar() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.lt = function( version ){
    return iAm.Movistar() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.lte = function( version ){
    return iAm.Movistar() && iAm._deviceVersionLte( version );
};
