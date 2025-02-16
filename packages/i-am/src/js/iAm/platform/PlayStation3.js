goog.provide( 'iAm.PlayStation3' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.PlayStation3 = function(){
    return iAm._platformIs( iAm.EnumPlatform.PlayStation$R3 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation3.Gt = function( version ){
    return iAm.PlayStation3() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation3.Gte = function( version ){
    return iAm.PlayStation3() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation3.Lt = function( version ){
    return iAm.PlayStation3() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation3.Lte = function( version ){
    return iAm.PlayStation3() && iAm._platformVersion.Lte( version );
};
