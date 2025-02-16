goog.provide( 'iAm.WiiU' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
iAm.WiiU.gt = function( version ){
    return iAm.WiiU() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.gte = function( version ){
    return iAm.WiiU() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.lt = function( version ){
    return iAm.WiiU() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.lte = function( version ){
    return iAm.WiiU() && iAm._platformVersion.lte( version );
};
