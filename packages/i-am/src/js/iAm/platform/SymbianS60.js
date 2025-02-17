goog.provide( 'iAm.SymbianS60' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.SymbianS60 = function(){
    return iAm._platformIs( iAm.EnumPlatform.Symbian_OS_S60 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SymbianS60.gt = function( version ){
    return iAm.SymbianS60() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SymbianS60.gte = function( version ){
    return iAm.SymbianS60() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SymbianS60.lt = function( version ){
    return iAm.SymbianS60() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SymbianS60.lte = function( version ){
    return iAm.SymbianS60() && iAm._platformVersionLte( version );
};
