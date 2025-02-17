goog.provide( 'iAm.Manta' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.Manta = function(){
    return iAm._deviceIs( iAm.EnumDevice.Manta );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.gt = function( version ){
    return iAm.Manta() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.gte = function( version ){
    return iAm.Manta() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.lt = function( version ){
    return iAm.Manta() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.lte = function( version ){
    return iAm.Manta() && iAm._deviceVersionLte( version );
};
