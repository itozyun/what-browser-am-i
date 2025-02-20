goog.provide( 'iAm.icarus' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.icarus = function(){
    return iAm._deviceIs( iAm.EnumDevice.icarus );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.gt = function( version ){
    return iAm.icarus() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.gte = function( version ){
    return iAm.icarus() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.lt = function( version ){
    return iAm.icarus() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.lte = function( version ){
    return iAm.icarus() && iAm._deviceVersionLte( version );
};
