goog.provide( 'iAm.FirefoxOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.FirefoxOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.FirefoxOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.gt = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.gte = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.lt = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.lte = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersion.lte( version );
};
