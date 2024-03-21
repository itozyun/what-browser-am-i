goog.provide( 'whatBrowserAmI.platform.Linux.is' );
goog.provide( 'whatBrowserAmI.platform.Linux.detect' );

/*----------------------------------------------------------------------------//
 *  Linux
 *
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.Linux = {};

/** @const {boolean} */
whatBrowserAmI.platform.Linux.is = function(){
    return p_strPlatformHasLinux;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.Linux.detect = function(){
    if( whatBrowserAmI.platform.Linux.is() ){
        p_setPlatform( PLATFORM.Linux );
        p_deviceType = DEVICE_TYPE.PC;
        return true;
    };
};
