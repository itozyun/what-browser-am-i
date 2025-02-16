goog.provide( 'iAm.Tolino' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
    return iAm.Tolino() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.gte = function( version ){
    return iAm.Tolino() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.lt = function( version ){
    return iAm.Tolino() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.lte = function( version ){
    return iAm.Tolino() && iAm._deviceVersion.lte( version );
};
