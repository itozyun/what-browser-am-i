goog.provide( 'iAm.Android' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Android = function(){
    return iAm._platformIs( iAm.EnumPlatform.Android );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.Gt = function( version ){
    return iAm.Android() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.Gte = function( version ){
    return iAm.Android() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.Lt = function( version ){
    return iAm.Android() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.Lte = function( version ){
    return iAm.Android() && iAm._platformVersion.Lte( version );
};
