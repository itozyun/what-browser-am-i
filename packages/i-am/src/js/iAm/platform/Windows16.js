goog.provide( 'iAm.Windows16' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Windows16 = function(){
    return iAm._platformIs( iAm.EnumPlatform.Windows16 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.gt = function( version ){
    return iAm.Windows16() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.gte = function( version ){
    return iAm.Windows16() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.lt = function( version ){
    return iAm.Windows16() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.lte = function( version ){
    return iAm.Windows16() && iAm._platformVersionLte( version );
};
