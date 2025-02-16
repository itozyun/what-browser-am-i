goog.provide( 'iAm.PlayStation5' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.PlayStation5 = function(){
    return iAm._platformIs( iAm.EnumPlatform.PlayStation$R5 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.gt = function( version ){
    return iAm.PlayStation5() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.gte = function( version ){
    return iAm.PlayStation5() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.lt = function( version ){
    return iAm.PlayStation5() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStation5.lte = function( version ){
    return iAm.PlayStation5() && iAm._platformVersion.lte( version );
};
