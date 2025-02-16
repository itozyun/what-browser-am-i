goog.provide( 'iAm.WatchOS' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.WatchOS = function(){
    return iAm._platformIs( who.PLATFORM.WatchOS );
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
