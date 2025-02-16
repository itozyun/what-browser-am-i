goog.provide( 'iAm.Linux' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.Linux.Gt = function( version ){
    return iAm.Linux() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.Gte = function( version ){
    return iAm.Linux() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.Lt = function( version ){
    return iAm.Linux() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Linux.Lte = function( version ){
    return iAm.Linux() && iAm._platformVersion.Lte( version );
};
