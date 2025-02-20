goog.provide( 'iAm.FireOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.FireOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.FireOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.gt = function( version ){
    return iAm.FireOS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.gte = function( version ){
    return iAm.FireOS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.lt = function( version ){
    return iAm.FireOS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.lte = function( version ){
    return iAm.FireOS() && iAm._platformVersionLte( version );
};
