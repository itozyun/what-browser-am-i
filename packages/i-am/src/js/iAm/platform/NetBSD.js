goog.provide( 'iAm.NetBSD' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.NetBSD = function(){
    return iAm._platformIs( iAm.EnumPlatform.NetBSD );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.gt = function( version ){
    return iAm.NetBSD() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.gte = function( version ){
    return iAm.NetBSD() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.lt = function( version ){
    return iAm.NetBSD() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.lte = function( version ){
    return iAm.NetBSD() && iAm._platformVersion.lte( version );
};
