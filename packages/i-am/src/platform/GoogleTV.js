goog.provide( 'iAm.GoogleTV' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.GoogleTV = function(){
    return iAm._platformIs( who.PLATFORM.Google_TV );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.Gt = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.Gte = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.Lt = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.Lte = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.Lte( version );
};
