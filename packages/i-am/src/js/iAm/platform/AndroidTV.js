goog.provide( 'iAm.AndroidTV' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.AndroidTV.Gt = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.Gte = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.Lt = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AndroidTV.Lte = function( version ){
    return iAm.AndroidTV() && iAm._platformVersion.Lte( version );
};
