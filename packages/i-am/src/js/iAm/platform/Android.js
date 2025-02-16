goog.provide( 'iAm.Android' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
iAm.Android.gt = function( version ){
    return iAm.Android() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.gte = function( version ){
    return iAm.Android() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.lt = function( version ){
    return iAm.Android() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Android.lte = function( version ){
    return iAm.Android() && iAm._platformVersion.lte( version );
};
