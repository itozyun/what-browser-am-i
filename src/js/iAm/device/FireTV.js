goog.provide( 'iAm.FireTV' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.FireTV = function(){
    return iAm._deviceIs( iAm.EnumDevice.FireTV );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.gt = function( version ){
    return iAm.FireTV() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.gte = function( version ){
    return iAm.FireTV() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.lt = function( version ){
    return iAm.FireTV() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.lte = function( version ){
    return iAm.FireTV() && iAm._deviceVersionLte( version );
};
