goog.provide( 'iAm.Cybook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.Cybook = function(){
    return iAm._deviceIs( iAm.EnumDevice.Cybook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.gt = function( version ){
    return iAm.Cybook() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.gte = function( version ){
    return iAm.Cybook() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.lt = function( version ){
    return iAm.Cybook() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.lte = function( version ){
    return iAm.Cybook() && iAm._deviceVersionLte( version );
};
