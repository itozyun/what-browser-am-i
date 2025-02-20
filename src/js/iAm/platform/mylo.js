goog.provide( 'iAm.mylo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.mylo = function(){
    return iAm._platformIs( iAm.EnumPlatform.SONY_mylo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.gt = function( version ){
    return iAm.mylo() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.gte = function( version ){
    return iAm.mylo() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.lt = function( version ){
    return iAm.mylo() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.lte = function( version ){
    return iAm.mylo() && iAm._platformVersionLte( version );
};
