goog.provide( 'iAm.eClicto' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
    return iAm.eClicto() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.gte = function( version ){
    return iAm.eClicto() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.lt = function( version ){
    return iAm.eClicto() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.lte = function( version ){
    return iAm.eClicto() && iAm._deviceVersion.lte( version );
};
