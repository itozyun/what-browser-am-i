goog.provide( 'iAm.WatchOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.WatchOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.WatchOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.gt = function( version ){
    return iAm.WatchOS() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.gte = function( version ){
    return iAm.WatchOS() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.lt = function( version ){
    return iAm.WatchOS() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.lte = function( version ){
    return iAm.WatchOS() && iAm._platformVersionLte( version );
};
