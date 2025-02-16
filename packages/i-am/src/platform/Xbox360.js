goog.provide( 'iAm.Xbox360' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Xbox360 = function(){
    return iAm._platformIs( who.PLATFORM.Xbox_360$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.Gt = function( version ){
    return iAm.Xbox360() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.Gte = function( version ){
    return iAm.Xbox360() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.Lt = function( version ){
    return iAm.Xbox360() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.Lte = function( version ){
    return iAm.Xbox360() && iAm._platformVersion.Lte( version );
};
