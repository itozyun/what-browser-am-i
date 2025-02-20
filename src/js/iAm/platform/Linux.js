goog.provide( 'iAm.Linux' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Linux = function(){
    return iAm._platformIs( iAm.EnumPlatform.Linux );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.gt = function( version ){
    return iAm.Linux() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.gte = function( version ){
    return iAm.Linux() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.lt = function( version ){
    return iAm.Linux() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.lte = function( version ){
    return iAm.Linux() && iAm._platformVersionLte( version );
};
