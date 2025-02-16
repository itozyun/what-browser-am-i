goog.provide( 'iAm.WindowsPhone' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.WindowsPhone = function(){
    return iAm._platformIs( who.PLATFORM.Windows_Phone );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.Gt = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.Gte = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.Lt = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.Lte = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersion.Lte( version );
};
