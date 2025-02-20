goog.provide( 'iAm.NetBSD' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.NetBSD = function(){
    return iAm._platformIs( iAm.EnumPlatform.NetBSD );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.gt = function( version ){
    return iAm.NetBSD() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.gte = function( version ){
    return iAm.NetBSD() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.lt = function( version ){
    return iAm.NetBSD() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.lte = function( version ){
    return iAm.NetBSD() && iAm._platformVersionLte( version );
};
