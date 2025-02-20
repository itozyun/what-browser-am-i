goog.provide( 'iAm.NintendoDS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

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
    return iAm.NintendoDS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.gte = function( version ){
    return iAm.NintendoDS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.lt = function( version ){
    return iAm.NintendoDS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDS.lte = function( version ){
    return iAm.NintendoDS() && iAm._platformVersionLte( version );
};
