goog.provide( 'iAm.WindowsMobile' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.WindowsMobile = function(){
    return iAm._platformIs( who.PLATFORM.Windows_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.Gt = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.Gte = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.Lt = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.Lte = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.Lte( version );
};
