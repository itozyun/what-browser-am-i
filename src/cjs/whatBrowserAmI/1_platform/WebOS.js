goog.provide( 'whatBrowserAmI.platform.WebOS.is' );
goog.provide( 'whatBrowserAmI.platform.WebOS.detect' );

/*----------------------------------------------------------------------------//
 *  WebOS
 *    https://developers.whatismybrowser.com/useragents/explore/operating_system_name/hp-webos/
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.WebOS = {};

/** @return {boolean} */
whatBrowserAmI.platform.WebOS.is = function(){
    return !!window.palmGetResource;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.WebOS.detect = function(){
    if( whatBrowserAmI.platform.WebOS.is() ){
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
