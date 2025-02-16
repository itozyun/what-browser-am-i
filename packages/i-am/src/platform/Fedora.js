goog.provide( 'iAm.Fedora' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Fedora = function(){
    return iAm._platformIs( who.PLATFORM.Fedora );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.Gt = function( version ){
    return iAm.Fedora() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.Gte = function( version ){
    return iAm.Fedora() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.Lt = function( version ){
    return iAm.Fedora() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.Lte = function( version ){
    return iAm.Fedora() && iAm._platformVersion.Lte( version );
};
