goog.provide( 'iAm.iPhone' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.iPhone = function(){
    return iAm._deviceIs( iAm.EnumDevice.iPhone );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.gt = function( version ){
    return iAm.iPhone() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.gte = function( version ){
    return iAm.iPhone() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.lt = function( version ){
    return iAm.iPhone() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.lte = function( version ){
    return iAm.iPhone() && iAm._deviceVersionLte( version );
};
