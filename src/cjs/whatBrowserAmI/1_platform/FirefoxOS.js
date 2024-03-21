goog.provide( 'whatBrowserAmI.platform.FirefoxOS.is' );
goog.provide( 'whatBrowserAmI.platform.FirefoxOS.detect' );

goog.require( 'whatBrowserAmI.engine.Gecko.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  FirefoxOS
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.FirefoxOS = {};

/**
 * https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Window/onmoztimechange
 *   > This API is available on Firefox OS for internal applications only.
 * @const {boolean} */
whatBrowserAmI.platform.FirefoxOS.is = function(){
    return window.onmoztimechange !== undefined;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.detectFirefoxOS = function(){
    if( whatBrowserAmI.platform.FirefoxOS.is() ){
        p_setPlatform(
            PLATFORM.FirefoxOS,
            _geckoVersionToFirefoxOSVersion( whatBrowserAmI.engine.Gecko.IMPLEMENT_VERSION ),
        // https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference#Firefox_OS
            p_hasSubstring( p_strUserAgent, 'Mobile' )
                ? DEVICE_TYPE.PHONE
          : p_hasSubstring( p_strUserAgent, 'Tablet' )
                ? DEVICE_TYPE.TABLET
          : p_hasSubstring( p_strUserAgent, 'TV' )
                ? DEVICE_TYPE.TV
                : undefined
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
    return p_conpareVersion( versionGecko, 18.1 ) < 0 ? '1.0.1' :
           p_conpareVersion( versionGecko, 19   ) < 0 ?  1.1 :
           p_conpareVersion( versionGecko, 27   ) < 0 ?  1.2 :
           p_conpareVersion( versionGecko, 29   ) < 0 ?  1.3 :
           p_conpareVersion( versionGecko, 31   ) < 0 ?  1.4 :
           p_conpareVersion( versionGecko, 33   ) < 0 ?  2.0 :
           p_conpareVersion( versionGecko, 35   ) < 0 ?  2.1 :
           p_conpareVersion( versionGecko, 38   ) < 0 ?  2.2 :
           p_conpareVersion( versionGecko, 45   ) < 0 ?  2.5 :
                                                               2.6; // Gecko 45
};
