goog.provide( 'iAm.Nintendo3DS' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Nintendo3DS = function(){
    return iAm._platformIs( who.PLATFORM.NINTENDO_3DS$TM );
};
