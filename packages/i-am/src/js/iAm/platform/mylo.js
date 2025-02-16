goog.provide( 'iAm.mylo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.mylo = function(){
    return iAm._platformIs( iAm.EnumPlatform.SONY_mylo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.gt = function( version ){
    return iAm.mylo() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.gte = function( version ){
    return iAm.mylo() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.lt = function( version ){
    return iAm.mylo() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.mylo.lte = function( version ){
    return iAm.mylo() && iAm._platformVersion.lte( version );
};
