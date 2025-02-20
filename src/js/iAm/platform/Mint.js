goog.provide( 'iAm.Mint' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Mint = function(){
    return iAm._platformIs( iAm.EnumPlatform.Mint );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.gt = function( version ){
    return iAm.Mint() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.gte = function( version ){
    return iAm.Mint() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.lt = function( version ){
    return iAm.Mint() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.lte = function( version ){
    return iAm.Mint() && iAm._platformVersionLte( version );
};
