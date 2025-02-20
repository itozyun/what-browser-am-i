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
var windowsPhoneVersion = who.util.getVersionString( who.env.strUserAgent, 'Windows Phone ' ) || who.util.getVersionString( who.env.strAppVersion, 'Windows Phone OS ' );

/** @const {string} */
var windowsPhoneVersionWithUCWEB = who.engine.UCWEB.WindowsPhoneVersionWithUCWEB;

/** @const {boolean} */
var isWP10PcSiteRequested = who.engine.EdgeHTML.is() && who.env.strPlatform === 'ARM';

/** @const {number} */
var implementVersionTrident = who.engine.Trident.IMPLEMENT_VERSION;

/**
 * ZuneWP は PC site requested で登場する
 * @const {boolean} */
var isWPPcSiteRequested = 7 <= implementVersionTrident && who.util.hasSubstring( who.env.strAppVersion, 'ZuneWP' );

/** @return {boolean} */
who.platform.WindowsPhone.is = function(){
    return isWP10PcSiteRequested || isWPPcSiteRequested || !!windowsPhoneVersionWithUCWEB || !!windowsPhoneVersion;
};

/** @return {boolean|void} */
who.platform.WindowsPhone.detect = function(){
    if( who.platform.WindowsPhone.is() ){
        if( isWP10PcSiteRequested ){
            who.base.setPlatform( iAm.EnumPlatform.Windows_Phone, 10, iAm.EnumDeviceType.PHONE );
            who.result.isPcSiteRequested = true;
        } else if( isWPPcSiteRequested ){
            who.base.setPlatform( iAm.EnumPlatform.Windows_Phone, _tridentVersionToWindowsPhoneVersion( implementVersionTrident ), iAm.EnumDeviceType.PHONE );
            who.result.isPcSiteRequested = true;
        } else {
            who.base.setPlatform( iAm.EnumPlatform.Windows_Phone, windowsPhoneVersionWithUCWEB || windowsPhoneVersion, iAm.EnumDeviceType.PHONE );
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
