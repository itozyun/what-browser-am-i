goog.provide( 'iAm.WatchOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.WatchOS.Gt = function( version ){
    return iAm.WatchOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.Gte = function( version ){
    return iAm.WatchOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.Lt = function( version ){
    return iAm.WatchOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WatchOS.Lte = function( version ){
    return iAm.WatchOS() && iAm._platformVersion.Lte( version );
};
