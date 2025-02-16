goog.provide( 'iAm.PlayStation5' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStation5 = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$R5 );
};
