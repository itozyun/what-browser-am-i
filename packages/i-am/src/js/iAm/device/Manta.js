goog.provide( 'iAm.Manta' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
    return iAm.Manta() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.gte = function( version ){
    return iAm.Manta() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.lt = function( version ){
    return iAm.Manta() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.lte = function( version ){
    return iAm.Manta() && iAm._deviceVersion.lte( version );
};
