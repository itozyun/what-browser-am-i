goog.provide( 'iAm.PlayStationVita' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStationVita = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$RVita );
};
