goog.provide( 'iAm.PlayStation3' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStation3 = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$R3 );
};
