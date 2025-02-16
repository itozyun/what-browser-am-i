goog.provide( 'iAm.WindowsCE' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.WindowsCE = function(){
    return iAm._platformIs( who.PLATFORM.Windows_CE );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.Gt = function( version ){
    return iAm.WindowsCE() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.Gte = function( version ){
    return iAm.WindowsCE() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.Lt = function( version ){
    return iAm.WindowsCE() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.Lte = function( version ){
    return iAm.WindowsCE() && iAm._platformVersion.Lte( version );
};
