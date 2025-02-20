goog.provide( 'who.device.KindleFire.FIRE_OS_VERSION' );
goog.provide( 'who.device.KindleFire.is' );
goog.provide( 'who.device.KindleFire.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  Kindle
 *    https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Window/onmoztimechange
 *      > This API is available on Firefox OS for internal applications only.
 */

/**
 * https://developer.amazon.com/ja/docs/fire-tablets/ft-identifying-tablet-devices.html
 * @private
 * @const {!Array.<number>|void}
 */
var fireOSVersionAndKindleFireGeneration =
    /**
     * (2023, 13th Gen) Fire OS 8.0 => ?.?.?, Android 11
     * "KFTUWI"   Fire HD 10(2023)
     * "KFSNWI"   Fire MAX 11(2023)
     */  
    who.util.hasSubstring( who.env.strUserAgent, 'KFTUWI'  ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFSNWI' ) ? [ 8, 13 ] :
    /**
     * (2022, 12th Gen) Fire OS 8.0 => ?.?.?, Android 11
     * "KFRAWI"   Fire HD 8(2GB)
     * "KFRAPWI"  Fire HD 8(3GB)
     * "KFQUWI"   Fire 7
     */  
    who.util.hasSubstring( who.env.strUserAgent, 'KFSUWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFRAPWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFQUWI' ) ? [ 8, 12 ] :
    /**
     * (2021, 11th Gen) Fire OS 7.0 => ?.?.?, Android 9
     * "KFTRWI"   Fire HD 10(3GB)
     * "KFTRPWI"   Fire HD 10(4GB)
     */  
    who.util.hasSubstring( who.env.strUserAgent, 'KFTRWI'  ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFTRPWI' ) ? [ 7, 11 ] :
    /**
     * (2020, 10th Gen) Fire OS 7.0 => ?.?.?, Android 9
     * "KFONWI"   Fire HD 8 (2020)
     */
    who.util.hasSubstring( who.env.strUserAgent, 'KFONWI' ) ? [ 7, 10 ] :
    /**
     * (2019, 9th Gen) Fire OS 6.3.0, Android 7.1.25
     * "KFMUWI"   Fire 7  
     */
    who.util.hasSubstring( who.env.strUserAgent, 'KFMUWI' ) ? [ 6.3, 9 ] :
    /**
     * (2018, 8th Gen) Fire OS 6.0 => 6.3.0, Android 7.1.25
     * "KFKAWI"   Fire HD 8   
     */
    who.util.hasSubstring( who.env.strUserAgent, 'KFKAWI' ) ? [ 6, 8 ] :
    /**
     * (2017, 7th Gen) Fire OS 5.3.3 => 5.3.6, Android 5.1.22
     * "KFSUWI"   Fire HD 10
     * "KFAUWI"   Fire 7
     * "KFDOWI"   Fire HD 8
     */  
    who.util.hasSubstring( who.env.strUserAgent, 'KFSUWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFAUWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFDOWI' ) ? [ 5, 7 ] :
    /**
     * (2016, 6th Gen) Fire OS 5 => 5.3.6, Android 5.1.22
     * "KFGIWI"   Fire HD 8 (2016)
     */ 
    who.util.hasSubstring( who.env.strUserAgent, 'KFGIWI' ) ? [ 5, 6 ] :
    /**
     * (2015, 5th Gen) Fire OS 5
     * "KFTBWI"   Fire HD 10 (2015)
     * "KFMEWI"   Fire HD 8 (2015)
     * "KFFOWI"   Fire (2015)
     */ 
    who.util.hasSubstring( who.env.strUserAgent, 'KFTBWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFMEWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFFOWI' ) ? [ 5, 5 ] :
    /**
     * (4th Gen) Fire OS 5, Android 5.1  , API level 22 (system update, available 2015)
     *           Fire OS 4, Android 4.4.2, API level 19
     * "KFARWI"   Fire HD 6
     * "KFSAWA"   Fire HDX 8.9 (WAN)
     * "KFSAWI"   Fire HDX 8.9 (Wi-Fi)
     */
    who.util.hasSubstring( who.env.strUserAgent, 'KFARWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFSAWA' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFSAWI' ) ? [ ( 5 <= parseFloat( who.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION ) ? 5 : 4 ), 4 ] :
    // https://dennou-note.blogspot.com/2014/02/kindle.html
    /**
     * (3th Gen）Fire OS 3.0, Android 4.2.2（JellyBean / API level17）
     * "KFSOWI"   Kindle Fire HD
     * "KFTHWA"   Kindle Fire HDX (wan)
     * "KFTHWI"   Kindle Fire HDX (wi-fi)
     * "KFAPWA"   Kindle Fire HDX 8.9 (wan)
     * "KFAPWI"   Kindle Fire HDX 8.9 (wifi)
     */
    who.util.hasSubstring( who.env.strUserAgent, 'KFSOWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFTHWA' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFTHWI' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFAPWA' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFAPWI' ) ? [ 3, 3 ] :
    /**
     * (2th Gen）Android 4.0.3（Ice Cream Sandwich / API level15)
     * "KFOT"     Kindle Fire
     * "KFTT"     Kindle Fire HD
     * "KFJWA"    Kindle Fire HD8.9 (wan)
     * "KFJWI"    Kindle Fire HD8.9 (wi-fi)
     */
    who.util.hasSubstring( who.env.strUserAgent, 'KFOT'  ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFTT'  ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFJWA' ) ||
    who.util.hasSubstring( who.env.strUserAgent, 'KFJWI' ) ? [ 2, 2 ] :
    // (1th Gen）Android 2.3.3（Gingerbread / API level10）
    // "kindle Fire"   Kindle Fire 
    who.util.hasSubstring( who.env.strUserAgent, 'Kindle Fire' ) ? [ 1, 1 ] : undefined;

/** @const {number|void} */
who.device.KindleFire.FIRE_OS_VERSION = fireOSVersionAndKindleFireGeneration && fireOSVersionAndKindleFireGeneration[ 0 ];

/** @return {boolean} */
who.device.KindleFire.is = function(){
    return !!fireOSVersionAndKindleFireGeneration;
};

/** @return {boolean|void} */
who.device.KindleFire.detect = function(){
    if( who.device.KindleFire.is() ){
        who.base.setDevice( iAm.EnumDevice.KindleFire, fireOSVersionAndKindleFireGeneration[ 1 ], iAm.EnumDeviceType.TABLET );
        return true;
    };
};
