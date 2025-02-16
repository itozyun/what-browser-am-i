goog.provide( 'iAm.OpenBSD' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.OpenBSD.Gt = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.Gte = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.Lt = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OpenBSD.Lte = function( version ){
    return iAm.OpenBSD() && iAm._platformVersion.Lte( version );
};
