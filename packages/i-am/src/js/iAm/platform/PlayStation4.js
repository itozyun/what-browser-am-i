goog.provide( 'iAm.PlayStation4' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.PlayStation4 = function(){
    return iAm._platformIs( iAm.EnumPlatform.PlayStation$R4 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.Gt = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.Gte = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.Lt = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.Lte = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.Lte( version );
};
