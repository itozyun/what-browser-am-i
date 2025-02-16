goog.provide( 'iAm.XboxSeries' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.XboxSeries = function(){
    return iAm._platformIs( who.PLATFORM.Xbox_SeriesX$VLS );
};
