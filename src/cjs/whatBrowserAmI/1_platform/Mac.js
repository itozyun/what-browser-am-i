goog.provide( 'whatBrowserAmI.platform.Mac.is' );
goog.provide( 'whatBrowserAmI.platform.Mac.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Mac
 */

/** @return {boolean} */
whatBrowserAmI.platform.Mac.is = function(){
    return p_strPlatform === 'Mac68K' ||
           p_strPlatform === 'MacPowerPC' ||
           p_strPlatform === 'MacPPC' ||
           p_strPlatform === 'MacIntel' ||
           p_strPlatform === 'MacM1';
};

/**
 * @return {boolean|void}
 */
whatBrowserAmI.platform.Mac.detect = function(){
    if( whatBrowserAmI.platform.Mac.is() ){
        p_setPlatform(
            PLATFORM.Mac,
            p_getAppleVersionString( p_strUserAgent, 'Mac OS X ' ),
            DEVICE_TYPE.PC
        );
        return true;
    };
};
