goog.provide( 'iAm.GoogleTV' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.GoogleTV = function(){
    return iAm._platformIs( iAm.EnumPlatform.Google_TV );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.gt = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.gte = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.lt = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.lte = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.lte( version );
};
