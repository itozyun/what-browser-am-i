goog.provide( 'iAm.BlackBerry' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.BlackBerry = function(){
    return iAm._platformIs( who.PLATFORM.BlackBerry );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.Gt = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.Gte = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.Lt = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.Lte = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.Lte( version );
};
