goog.provide( 'iAm.PlayStation5' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.PlayStation5 = function(){
    return iAm._platformIs( iAm.EnumPlatform.PlayStation$R5 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.gt = function( version ){
    return iAm.PlayStation5() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.gte = function( version ){
    return iAm.PlayStation5() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.lt = function( version ){
    return iAm.PlayStation5() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.lte = function( version ){
    return iAm.PlayStation5() && iAm._platformVersionLte( version );
};
