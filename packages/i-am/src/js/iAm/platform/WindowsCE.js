goog.provide( 'iAm.WindowsCE' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.WindowsCE = function(){
    return iAm._platformIs( iAm.EnumPlatform.Windows_CE );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.gt = function( version ){
    return iAm.WindowsCE() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.gte = function( version ){
    return iAm.WindowsCE() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.lt = function( version ){
    return iAm.WindowsCE() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.lte = function( version ){
    return iAm.WindowsCE() && iAm._platformVersionLte( version );
};
