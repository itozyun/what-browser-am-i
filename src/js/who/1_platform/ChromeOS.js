goog.provide( 'who.platform.ChromeOS.is' );
goog.provide( 'who.platform.ChromeOS.detect' );

goog.require( 'who.base' );
/*----------------------------------------------------------------------------//
 *  ChromeOS
 */

/**
 * @private
 * @const {string} */
var _versionChromeOS = who.util.getVersionString( who.env.strUserAgent, 'CrOS x86_64 '  ) ||
                       who.util.getVersionString( who.env.strUserAgent, 'CrOS aarch64 ' ) ||
                       who.util.getVersionString( who.env.strUserAgent, 'CrOS i686 '    ) ||
                       who.util.getVersionString( who.env.strUserAgent, 'CrOS armv7l '  );

/** @return {boolean} */
who.platform.ChromeOS.is = function(){
    return !!_versionChromeOS;
};

/** @return {boolean|void} */
who.platform.ChromeOS.detect = function(){
    if( who.platform.ChromeOS.is() ){
        who.base.setPlatform( iAm.EnumPlatform.ChromeOS, _versionChromeOS, iAm.EnumDeviceType.PC );
        return true;
    };
};
