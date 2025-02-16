goog.provide( 'iAm.PlayStation4' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStation4 = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$R4 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.Gt = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.Gte = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.Lt = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.Lte = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.Lte( version );
};
