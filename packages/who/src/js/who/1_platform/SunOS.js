goog.provide( 'who.platform.SunOS.is' );
goog.provide( 'who.platform.SunOS.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  SunOS
 *
 */

/** @return {boolean} */
who.platform.SunOS.is = function(){
    return p_hasSubstring( p_strUserAgent, 'SunOS' ) || p_hasSubstring( p_strUserAgent, 'Sun Solaris' );
};

/** @return {boolean|void} */
who.platform.SunOS.detect = function(){
    if( who.platform.SunOS.is() ){
        p_setPlatform( PLATFORM.SunOS );
        p_deviceType = DEVICE_TYPE.PC;
        return true;
    };
};
