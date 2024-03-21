goog.provide( 'whatBrowserAmI.platform.NintendoSwitch.is' );
goog.provide( 'whatBrowserAmI.platform.NintendoSwitch.detect' );

goog.require( 'whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Nintendo Swicth
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.NintendoSwitch = {};

/** @return {boolean} */
whatBrowserAmI.platform.NintendoSwitch.is = function(){
    return !p_strPlatform && p_hasSubstring( p_strAppVersion, 'Nintendo Switch;' );
};

/**
 * @return {boolean|void}
 */
whatBrowserAmI.platform.NintendoSwitch.detect = function(){
    if( whatBrowserAmI.platform.NintendoSwitch.is() ){
        p_setPlatform( PLATFORM.NintendoSwitch, whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION, DEVICE_TYPE.GAME );
        return true;
    };
};
