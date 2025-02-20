goog.provide( 'who.platform.Linux.is' );
goog.provide( 'who.platform.Linux.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Linux
 *
 */

/** @return {boolean} */
who.platform.Linux.is = function(){
    return who.env.strPlatformHasLinux;
};

/** @return {boolean|void} */
who.platform.Linux.detect = function(){
    if( who.platform.Linux.is() ){
        who.base.setPlatform( iAm.EnumPlatform.Linux );
        who.result.deviceType = iAm.EnumDeviceType.PC;
        return true;
    };
};
