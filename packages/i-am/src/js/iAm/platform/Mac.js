goog.provide( 'iAm.Mac' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.Mac.Gt = function( version ){
    return iAm.Mac() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.Gte = function( version ){
    return iAm.Mac() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.Lt = function( version ){
    return iAm.Mac() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Mac.Lte = function( version ){
    return iAm.Mac() && iAm._platformVersion.Lte( version );
};
