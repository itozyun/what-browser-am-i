goog.provide( 'iAm.NintendoDS' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.NintendoDS = function(){
    return iAm._platformIs( who.PLATFORM.NINTENDO_DS$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.Gt = function( version ){
    return iAm.NintendoDS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.Gte = function( version ){
    return iAm.NintendoDS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.Lt = function( version ){
    return iAm.NintendoDS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.Lte = function( version ){
    return iAm.NintendoDS() && iAm._platformVersion.Lte( version );
};
