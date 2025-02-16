goog.provide( 'iAm.Ubuntu' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Ubuntu = function(){
    return iAm._platformIs( who.PLATFORM.Ubuntu );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.Gt = function( version ){
    return iAm.Ubuntu() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.Gte = function( version ){
    return iAm.Ubuntu() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.Lt = function( version ){
    return iAm.Ubuntu() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.Lte = function( version ){
    return iAm.Ubuntu() && iAm._platformVersion.Lte( version );
};
