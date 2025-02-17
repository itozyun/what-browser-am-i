goog.provide( 'iAm.Fidibook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.Fidibook = function(){
    return iAm._deviceIs( iAm.EnumDevice.Fidibook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.gt = function( version ){
    return iAm.Fidibook() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.gte = function( version ){
    return iAm.Fidibook() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.lt = function( version ){
    return iAm.Fidibook() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.lte = function( version ){
    return iAm.Fidibook() && iAm._deviceVersionLte( version );
};
