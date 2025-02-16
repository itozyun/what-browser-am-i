goog.provide( 'iAm.eClicto' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

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
iAm.eClicto.Gt = function( version ){
    return iAm.eClicto() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.Gte = function( version ){
    return iAm.eClicto() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.Lt = function( version ){
    return iAm.eClicto() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.eClicto.Lte = function( version ){
    return iAm.eClicto() && iAm._deviceVersion.Lte( version );
};
