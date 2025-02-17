goog.provide( 'iAm.Maemo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Maemo = function(){
    return iAm._platformIs( iAm.EnumPlatform.Maemo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.gt = function( version ){
    return iAm.Maemo() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.gte = function( version ){
    return iAm.Maemo() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.lt = function( version ){
    return iAm.Maemo() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.lte = function( version ){
    return iAm.Maemo() && iAm._platformVersionLte( version );
};
