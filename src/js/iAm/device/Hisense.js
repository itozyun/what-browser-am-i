goog.provide( 'iAm.Hisense' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.Hisense = function(){
    return iAm._deviceIs( iAm.EnumDevice.Hisense );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.gt = function( version ){
    return iAm.Hisense() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.gte = function( version ){
    return iAm.Hisense() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.lt = function( version ){
    return iAm.Hisense() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.lte = function( version ){
    return iAm.Hisense() && iAm._deviceVersionLte( version );
};
