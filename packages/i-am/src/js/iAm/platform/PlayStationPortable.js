goog.provide( 'iAm.PlayStationPortable' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
    return iAm.PlayStationPortable() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.gte = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.lt = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.lte = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersion.lte( version );
};
