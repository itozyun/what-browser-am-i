goog.provide( 'iAm.PlayStationVita' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.PlayStationVita = function(){
    return iAm._platformIs( iAm.EnumPlatform.PlayStation$RVita );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.gt = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.gte = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.lt = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.lte = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersion.lte( version );
};
