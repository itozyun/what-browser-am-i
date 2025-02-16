goog.provide( 'iAm.iPadOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.iPadOS.Gt = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.Gte = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.Lt = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPadOS.Lte = function( version ){
    return iAm.iPadOS() && iAm._platformVersion.Lte( version );
};
