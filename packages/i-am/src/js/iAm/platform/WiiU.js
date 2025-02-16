goog.provide( 'iAm.WiiU' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.WiiU = function(){
    return iAm._platformIs( iAm.EnumPlatform.WiiU$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.Gt = function( version ){
    return iAm.WiiU() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.Gte = function( version ){
    return iAm.WiiU() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.Lt = function( version ){
    return iAm.WiiU() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.Lte = function( version ){
    return iAm.WiiU() && iAm._platformVersion.Lte( version );
};
