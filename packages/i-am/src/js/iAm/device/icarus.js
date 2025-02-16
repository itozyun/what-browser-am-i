goog.provide( 'iAm.icarus' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

/**
 * @return {boolean}
 */
iAm.icarus = function(){
    return iAm._deviceIs( iAm.EnumDevice.icarus );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.gt = function( version ){
    return iAm.icarus() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.gte = function( version ){
    return iAm.icarus() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.lt = function( version ){
    return iAm.icarus() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.lte = function( version ){
    return iAm.icarus() && iAm._deviceVersion.lte( version );
};
