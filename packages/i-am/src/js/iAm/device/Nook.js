goog.provide( 'iAm.Nook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

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
    return iAm.Nook() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.gte = function( version ){
    return iAm.Nook() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.lt = function( version ){
    return iAm.Nook() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.lte = function( version ){
    return iAm.Nook() && iAm._deviceVersionLte( version );
};
