goog.provide( 'who.platform.FirefoxOS.is' );
goog.provide( 'who.platform.FirefoxOS.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.Gecko.IMPLEMENT_VERSION' );
/*----------------------------------------------------------------------------//
 *  FirefoxOS
 */

/**
 * https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Window/onmoztimechange
 *   > This API is available on Firefox OS for internal applications only.
 * @return {boolean} */
who.platform.FirefoxOS.is = function(){
    return window.onmoztimechange !== undefined;
};

/** @return {boolean|void} */
who.platform.FirefoxOS.detect = function(){
    if( who.platform.FirefoxOS.is() ){
        who.base.setPlatform(
            iAm.EnumPlatform.FirefoxOS,
            _geckoVersionToFirefoxOSVersion( who.engine.Gecko.IMPLEMENT_VERSION ),
        // https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference#Firefox_OS
            who.util.hasSubstring( who.env.strUserAgent, 'Mobile' )
                ? iAm.EnumDeviceType.Phone
          : who.util.hasSubstring( who.env.strUserAgent, 'Tablet' )
                ? iAm.EnumDeviceType.Tablet
          : who.util.hasSubstring( who.env.strUserAgent, 'TV' )
                ? iAm.EnumDeviceType.TV
                : iAm.EnumDeviceType.Phone
        );
        // isFirefoxOS = window.pkcs11        /* 1.1 */
        //            || window.SpecialPowers /* 1.4, 2.0, 2.1, 2.2 */
        //            || window.home          /* 1.4 */
        //            || window.getInterface  /* 1.4 */
        return true;
    };
};

/**
 * @private
 * @param {string|number} versionGecko 
 * @return {string|number}
 */
function _geckoVersionToFirefoxOSVersion( versionGecko ){
    return who.util.conpareVersion( versionGecko, 18.1 ) < 0 ? '1.0.1' :
           who.util.conpareVersion( versionGecko, 19   ) < 0 ?  1.1 :
           who.util.conpareVersion( versionGecko, 27   ) < 0 ?  1.2 :
           who.util.conpareVersion( versionGecko, 29   ) < 0 ?  1.3 :
           who.util.conpareVersion( versionGecko, 31   ) < 0 ?  1.4 :
           who.util.conpareVersion( versionGecko, 33   ) < 0 ?  2.0 :
           who.util.conpareVersion( versionGecko, 35   ) < 0 ?  2.1 :
           who.util.conpareVersion( versionGecko, 38   ) < 0 ?  2.2 :
           who.util.conpareVersion( versionGecko, 45   ) < 0 ?  2.5 :
                                                         2.6; // Gecko 45
};
