goog.provide( 'iAm.AndroidTV' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.AndroidTV = function(){
    return iAm._platformIs( who.PLATFORM.Android_TV );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.Gt = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.Gte = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.Lt = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.Lte = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.Lte( version );
};
