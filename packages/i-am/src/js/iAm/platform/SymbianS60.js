goog.provide( 'iAm.SymbianS60' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.SymbianS60 = function(){
    return iAm._platformIs( who.PLATFORM.Symbian_OS_S60 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SymbianS60.Gt = function( version ){
    return iAm.SymbianS60() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SymbianS60.Gte = function( version ){
    return iAm.SymbianS60() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SymbianS60.Lt = function( version ){
    return iAm.SymbianS60() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SymbianS60.Lte = function( version ){
    return iAm.SymbianS60() && iAm._platformVersion.Lte( version );
};
