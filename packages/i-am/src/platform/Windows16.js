goog.provide( 'iAm.Windows16' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Windows16 = function(){
    return iAm._platformIs( who.PLATFORM.Windows16 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.Gt = function( version ){
    return iAm.Windows16() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.Gte = function( version ){
    return iAm.Windows16() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.Lt = function( version ){
    return iAm.Windows16() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.Lte = function( version ){
    return iAm.Windows16() && iAm._platformVersion.Lte( version );
};
