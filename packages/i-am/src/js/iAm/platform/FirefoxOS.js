goog.provide( 'iAm.FirefoxOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.FirefoxOS.Gt = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.Gte = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.Lt = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FirefoxOS.Lte = function( version ){
    return iAm.FirefoxOS() && iAm._platformVersion.Lte( version );
};
