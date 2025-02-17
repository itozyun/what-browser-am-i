goog.provide( 'iAm.WiiU' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

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
    return iAm.WiiU() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.gte = function( version ){
    return iAm.WiiU() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.lt = function( version ){
    return iAm.WiiU() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WiiU.lte = function( version ){
    return iAm.WiiU() && iAm._platformVersionLte( version );
};
