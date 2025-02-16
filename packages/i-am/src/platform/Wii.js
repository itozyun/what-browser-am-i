goog.provide( 'iAm.Wii' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Wii = function(){
    return iAm._platformIs( who.PLATFORM.Wii$TM );
};
