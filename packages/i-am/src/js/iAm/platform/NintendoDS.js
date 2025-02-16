goog.provide( 'iAm.NintendoDS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.NintendoDS = function(){
    return iAm._platformIs( iAm.EnumPlatform.NINTENDO_DS$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.gt = function( version ){
    return iAm.NintendoDS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.gte = function( version ){
    return iAm.NintendoDS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.lt = function( version ){
    return iAm.NintendoDS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.lte = function( version ){
    return iAm.NintendoDS() && iAm._platformVersion.lte( version );
};
