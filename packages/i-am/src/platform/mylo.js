goog.provide( 'iAm.mylo' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.mylo = function(){
    return iAm._platformIs( who.PLATFORM.SONY_mylo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.Gt = function( version ){
    return iAm.mylo() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.Gte = function( version ){
    return iAm.mylo() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.Lt = function( version ){
    return iAm.mylo() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.Lte = function( version ){
    return iAm.mylo() && iAm._platformVersion.Lte( version );
};
