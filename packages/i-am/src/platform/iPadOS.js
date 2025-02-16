goog.provide( 'iAm.iPadOS' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.iPadOS = function(){
    return iAm._platformIs( who.PLATFORM.iPadOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.Gt = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.Gte = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.Lt = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.Lte = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.Lte( version );
};
