goog.provide( 'iAm.iPadOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.iPadOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.iPadOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.gt = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.gte = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.lt = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.lte = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.lte( version );
};
