goog.provide( 'who.platform.Windows.is' );
goog.provide( 'who.platform.Windows.detect' );

goog.require( 'who.base' );
goog.require( 'who.platform.WindowsCE.is' );
goog.require( 'who.platform.WindowsMobile.is' );
goog.require( 'who.platform.WindowsPhone.is' );

/*----------------------------------------------------------------------------//
 *  Windows
 */

/** @return {boolean} */
who.platform.Windows.is = function(){
    return !who.platform.WindowsCE.is() &&
           !who.platform.WindowsMobile.is() &&
           !who.platform.WindowsPhone.is() &&
           p_startWith( p_strPlatform, 'Win' );
};

/** @return {boolean|void} */
who.platform.Windows.detect = function(){
    if( who.platform.Windows.is() ){
        p_setPlatform(
              PLATFORM.Windows
            , p_getVersionString( p_strUserAgent, 'Windows NT ' ) ||
              p_getVersionString( p_strUserAgent, 'Windows ' )
            , DEVICE_TYPE.PC
        );
        return true;
    };
};
