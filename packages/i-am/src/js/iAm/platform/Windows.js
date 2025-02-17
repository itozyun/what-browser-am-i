goog.provide( 'iAm.Windows' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Windows = function(){
    return iAm._platformIs( iAm.EnumPlatform.Windows );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.gt = function( version ){
    return iAm.Windows() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.gte = function( version ){
    return iAm.Windows() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.lt = function( version ){
    return iAm.Windows() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.lte = function( version ){
    return iAm.Windows() && iAm._platformVersionLte( version );
};
