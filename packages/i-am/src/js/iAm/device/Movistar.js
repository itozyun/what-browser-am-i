goog.provide( 'iAm.Movistar' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

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
iAm.Movistar.Gt = function( version ){
    return iAm.Movistar() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.Gte = function( version ){
    return iAm.Movistar() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.Lt = function( version ){
    return iAm.Movistar() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.Lte = function( version ){
    return iAm.Movistar() && iAm._deviceVersion.Lte( version );
};
