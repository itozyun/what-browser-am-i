goog.provide( 'iAm.Android' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Android = function(){
    return iAm._platformIs( who.PLATFORM.Android );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.Gt = function( version ){
    return iAm.Android() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.Gte = function( version ){
    return iAm.Android() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.Lt = function( version ){
    return iAm.Android() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.Lte = function( version ){
    return iAm.Android() && iAm._platformVersion.Lte( version );
};
