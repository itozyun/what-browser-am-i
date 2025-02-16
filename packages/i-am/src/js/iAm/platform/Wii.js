goog.provide( 'iAm.Wii' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Wii = function(){
    return iAm._platformIs( iAm.EnumPlatform.Wii$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Wii.Gt = function( version ){
    return iAm.Wii() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Wii.Gte = function( version ){
    return iAm.Wii() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Wii.Lt = function( version ){
    return iAm.Wii() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Wii.Lte = function( version ){
    return iAm.Wii() && iAm._platformVersion.Lte( version );
};
