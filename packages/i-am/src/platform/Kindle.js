goog.provide( 'iAm.Kindle' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Kindle = function(){
    return iAm._platformIs( who.PLATFORM.Kindle );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.Gt = function( version ){
    return iAm.Kindle() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.Gte = function( version ){
    return iAm.Kindle() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.Lt = function( version ){
    return iAm.Kindle() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.Lte = function( version ){
    return iAm.Kindle() && iAm._platformVersion.Lte( version );
};
