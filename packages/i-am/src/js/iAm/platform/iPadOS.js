goog.provide( 'iAm.iPadOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.iPadOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.iPadOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.gt = function( version ){
    return iAm.iPadOS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.gte = function( version ){
    return iAm.iPadOS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.lt = function( version ){
    return iAm.iPadOS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.lte = function( version ){
    return iAm.iPadOS() && iAm._platformVersionLte( version );
};
