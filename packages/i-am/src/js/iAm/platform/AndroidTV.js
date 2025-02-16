goog.provide( 'iAm.AndroidTV' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.AndroidTV = function(){
    return iAm._platformIs( iAm.EnumPlatform.Android_TV );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.gt = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.gte = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.lt = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.lte = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.lte( version );
};
