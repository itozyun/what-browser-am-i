goog.provide( 'iAm.Kobo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Kobo = function(){
    return iAm._platformIs( iAm.EnumPlatform.Rakuten_Kobo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.gt = function( version ){
    return iAm.Kobo() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.gte = function( version ){
    return iAm.Kobo() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.lt = function( version ){
    return iAm.Kobo() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.lte = function( version ){
    return iAm.Kobo() && iAm._platformVersionLte( version );
};
