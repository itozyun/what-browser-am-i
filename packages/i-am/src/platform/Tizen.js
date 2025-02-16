goog.provide( 'iAm.Tizen' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Tizen = function(){
    return iAm._platformIs( who.PLATFORM.Tizen );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.Gt = function( version ){
    return iAm.Tizen() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.Gte = function( version ){
    return iAm.Tizen() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.Lt = function( version ){
    return iAm.Tizen() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.Lte = function( version ){
    return iAm.Tizen() && iAm._platformVersion.Lte( version );
};
