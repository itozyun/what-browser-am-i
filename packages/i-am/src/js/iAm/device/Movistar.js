goog.provide( 'iAm.Movistar' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
iAm.Movistar.gt = function( version ){
    return iAm.Movistar() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.gte = function( version ){
    return iAm.Movistar() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.lt = function( version ){
    return iAm.Movistar() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Movistar.lte = function( version ){
    return iAm.Movistar() && iAm._deviceVersion.lte( version );
};
