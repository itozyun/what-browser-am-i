goog.provide( 'who.platform.NintendoSwitch.is' );
goog.provide( 'who.platform.NintendoSwitch.detect' );

goog.require( 'who.base' );
goog.require( 'who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Nintendo Swicth
 */

/** @return {boolean} */
who.platform.NintendoSwitch.is = function(){
    return !who.env.strPlatform && who.util.hasSubstring( who.env.strAppVersion, 'Nintendo Switch;' );
};

/**
 * @return {boolean|void}
 */
who.platform.NintendoSwitch.detect = function(){
    if( who.platform.NintendoSwitch.is() ){
        who.base.setPlatform( iAm.EnumPlatform.NINTENDO_SWITCH$TM, who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION );
        who.base.setDevice( iAm.EnumDevice.NintendoSwitch, undefined, iAm.EnumDeviceType.Game );
        return true;
    };
};
