goog.provide( 'iAm.NintendoSwitch' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.NintendoSwitch = function(){
    return iAm._platformIs( who.PLATFORM.NINTENDO_SWITCH$TM );
};
