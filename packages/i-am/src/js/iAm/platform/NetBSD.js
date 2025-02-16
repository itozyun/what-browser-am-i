goog.provide( 'iAm.NetBSD' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.NetBSD.Gt = function( version ){
    return iAm.NetBSD() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.Gte = function( version ){
    return iAm.NetBSD() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.Lt = function( version ){
    return iAm.NetBSD() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetBSD.Lte = function( version ){
    return iAm.NetBSD() && iAm._platformVersion.Lte( version );
};
