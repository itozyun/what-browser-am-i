goog.provide( 'iAm.Mint' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Mint = function(){
    return iAm._platformIs( iAm.EnumPlatform.Mint );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.gt = function( version ){
    return iAm.Mint() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.gte = function( version ){
    return iAm.Mint() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.lt = function( version ){
    return iAm.Mint() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.lte = function( version ){
    return iAm.Mint() && iAm._platformVersion.lte( version );
};
