goog.provide( 'whatBrowserAmI.platform.Windows.is' );
goog.provide( 'whatBrowserAmI.platform.Windows.detect' );

goog.require( 'whatBrowserAmI.platform.WindowsCE.is' );
goog.require( 'whatBrowserAmI.platform.WindowsMobile.is' );
goog.require( 'whatBrowserAmI.platform.WindowsPhone.is' );

/*----------------------------------------------------------------------------//
 *  Windows
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.Windows = {};

/** @const {boolean} */
whatBrowserAmI.platform.Windows.is = function(){
    return !whatBrowserAmI.platform.WindowsCE.is() &&
           !whatBrowserAmI.platform.WindowsMobile.is() &&
           !whatBrowserAmI.platform.WindowsPhone.is() &&
           p_startWith( p_strPlatform, 'Win' );
};

/** @return {boolean|void} */
whatBrowserAmI.platform.Windows.detect = function(){
    if( whatBrowserAmI.platform.Windows.is() ){
        p_setPlatform(
              PLATFORM.Windows
            , p_getVersionString( p_strUserAgent, 'Windows NT ' ) ||
              p_getVersionString( p_strUserAgent, 'Windows ' )
            , DEVICE_TYPE.PC
        );
        return true;
    };
};
