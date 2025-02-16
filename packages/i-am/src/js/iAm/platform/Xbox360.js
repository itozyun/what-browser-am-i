goog.provide( 'iAm.Xbox360' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Xbox360 = function(){
    return iAm._platformIs( iAm.EnumPlatform.Xbox_360$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.gt = function( version ){
    return iAm.Xbox360() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.gte = function( version ){
    return iAm.Xbox360() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.lt = function( version ){
    return iAm.Xbox360() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Xbox360.lte = function( version ){
    return iAm.Xbox360() && iAm._platformVersion.lte( version );
};
