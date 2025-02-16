goog.provide( 'iAm.Xbox360' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Xbox360 = function(){
    return iAm._platformIs( who.PLATFORM.Xbox_360$TM );
};
