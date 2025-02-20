goog.provide( 'who.platform.Mac.is' );
goog.provide( 'who.platform.Mac.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Mac
 */

/** @return {boolean} */
who.platform.Mac.is = function(){
    return who.env.strPlatform === 'Mac68K' ||
           who.env.strPlatform === 'MacPowerPC' ||
           who.env.strPlatform === 'MacPPC' ||
           who.env.strPlatform === 'MacIntel' ||
           who.env.strPlatform === 'MacM1';
};

/**
 * @return {boolean|void}
 */
who.platform.Mac.detect = function(){
    if( who.platform.Mac.is() ){
        who.base.setPlatform(
            iAm.EnumPlatform.Mac,
            who.util.getAppleVersionString( who.env.strUserAgent, 'Mac OS X ' ),
            iAm.EnumDeviceType.PC
        );
        return true;
    };
};
