goog.provide( 'iAm.Tolino' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.Tolino = function(){
    return iAm._deviceIs( iAm.EnumDevice.Tolino );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.gt = function( version ){
    return iAm.Tolino() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.gte = function( version ){
    return iAm.Tolino() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.lt = function( version ){
    return iAm.Tolino() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.lte = function( version ){
    return iAm.Tolino() && iAm._deviceVersionLte( version );
};
