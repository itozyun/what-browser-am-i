goog.provide( 'iAm.WebOS' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.WebOS = function(){
    return iAm._platformIs( who.PLATFORM.WebOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.Gt = function( version ){
    return iAm.WebOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.Gte = function( version ){
    return iAm.WebOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.Lt = function( version ){
    return iAm.WebOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.Lte = function( version ){
    return iAm.WebOS() && iAm._platformVersion.Lte( version );
};
