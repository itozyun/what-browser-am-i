goog.provide( 'iAm.FireOS' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.FireOS = function(){
    return iAm._platformIs( who.PLATFORM.FireOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.Gt = function( version ){
    return iAm.FireOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.Gte = function( version ){
    return iAm.FireOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.Lt = function( version ){
    return iAm.FireOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.Lte = function( version ){
    return iAm.FireOS() && iAm._platformVersion.Lte( version );
};
