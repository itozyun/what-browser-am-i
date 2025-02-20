goog.provide( 'iAm.Tizen' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Tizen = function(){
    return iAm._platformIs( iAm.EnumPlatform.Tizen );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.gt = function( version ){
    return iAm.Tizen() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.gte = function( version ){
    return iAm.Tizen() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.lt = function( version ){
    return iAm.Tizen() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.lte = function( version ){
    return iAm.Tizen() && iAm._platformVersionLte( version );
};
