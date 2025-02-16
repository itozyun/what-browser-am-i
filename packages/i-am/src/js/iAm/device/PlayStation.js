goog.provide( 'iAm.PlayStation' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

/**
 * @return {boolean}
 */
iAm.PlayStation = function(){
    return iAm._deviceIs( iAm.EnumDevice.PlayStation );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.gt = function( version ){
    return iAm.PlayStation() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.gte = function( version ){
    return iAm.PlayStation() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.lt = function( version ){
    return iAm.PlayStation() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation.lte = function( version ){
    return iAm.PlayStation() && iAm._deviceVersion.lte( version );
};
