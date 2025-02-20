goog.provide( 'iAm.iOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.iOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.iOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.gt = function( version ){
    return iAm.iOS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.gte = function( version ){
    return iAm.iOS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.lt = function( version ){
    return iAm.iOS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.lte = function( version ){
    return iAm.iOS() && iAm._platformVersionLte( version );
};
