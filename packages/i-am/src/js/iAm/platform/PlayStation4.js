goog.provide( 'iAm.PlayStation4' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
iAm.PlayStation4.gt = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.gte = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.lt = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation4.lte = function( version ){
    return iAm.PlayStation4() && iAm._platformVersion.lte( version );
};
