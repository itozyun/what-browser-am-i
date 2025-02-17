goog.provide( 'iAm.Nintendo3DS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Nintendo3DS = function(){
    return iAm._platformIs( iAm.EnumPlatform.NINTENDO_3DS$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nintendo3DS.gt = function( version ){
    return iAm.Nintendo3DS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nintendo3DS.gte = function( version ){
    return iAm.Nintendo3DS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nintendo3DS.lt = function( version ){
    return iAm.Nintendo3DS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nintendo3DS.lte = function( version ){
    return iAm.Nintendo3DS() && iAm._platformVersionLte( version );
};
