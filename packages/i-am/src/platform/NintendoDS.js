goog.provide( 'iAm.NintendoDS' );

goog.require( 'who.PLATFORM' );

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
