goog.provide( 'iAm.icarus' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

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
iAm.icarus.Gt = function( version ){
    return iAm.icarus() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.Gte = function( version ){
    return iAm.icarus() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.Lt = function( version ){
    return iAm.icarus() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.icarus.Lte = function( version ){
    return iAm.icarus() && iAm._deviceVersion.Lte( version );
};
