goog.provide( 'iAm.PlayStationPortable' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStationPortable = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$RPortable );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.Gt = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.Gte = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.Lt = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationPortable.Lte = function( version ){
    return iAm.PlayStationPortable() && iAm._platformVersion.Lte( version );
};
