goog.provide( 'iAm.WebOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.WebOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.WebOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.gt = function( version ){
    return iAm.WebOS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.gte = function( version ){
    return iAm.WebOS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.lt = function( version ){
    return iAm.WebOS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.lte = function( version ){
    return iAm.WebOS() && iAm._platformVersionLte( version );
};
