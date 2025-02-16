goog.provide( 'iAm.OpenBSD' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.OpenBSD = function(){
    return iAm._platformIs( iAm.EnumPlatform.OpenBSD );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.gt = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.gte = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.lt = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.lte = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.lte( version );
};
