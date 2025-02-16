goog.provide( 'iAm.ChromeOS' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.ChromeOS = function(){
    return iAm._platformIs( who.PLATFORM.ChromeOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromeOS.Gt = function( version ){
    return iAm.ChromeOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromeOS.Gte = function( version ){
    return iAm.ChromeOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromeOS.Lt = function( version ){
    return iAm.ChromeOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.ChromeOS.Lte = function( version ){
    return iAm.ChromeOS() && iAm._platformVersion.Lte( version );
};
