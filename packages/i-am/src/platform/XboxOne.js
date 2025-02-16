goog.provide( 'iAm.XboxOne' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.XboxOne = function(){
    return iAm._platformIs( who.PLATFORM.Xbox_One$TM );
};
