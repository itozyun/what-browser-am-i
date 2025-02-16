goog.provide( 'iAm.PocketBook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
    return iAm.PocketBook() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.gte = function( version ){
    return iAm.PocketBook() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.lt = function( version ){
    return iAm.PocketBook() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.lte = function( version ){
    return iAm.PocketBook() && iAm._deviceVersion.lte( version );
};
