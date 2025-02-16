goog.provide( 'iAm.Windows' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Windows = function(){
    return iAm._platformIs( who.PLATFORM.Windows );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.Gt = function( version ){
    return iAm.Windows() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.Gte = function( version ){
    return iAm.Windows() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.Lt = function( version ){
    return iAm.Windows() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.Lte = function( version ){
    return iAm.Windows() && iAm._platformVersion.Lte( version );
};
