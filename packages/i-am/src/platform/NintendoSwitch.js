goog.provide( 'iAm.NintendoSwitch' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.NintendoSwitch = function(){
    return iAm._platformIs( who.PLATFORM.NINTENDO_SWITCH$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.Gt = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.Gte = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.Lt = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.Lte = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersion.Lte( version );
};
