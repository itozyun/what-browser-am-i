goog.provide( 'iAm.PlayStationVita' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

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
    return iAm.PlayStationVita() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.gte = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.lt = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PlayStationVita.lte = function( version ){
    return iAm.PlayStationVita() && iAm._platformVersionLte( version );
};
