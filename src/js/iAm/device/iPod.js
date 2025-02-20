goog.provide( 'iAm.iPod' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.iPod = function(){
    return iAm._deviceIs( iAm.EnumDevice.iPod );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.gt = function( version ){
    return iAm.iPod() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.gte = function( version ){
    return iAm.iPod() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.lt = function( version ){
    return iAm.iPod() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.lte = function( version ){
    return iAm.iPod() && iAm._deviceVersionLte( version );
};
