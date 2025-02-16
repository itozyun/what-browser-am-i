goog.provide( 'iAm.Maemo' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Maemo = function(){
    return iAm._platformIs( who.PLATFORM.Maemo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.Gt = function( version ){
    return iAm.Maemo() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.Gte = function( version ){
    return iAm.Maemo() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.Lt = function( version ){
    return iAm.Maemo() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.Lte = function( version ){
    return iAm.Maemo() && iAm._platformVersion.Lte( version );
};
