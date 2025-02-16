goog.provide( 'iAm.NintendoDSi' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.NintendoDSi = function(){
    return iAm._platformIs( who.PLATFORM.NINTENDO_DSi$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.Gt = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.Gte = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.Lt = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.Lte = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersion.Lte( version );
};
