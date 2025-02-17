goog.provide( 'iAm.OpenBSD' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.OpenBSD = function(){
    return iAm._platformIs( iAm.EnumPlatform.OpenBSD );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.gt = function( version ){
    return iAm.OpenBSD() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.gte = function( version ){
    return iAm.OpenBSD() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.lt = function( version ){
    return iAm.OpenBSD() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.lte = function( version ){
    return iAm.OpenBSD() && iAm._platformVersionLte( version );
};
