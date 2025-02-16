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
           who.util.startWith( who.env.strPlatform, 'Win' );
};

/** @return {boolean|void} */
who.platform.Windows.detect = function(){
    if( who.platform.Windows.is() ){
        who.base.setPlatform(
              iAm.EnumPlatform.Windows
            , who.util.getVersionString( who.env.strUserAgent, 'Windows NT ' ) ||
              who.util.getVersionString( who.env.strUserAgent, 'Windows ' )
            , iAm.EnumDeviceType.PC
        );
        return true;
    };
};
