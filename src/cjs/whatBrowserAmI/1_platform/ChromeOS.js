goog.provide( 'whatBrowserAmI.platform.ChromeOS.is' );
goog.provide( 'whatBrowserAmI.platform.ChromeOS.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.platform' );

/*----------------------------------------------------------------------------//
 *  ChromeOS
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.ChromeOS = {};

/**
 * @private
 * @const {string} */
var _versionChromeOS = p_getVersionString( p_strUserAgent, 'CrOS x86_64 '  ) ||
                       p_getVersionString( p_strUserAgent, 'CrOS aarch64 ' ) ||
                       p_getVersionString( p_strUserAgent, 'CrOS i686 '    ) ||
                       p_getVersionString( p_strUserAgent, 'CrOS armv7l '  );

/** @return {boolean} */
whatBrowserAmI.platform.ChromeOS.is = function(){
    return !!_versionChromeOS;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.ChromeOS.detect = function(){
    if( whatBrowserAmI.platform.ChromeOS.is() ){
        p_setPlatform( PLATFORM.ChromeOS, _versionChromeOS, DEVICE_TYPE.PC );
        return true;
    };
};
