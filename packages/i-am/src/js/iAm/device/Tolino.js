goog.provide( 'iAm.Tolino' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

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
iAm.Tolino.Gt = function( version ){
    return iAm.Tolino() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.Gte = function( version ){
    return iAm.Tolino() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.Lt = function( version ){
    return iAm.Tolino() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tolino.Lte = function( version ){
    return iAm.Tolino() && iAm._deviceVersion.Lte( version );
};
