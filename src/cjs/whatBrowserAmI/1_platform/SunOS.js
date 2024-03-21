goog.provide( 'whatBrowserAmI.platform.SunOS.is' );
goog.provide( 'whatBrowserAmI.platform.SunOS.detect' );

/*----------------------------------------------------------------------------//
 *  SunOS
 *
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.SunOS = {};

/** @const {boolean} */
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
