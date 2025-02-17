goog.provide( 'iAm.SunOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.SunOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.SunOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.gt = function( version ){
    return iAm.SunOS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.gte = function( version ){
    return iAm.SunOS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.lt = function( version ){
    return iAm.SunOS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.lte = function( version ){
    return iAm.SunOS() && iAm._platformVersionLte( version );
};
