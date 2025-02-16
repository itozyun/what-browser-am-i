goog.provide( 'iAm.Tizen' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Tizen = function(){
    return iAm._platformIs( iAm.EnumPlatform.Tizen );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.Gt = function( version ){
    return iAm.Tizen() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.Gte = function( version ){
    return iAm.Tizen() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.Lt = function( version ){
    return iAm.Tizen() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.Lte = function( version ){
    return iAm.Tizen() && iAm._platformVersion.Lte( version );
};
