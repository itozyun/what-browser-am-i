goog.provide( 'who.platform.WebOS.is' );
goog.provide( 'who.platform.WebOS.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  WebOS
 *    https://developers.whatismybrowser.com/useragents/explore/operating_system_name/hp-webos/
 */

/** @return {boolean} */
who.platform.WebOS.is = function(){
    return !!window.palmGetResource;
};

/** @return {boolean|void} */
who.platform.WebOS.detect = function(){
    if( who.platform.WebOS.is() ){
        who.base.setPlatform(
            iAm.EnumPlatform.WebOS
            , who.util.getVersionString( who.env.strUserAgent, 'webOS/' )
                || who.util.getVersionString( who.env.strUserAgent, 'WEBOS'  )
                || who.util.getVersionString( who.env.strUserAgent, 'hpwOS/' )
            , who.util.hasSubstring( who.env.strUserAgent, 'webOS.TV' ) || who.util.hasSubstring( who.env.strUserAgent, '/SmartTV' )
                ? iAm.EnumDeviceType.TV
                : iAm.EnumDeviceType.Phone
        );
        return true;
    };
};
