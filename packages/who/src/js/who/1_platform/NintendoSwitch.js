goog.provide( 'who.platform.NintendoSwitch.is' );
goog.provide( 'who.platform.NintendoSwitch.detect' );

goog.require( 'who.base' );
goog.require( 'who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Nintendo Swicth
 */

/** @return {boolean} */
who.platform.NintendoSwitch.is = function(){
    return !p_strPlatform && p_hasSubstring( p_strAppVersion, 'Nintendo Switch;' );
};

/**
 * @return {boolean|void}
 */
who.platform.NintendoSwitch.detect = function(){
    if( who.platform.NintendoSwitch.is() ){
        p_setPlatform( EnumPlatform.NINTENDO_SWITCH$TM, who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION );
        p_setDevice( EnumDevice.NintendoSwitch, undefined, EnumDeviceType.GAME );
        return true;
    };
};
