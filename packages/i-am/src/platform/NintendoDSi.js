goog.provide( 'iAm.NintendoDSi' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.NintendoDSi = function(){
    return iAm._platformIs( who.PLATFORM.NINTENDO_DSi$TM );
};
