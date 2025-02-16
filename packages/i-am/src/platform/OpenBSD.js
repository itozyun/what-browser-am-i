goog.provide( 'iAm.OpenBSD' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.OpenBSD = function(){
    return iAm._platformIs( who.PLATFORM.OpenBSD );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.Gt = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.Gte = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.Lt = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.Lte = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.Lte( version );
};
