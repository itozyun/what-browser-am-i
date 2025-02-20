goog.provide( 'iAm.Ubuntu' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Ubuntu = function(){
    return iAm._platformIs( iAm.EnumPlatform.Ubuntu );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.gt = function( version ){
    return iAm.Ubuntu() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.gte = function( version ){
    return iAm.Ubuntu() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.lt = function( version ){
    return iAm.Ubuntu() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.lte = function( version ){
    return iAm.Ubuntu() && iAm._platformVersionLte( version );
};
