goog.provide( 'iAm.GoogleTV' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.GoogleTV = function(){
    return iAm._platformIs( iAm.EnumPlatform.Google_TV );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.gt = function( version ){
    return iAm.GoogleTV() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.gte = function( version ){
    return iAm.GoogleTV() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.lt = function( version ){
    return iAm.GoogleTV() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.lte = function( version ){
    return iAm.GoogleTV() && iAm._platformVersionLte( version );
};
