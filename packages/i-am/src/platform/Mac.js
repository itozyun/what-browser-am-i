goog.provide( 'iAm.Mac' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Mac = function(){
    return iAm._platformIs( who.PLATFORM.Mac );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.Gt = function( version ){
    return iAm.Mac() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.Gte = function( version ){
    return iAm.Mac() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.Lt = function( version ){
    return iAm.Mac() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.Lte = function( version ){
    return iAm.Mac() && iAm._platformVersion.Lte( version );
};
