goog.provide( 'iAm.FreeBSD' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.FreeBSD = function(){
    return iAm._platformIs( iAm.EnumPlatform.FreeBSD );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.gt = function( version ){
    return iAm.FreeBSD() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.gte = function( version ){
    return iAm.FreeBSD() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.lt = function( version ){
    return iAm.FreeBSD() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FreeBSD.lte = function( version ){
    return iAm.FreeBSD() && iAm._platformVersion.lte( version );
};
