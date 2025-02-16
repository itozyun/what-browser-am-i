goog.provide( 'iAm.Kobo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
iAm.Kobo.gt = function( version ){
    return iAm.Kobo() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.gte = function( version ){
    return iAm.Kobo() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.lt = function( version ){
    return iAm.Kobo() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kobo.lte = function( version ){
    return iAm.Kobo() && iAm._platformVersion.lte( version );
};
