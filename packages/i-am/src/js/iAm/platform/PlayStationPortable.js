goog.provide( 'iAm.PlayStationPortable' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.PlayStationPortable = function(){
    return iAm._platformIs( iAm.EnumPlatform.PlayStation$RPortable );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.gt = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.gte = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.lt = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.lte = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersionLte( version );
};
