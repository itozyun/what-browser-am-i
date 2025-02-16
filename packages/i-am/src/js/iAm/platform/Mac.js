goog.provide( 'iAm.Mac' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Mac = function(){
    return iAm._platformIs( iAm.EnumPlatform.Mac );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.gt = function( version ){
    return iAm.Mac() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.gte = function( version ){
    return iAm.Mac() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.lt = function( version ){
    return iAm.Mac() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.lte = function( version ){
    return iAm.Mac() && iAm._platformVersion.lte( version );
};
