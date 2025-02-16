goog.provide( 'iAm.FireTV' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
    return iAm.FireTV() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.gte = function( version ){
    return iAm.FireTV() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.lt = function( version ){
    return iAm.FireTV() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.lte = function( version ){
    return iAm.FireTV() && iAm._deviceVersion.lte( version );
};
