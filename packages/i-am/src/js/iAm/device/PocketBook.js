goog.provide( 'iAm.PocketBook' );

goog.require( 'who.DEVICE' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.PocketBook = function(){
    return iAm._deviceIs( who.DEVICE.PocketBook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.Gt = function( version ){
    return iAm.PocketBook() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.Gte = function( version ){
    return iAm.PocketBook() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.Lt = function( version ){
    return iAm.PocketBook() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PocketBook.Lte = function( version ){
    return iAm.PocketBook() && iAm._deviceVersion.Lte( version );
};
