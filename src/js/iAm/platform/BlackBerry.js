goog.provide( 'iAm.BlackBerry' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.BlackBerry = function(){
    return iAm._platformIs( iAm.EnumPlatform.BlackBerry );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.gt = function( version ){
    return iAm.BlackBerry() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.gte = function( version ){
    return iAm.BlackBerry() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.lt = function( version ){
    return iAm.BlackBerry() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.lte = function( version ){
    return iAm.BlackBerry() && iAm._platformVersionLte( version );
};
