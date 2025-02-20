goog.provide( 'iAm.KindleFire' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.KindleFire = function(){
    return iAm._deviceIs( iAm.EnumDevice.KindleFire );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.gt = function( version ){
    return iAm.KindleFire() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.gte = function( version ){
    return iAm.KindleFire() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.lt = function( version ){
    return iAm.KindleFire() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.lte = function( version ){
    return iAm.KindleFire() && iAm._deviceVersionLte( version );
};
