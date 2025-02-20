goog.provide( 'iAm.Android' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Android = function(){
    return iAm._platformIs( iAm.EnumPlatform.Android );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.gt = function( version ){
    return iAm.Android() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.gte = function( version ){
    return iAm.Android() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.lt = function( version ){
    return iAm.Android() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.lte = function( version ){
    return iAm.Android() && iAm._platformVersionLte( version );
};
