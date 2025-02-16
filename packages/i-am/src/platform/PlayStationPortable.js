goog.provide( 'iAm.PlayStationPortable' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStationPortable = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$RPortable );
};
