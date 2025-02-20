goog.provide( 'iAm.KaiOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.KaiOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.KaiOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.gt = function( version ){
    return iAm.KaiOS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.gte = function( version ){
    return iAm.KaiOS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.lt = function( version ){
    return iAm.KaiOS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.lte = function( version ){
    return iAm.KaiOS() && iAm._platformVersionLte( version );
};
