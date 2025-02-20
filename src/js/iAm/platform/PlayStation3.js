goog.provide( 'iAm.PlayStation3' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.PlayStation3 = function(){
    return iAm._platformIs( iAm.EnumPlatform.PlayStation$R3 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation3.gt = function( version ){
    return iAm.PlayStation3() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation3.gte = function( version ){
    return iAm.PlayStation3() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation3.lt = function( version ){
    return iAm.PlayStation3() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation3.lte = function( version ){
    return iAm.PlayStation3() && iAm._platformVersionLte( version );
};
