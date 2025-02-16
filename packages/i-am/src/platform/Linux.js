goog.provide( 'iAm.Linux' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Linux = function(){
    return iAm._platformIs( who.PLATFORM.Linux );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.Gt = function( version ){
    return iAm.Linux() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.Gte = function( version ){
    return iAm.Linux() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.Lt = function( version ){
    return iAm.Linux() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.Lte = function( version ){
    return iAm.Linux() && iAm._platformVersion.Lte( version );
};
