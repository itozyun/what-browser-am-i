goog.provide( 'iAm.FirefoxOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.FirefoxOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.FirefoxOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.gt = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.gte = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.lt = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.lte = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersionLte( version );
};
