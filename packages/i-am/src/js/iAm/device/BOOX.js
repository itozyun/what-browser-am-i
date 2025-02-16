goog.provide( 'iAm.BOOX' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

/**
 * @return {boolean}
 */
iAm.BOOX = function(){
    return iAm._deviceIs( iAm.EnumDevice.BOOX );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.gt = function( version ){
    return iAm.BOOX() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.gte = function( version ){
    return iAm.BOOX() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.lt = function( version ){
    return iAm.BOOX() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.lte = function( version ){
    return iAm.BOOX() && iAm._deviceVersion.lte( version );
};
