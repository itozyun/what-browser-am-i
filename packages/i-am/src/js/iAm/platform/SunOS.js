goog.provide( 'iAm.SunOS' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.SunOS = function(){
    return iAm._platformIs( who.PLATFORM.SunOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.Gt = function( version ){
    return iAm.SunOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.Gte = function( version ){
    return iAm.SunOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.Lt = function( version ){
    return iAm.SunOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.Lte = function( version ){
    return iAm.SunOS() && iAm._platformVersion.Lte( version );
};
