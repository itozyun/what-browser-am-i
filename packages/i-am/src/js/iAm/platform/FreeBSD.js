goog.provide( 'iAm.FreeBSD' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.FreeBSD = function(){
    return iAm._platformIs( iAm.EnumPlatform.FreeBSD );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.gt = function( version ){
    return iAm.FreeBSD() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.gte = function( version ){
    return iAm.FreeBSD() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.lt = function( version ){
    return iAm.FreeBSD() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.lte = function( version ){
    return iAm.FreeBSD() && iAm._platformVersionLte( version );
};
