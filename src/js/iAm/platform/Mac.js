goog.provide( 'iAm.Mac' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Mac = function(){
    return iAm._platformIs( iAm.EnumPlatform.Mac );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.gt = function( version ){
    return iAm.Mac() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.gte = function( version ){
    return iAm.Mac() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.lt = function( version ){
    return iAm.Mac() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.lte = function( version ){
    return iAm.Mac() && iAm._platformVersionLte( version );
};
