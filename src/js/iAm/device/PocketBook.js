goog.provide( 'iAm.PocketBook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.PocketBook = function(){
    return iAm._deviceIs( iAm.EnumDevice.PocketBook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.gt = function( version ){
    return iAm.PocketBook() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.gte = function( version ){
    return iAm.PocketBook() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.lt = function( version ){
    return iAm.PocketBook() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.lte = function( version ){
    return iAm.PocketBook() && iAm._deviceVersionLte( version );
};
