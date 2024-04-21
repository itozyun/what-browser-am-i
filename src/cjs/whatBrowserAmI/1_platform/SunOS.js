goog.provide( 'whatBrowserAmI.platform.SunOS.is' );
goog.provide( 'whatBrowserAmI.platform.SunOS.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  SunOS
 *
 */

/** @return {boolean} */
whatBrowserAmI.platform.SunOS.is = function(){
    return p_hasSubstring( p_strUserAgent, 'SunOS' ) || p_hasSubstring( p_strUserAgent, 'Sun Solaris' );
};

/** @return {boolean|void} */
whatBrowserAmI.platform.SunOS.detect = function(){
    if( whatBrowserAmI.platform.SunOS.is() ){
        p_setPlatform( PLATFORM.SunOS );
        p_deviceType = DEVICE_TYPE.PC;
        return true;
    };
};
