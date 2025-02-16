goog.provide( 'iAm.ChromeOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.ChromeOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.ChromeOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromeOS.gt = function( version ){
    return iAm.ChromeOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromeOS.gte = function( version ){
    return iAm.ChromeOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromeOS.lt = function( version ){
    return iAm.ChromeOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromeOS.lte = function( version ){
    return iAm.ChromeOS() && iAm._platformVersion.lte( version );
};
