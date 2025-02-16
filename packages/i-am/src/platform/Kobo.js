goog.provide( 'iAm.Kobo' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Kobo = function(){
    return iAm._platformIs( who.PLATFORM.Rakuten_Kobo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.Gt = function( version ){
    return iAm.Kobo() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.Gte = function( version ){
    return iAm.Kobo() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.Lt = function( version ){
    return iAm.Kobo() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.Lte = function( version ){
    return iAm.Kobo() && iAm._platformVersion.Lte( version );
};
