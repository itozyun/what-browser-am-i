goog.provide( 'iAm.PlayStation4' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.PlayStation4 = function(){
    return iAm._platformIs( iAm.EnumPlatform.PlayStation$R4 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.gt = function( version ){
    return iAm.PlayStation4() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.gte = function( version ){
    return iAm.PlayStation4() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.lt = function( version ){
    return iAm.PlayStation4() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.lte = function( version ){
    return iAm.PlayStation4() && iAm._platformVersionLte( version );
};
