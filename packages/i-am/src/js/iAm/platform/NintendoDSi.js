goog.provide( 'iAm.NintendoDSi' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.NintendoDSi = function(){
    return iAm._platformIs( iAm.EnumPlatform.NINTENDO_DSi$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.gt = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.gte = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.lt = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.lte = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersionLte( version );
};
