goog.provide( 'iAm.Xbox360' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Xbox360 = function(){
    return iAm._platformIs( iAm.EnumPlatform.Xbox_360$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.gt = function( version ){
    return iAm.Xbox360() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.gte = function( version ){
    return iAm.Xbox360() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.lt = function( version ){
    return iAm.Xbox360() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.lte = function( version ){
    return iAm.Xbox360() && iAm._platformVersionLte( version );
};
