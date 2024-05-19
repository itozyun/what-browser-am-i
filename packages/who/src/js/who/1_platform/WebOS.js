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
        p_setPlatform(
            PLATFORM.WebOS
            , p_getVersionString( p_strUserAgent, 'webOS/' )
                || p_getVersionString( p_strUserAgent, 'WEBOS'  )
                || p_getVersionString( p_strUserAgent, 'hpwOS/' )
            , p_hasSubstring( p_strUserAgent, 'webOS.TV' ) || p_hasSubstring( p_strUserAgent, '/SmartTV' )
                ? DEVICE_TYPE.TV
                : DEVICE_TYPE.PHONE
        );
        return true;
    };
};
