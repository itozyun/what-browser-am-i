goog.provide( 'iAm.PlayStationVita' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStationVita = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$RVita );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.Gt = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.Gte = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.Lt = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.Lte = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersion.Lte( version );
};
