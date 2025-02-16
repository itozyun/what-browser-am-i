goog.provide( 'iAm.GoogleTV' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.GoogleTV.Gt = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.Gte = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.Lt = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GoogleTV.Lte = function( version ){
    return iAm.GoogleTV() && iAm._platformVersion.Lte( version );
};
