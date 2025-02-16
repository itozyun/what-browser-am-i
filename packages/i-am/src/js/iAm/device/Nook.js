goog.provide( 'iAm.Nook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Nook = function(){
    return iAm._deviceIs( iAm.EnumDevice.Nook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.gt = function( version ){
    return iAm.Nook() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.gte = function( version ){
    return iAm.Nook() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.lt = function( version ){
    return iAm.Nook() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.lte = function( version ){
    return iAm.Nook() && iAm._deviceVersion.lte( version );
};
