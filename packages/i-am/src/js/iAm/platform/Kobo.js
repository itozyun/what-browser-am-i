goog.provide( 'iAm.Kobo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Kobo = function(){
    return iAm._platformIs( iAm.EnumPlatform.Rakuten_Kobo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.Gt = function( version ){
    return iAm.Kobo() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.Gte = function( version ){
    return iAm.Kobo() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.Lt = function( version ){
    return iAm.Kobo() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.Lte = function( version ){
    return iAm.Kobo() && iAm._platformVersion.Lte( version );
};
