goog.provide( 'iAm.Linux' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Linux = function(){
    return iAm._platformIs( iAm.EnumPlatform.Linux );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.gt = function( version ){
    return iAm.Linux() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.gte = function( version ){
    return iAm.Linux() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.lt = function( version ){
    return iAm.Linux() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.lte = function( version ){
    return iAm.Linux() && iAm._platformVersion.lte( version );
};
