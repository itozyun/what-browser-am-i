goog.provide( 'iAm.Mint' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Mint = function(){
    return iAm._platformIs( who.PLATFORM.Mint );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.Gt = function( version ){
    return iAm.Mint() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.Gte = function( version ){
    return iAm.Mint() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.Lt = function( version ){
    return iAm.Mint() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mint.Lte = function( version ){
    return iAm.Mint() && iAm._platformVersion.Lte( version );
};
