goog.provide( 'iAm.NintendoSwitch' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
iAm.NintendoSwitch.gt = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.gte = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.lt = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.lte = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersion.lte( version );
};
