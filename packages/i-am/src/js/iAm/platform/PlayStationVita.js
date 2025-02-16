goog.provide( 'iAm.PlayStationVita' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
