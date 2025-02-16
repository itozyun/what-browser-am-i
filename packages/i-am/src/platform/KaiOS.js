goog.provide( 'iAm.KaiOS' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.KaiOS = function(){
    return iAm._platformIs( who.PLATFORM.KaiOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.Gt = function( version ){
    return iAm.KaiOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.Gte = function( version ){
    return iAm.KaiOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.Lt = function( version ){
    return iAm.KaiOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.Lte = function( version ){
    return iAm.KaiOS() && iAm._platformVersion.Lte( version );
};
