goog.provide( 'iAm.MeeGo' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.MeeGo = function(){
    return iAm._platformIs( who.PLATFORM.MeeGo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.Gt = function( version ){
    return iAm.MeeGo() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.Gte = function( version ){
    return iAm.MeeGo() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.Lt = function( version ){
    return iAm.MeeGo() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.Lte = function( version ){
    return iAm.MeeGo() && iAm._platformVersion.Lte( version );
};
