goog.provide( 'iAm.XboxOne' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.XboxOne = function(){
    return iAm._platformIs( iAm.EnumPlatform.Xbox_One$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.gt = function( version ){
    return iAm.XboxOne() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.gte = function( version ){
    return iAm.XboxOne() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.lt = function( version ){
    return iAm.XboxOne() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.lte = function( version ){
    return iAm.XboxOne() && iAm._platformVersionLte( version );
};
