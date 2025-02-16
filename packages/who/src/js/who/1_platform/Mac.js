goog.provide( 'who.platform.Mac.is' );
goog.provide( 'who.platform.Mac.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Mac
 */

/** @return {boolean} */
who.platform.Mac.is = function(){
    return p_strPlatform === 'Mac68K' ||
           p_strPlatform === 'MacPowerPC' ||
           p_strPlatform === 'MacPPC' ||
           p_strPlatform === 'MacIntel' ||
           p_strPlatform === 'MacM1';
};

/**
 * @return {boolean|void}
 */
who.platform.Mac.detect = function(){
    if( who.platform.Mac.is() ){
        p_setPlatform(
            EnumPlatform.Mac,
            p_getAppleVersionString( p_strUserAgent, 'Mac OS X ' ),
            EnumDeviceType.PC
        );
        return true;
    };
};
