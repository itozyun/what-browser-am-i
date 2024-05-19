goog.provide( 'who.platform.WindowsPhone.is' );
goog.provide( 'who.platform.WindowsPhone.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.UCWEB.WindowsPhoneVersionWithUCWEB' );
goog.require( 'who.engine.EdgeHTML.is' );
goog.require( 'who.engine.Trident.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  Windows Phone
 */

/** @const {string} */
var windowsPhoneVersion = p_getVersionString( p_strUserAgent, 'Windows Phone ' ) || p_getVersionString( p_strAppVersion, 'Windows Phone OS ' );

/** @const {string} */
var windowsPhoneVersionWithUCWEB = who.engine.UCWEB.WindowsPhoneVersionWithUCWEB;

/** @const {boolean} */
var isWP10PcSiteRequested = who.engine.EdgeHTML.is() && p_strPlatform === 'ARM';

/** @const {number} */
var implementVersionTrident = who.engine.Trident.IMPLEMENT_VERSION;

/**
 * ZuneWP は PC site requested で登場する
 * @const {boolean} */
var isWPPcSiteRequested = 7 <= implementVersionTrident && p_hasSubstring( p_strAppVersion, 'ZuneWP' );

/** @return {boolean} */
who.platform.WindowsPhone.is = function(){
    return isWP10PcSiteRequested || isWPPcSiteRequested || !!windowsPhoneVersionWithUCWEB || !!windowsPhoneVersion;
};

/** @return {boolean|void} */
who.platform.WindowsPhone.detect = function(){
    if( who.platform.WindowsPhone.is() ){
        if( isWP10PcSiteRequested ){
            p_setPlatform( PLATFORM.Windows_Phone, 10, DEVICE_TYPE.PHONE );
            p_isPcSiteRequested = true;
        } else if( isWPPcSiteRequested ){
            p_setPlatform( PLATFORM.Windows_Phone, _tridentVersionToWindowsPhoneVersion( implementVersionTrident ), DEVICE_TYPE.PHONE );
            p_isPcSiteRequested = true;
        } else {
            p_setPlatform( PLATFORM.Windows_Phone, windowsPhoneVersionWithUCWEB || windowsPhoneVersion, DEVICE_TYPE.PHONE );
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
