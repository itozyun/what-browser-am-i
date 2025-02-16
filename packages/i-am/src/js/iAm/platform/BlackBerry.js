goog.provide( 'iAm.BlackBerry' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.BlackBerry = function(){
    return iAm._platformIs( iAm.EnumPlatform.BlackBerry );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.Gt = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.Gte = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.Lt = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.Lte = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.Lte( version );
};
