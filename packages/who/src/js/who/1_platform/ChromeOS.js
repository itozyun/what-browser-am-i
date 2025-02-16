goog.provide( 'who.platform.ChromeOS.is' );
goog.provide( 'who.platform.ChromeOS.detect' );

goog.require( 'who.base' );
/*----------------------------------------------------------------------------//
 *  ChromeOS
 */

/**
 * @private
 * @const {string} */
var _versionChromeOS = p_getVersionString( p_strUserAgent, 'CrOS x86_64 '  ) ||
                       p_getVersionString( p_strUserAgent, 'CrOS aarch64 ' ) ||
                       p_getVersionString( p_strUserAgent, 'CrOS i686 '    ) ||
                       p_getVersionString( p_strUserAgent, 'CrOS armv7l '  );

/** @return {boolean} */
who.platform.ChromeOS.is = function(){
    return !!_versionChromeOS;
};

/** @return {boolean|void} */
who.platform.ChromeOS.detect = function(){
    if( who.platform.ChromeOS.is() ){
        p_setPlatform( EnumPlatform.ChromeOS, _versionChromeOS, EnumDeviceType.PC );
        return true;
    };
};
