goog.provide( 'iAm.AndroidTV' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.AndroidTV = function(){
    return iAm._platformIs( iAm.EnumPlatform.Android_TV );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.gt = function( version ){
    return iAm.AndroidTV() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.gte = function( version ){
    return iAm.AndroidTV() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.lt = function( version ){
    return iAm.AndroidTV() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.lte = function( version ){
    return iAm.AndroidTV() && iAm._platformVersionLte( version );
};
