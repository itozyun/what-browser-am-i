goog.provide( 'iAm.Nintendo3DS' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Nintendo3DS = function(){
    return iAm._platformIs( who.PLATFORM.NINTENDO_3DS$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nintendo3DS.Gt = function( version ){
    return iAm.Nintendo3DS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nintendo3DS.Gte = function( version ){
    return iAm.Nintendo3DS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nintendo3DS.Lt = function( version ){
    return iAm.Nintendo3DS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nintendo3DS.Lte = function( version ){
    return iAm.Nintendo3DS() && iAm._platformVersion.Lte( version );
};
