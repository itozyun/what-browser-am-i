goog.provide( 'iAm.PlayStation4' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.PlayStation4 = function(){
    return iAm._platformIs( who.PLATFORM.PlayStation$R4 );
};
