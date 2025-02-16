goog.provide( 'iAm.iOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.iOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.iOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.Gt = function( version ){
    return iAm.iOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.Gte = function( version ){
    return iAm.iOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.Lt = function( version ){
    return iAm.iOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.Lte = function( version ){
    return iAm.iOS() && iAm._platformVersion.Lte( version );
};
