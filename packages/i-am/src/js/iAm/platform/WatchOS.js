goog.provide( 'iAm.WatchOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
    return iAm.WatchOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.gte = function( version ){
    return iAm.WatchOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.lt = function( version ){
    return iAm.WatchOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.lte = function( version ){
    return iAm.WatchOS() && iAm._platformVersion.lte( version );
};
