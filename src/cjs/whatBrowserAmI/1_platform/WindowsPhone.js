goog.provide( 'whatBrowserAmI.platform.WindowsPhone.is' );
goog.provide( 'whatBrowserAmI.platform.WindowsPhone.detect' );

goog.require( 'whatBrowserAmI.engine.UCWEB.WindowsPhoneVersionWithUCWEB' );
goog.require( 'whatBrowserAmI.engine.EdgeHTML.is' );
goog.require( 'whatBrowserAmI.engine.Trident.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  Windows Phone
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.WindowsPhone = {};

/** @const {string} */
var windowsPhoneVersion = p_getVersionString( p_strUserAgent, 'Windows Phone ' ) || p_getVersionString( p_strAppVersion, 'Windows Phone OS ' );

/** @const {string} */
var windowsPhoneVersionWithUCWEB = whatBrowserAmI.engine.UCWEB.WindowsPhoneVersionWithUCWEB;

/** @const {boolean} */
var isWP10PcSiteRequested = whatBrowserAmI.engine.EdgeHTML.is() && p_strPlatform === 'ARM';

/** @const {number} */
var implementVersionTrident = whatBrowserAmI.engine.Trident.IMPLEMENT_VERSION;

/**
 * ZuneWP は PC site requested で登場する
 * @const {boolean} */
var isWPPcSiteRequested = 7 <= implementVersionTrident && p_hasSubstring( p_strAppVersion, 'ZuneWP' );

/** @return {boolean} */
whatBrowserAmI.platform.WindowsPhone.is = function(){
    return isWP10PcSiteRequested || isWPPcSiteRequested || !!windowsPhoneVersionWithUCWEB || !!windowsPhoneVersion;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.WindowsPhone.detect = function(){
    if( whatBrowserAmI.platform.WindowsPhone.is() ){
        if( isWP10PcSiteRequested ){
            p_setPlatform( PLATFORM.WindowsPhone, 10, DEVICE_TYPE.PHONE );
            p_isPcSiteRequested = true;
        } else if( isWPPcSiteRequested ){
            p_setPlatform( PLATFORM.WindowsPhone, _tridentVersionToWindowsPhoneVersion( implementVersionTrident ), DEVICE_TYPE.PHONE );
            p_isPcSiteRequested = true;
        } else {
            p_setPlatform( PLATFORM.WindowsPhone, windowsPhoneVersionWithUCWEB || windowsPhoneVersion, DEVICE_TYPE.PHONE );
        };
        return true;
    };
};

/**
 * @private
 * @param {number} versionTrident 
 * @return {number}
 */
function _tridentVersionToWindowsPhoneVersion( versionTrident ){
    return versionTrident === 11 ? 8.1 :
           versionTrident === 10 ? 8   :
           versionTrident ===  9 ? 7.5 : 7;
};
