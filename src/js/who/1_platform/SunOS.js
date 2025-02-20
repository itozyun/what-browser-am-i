goog.provide( 'who.platform.SunOS.is' );
goog.provide( 'who.platform.SunOS.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  SunOS
 *
 */

/** @return {boolean} */
who.platform.SunOS.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, 'SunOS' ) || who.util.hasSubstring( who.env.strUserAgent, 'Sun Solaris' );
};

/** @return {boolean|void} */
who.platform.SunOS.detect = function(){
    if( who.platform.SunOS.is() ){
        who.base.setPlatform( iAm.EnumPlatform.SunOS );
        who.result.deviceType = iAm.EnumDeviceType.PC;
        return true;
    };
};
