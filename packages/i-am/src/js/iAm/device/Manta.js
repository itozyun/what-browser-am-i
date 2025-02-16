goog.provide( 'iAm.Manta' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

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
iAm.Manta.Gt = function( version ){
    return iAm.Manta() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.Gte = function( version ){
    return iAm.Manta() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.Lt = function( version ){
    return iAm.Manta() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Manta.Lte = function( version ){
    return iAm.Manta() && iAm._deviceVersion.Lte( version );
};
