goog.provide( 'iAm.BlackBerry' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
iAm.BlackBerry.gt = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.gte = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.lt = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.BlackBerry.lte = function( version ){
    return iAm.BlackBerry() && iAm._platformVersion.lte( version );
};
