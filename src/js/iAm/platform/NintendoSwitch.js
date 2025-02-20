goog.provide( 'iAm.NintendoSwitch' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

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
    return iAm.NintendoSwitch() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.gte = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.lt = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoSwitch.lte = function( version ){
    return iAm.NintendoSwitch() && iAm._platformVersionLte( version );
};
