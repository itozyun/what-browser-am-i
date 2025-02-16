goog.provide( 'iAm.Wii' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Wii = function(){
    return iAm._platformIs( who.PLATFORM.Wii$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Wii.Gt = function( version ){
    return iAm.Wii() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Wii.Gte = function( version ){
    return iAm.Wii() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Wii.Lt = function( version ){
    return iAm.Wii() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Wii.Lte = function( version ){
    return iAm.Wii() && iAm._platformVersion.Lte( version );
};
