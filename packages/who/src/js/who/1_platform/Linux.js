goog.provide( 'who.platform.Linux.is' );
goog.provide( 'who.platform.Linux.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Linux
 *
 */

/** @return {boolean} */
who.platform.Linux.is = function(){
    return p_strPlatformHasLinux;
};

/** @return {boolean|void} */
who.platform.Linux.detect = function(){
    if( who.platform.Linux.is() ){
        p_setPlatform( EnumPlatform.Linux );
        p_deviceType = EnumDeviceType.PC;
        return true;
    };
};
