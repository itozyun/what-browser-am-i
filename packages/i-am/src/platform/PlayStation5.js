goog.provide( 'iAm.PlayStation5' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStation5 = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$R5 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.Gt = function( version ){
    return iAm.PlayStation5() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.Gte = function( version ){
    return iAm.PlayStation5() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.Lt = function( version ){
    return iAm.PlayStation5() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.Lte = function( version ){
    return iAm.PlayStation5() && iAm._platformVersion.Lte( version );
};
