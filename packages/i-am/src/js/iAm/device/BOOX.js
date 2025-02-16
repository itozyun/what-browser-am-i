goog.provide( 'iAm.BOOX' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

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
iAm.BOOX.Gt = function( version ){
    return iAm.BOOX() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.Gte = function( version ){
    return iAm.BOOX() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.Lt = function( version ){
    return iAm.BOOX() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BOOX.Lte = function( version ){
    return iAm.BOOX() && iAm._deviceVersion.Lte( version );
};
