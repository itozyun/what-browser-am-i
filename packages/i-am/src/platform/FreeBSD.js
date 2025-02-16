goog.provide( 'iAm.FreeBSD' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.FreeBSD = function(){
    return iAm._platformIs( who.PLATFORM.FreeBSD );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.Gt = function( version ){
    return iAm.FreeBSD() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.Gte = function( version ){
    return iAm.FreeBSD() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.Lt = function( version ){
    return iAm.FreeBSD() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.Lte = function( version ){
    return iAm.FreeBSD() && iAm._platformVersion.Lte( version );
};
