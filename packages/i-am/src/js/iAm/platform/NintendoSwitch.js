goog.provide( 'iAm.NintendoSwitch' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.NintendoSwitch = function(){
    return iAm._platformIs( iAm.EnumPlatform.NINTENDO_SWITCH$TM );
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
