goog.provide( 'iAm.XboxOne' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.XboxOne = function(){
    return iAm._platformIs( who.PLATFORM.Xbox_One$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.Gt = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.Gte = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.Lt = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.Lte = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.Lte( version );
};
