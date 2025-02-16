goog.provide( 'iAm.WiiU' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.WiiU = function(){
    return iAm._platformIs( who.PLATFORM.WiiU$TM );
};
