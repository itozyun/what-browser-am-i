goog.provide( 'who.device.Kindle.is' );
goog.provide( 'who.device.Kindle.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  Kindle paperwhite
 *
 *    https://grumpy.blog/en/kindle_paperwhite_browser/
 *      > Paperwhite’s user-agent string is weird. While http header contains quite typical user-agent string,
 *      > navigator.userAgent contains another, which can be hardly identified among the dozens of other WebKits.
 *      > Yet another reason to use feature detection.
 *
 *    Mozilla/5.0 (X11; ; U; Linux armv7l; en-us) AppleWebKit/534.26+ (KHTML, like Gecko) Version/5.0 Safari/534.26+
 *    Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+
 *                                                                                                          Only http header! ~~~~~~~~~~~
 *    https://en.wikipedia.org/wiki/Amazon_Kindle
 *      > Fourth generation ... They also include Amazon's experimental web-browsing capability with Wi-Fi.
 * 
 *    
 */

/**
 * AndroidWebView が3以上で, HTMLAudioElement が居ない場合、Eインク端末用 Android ブラウザの可能性がある
 * @private
 * @const {boolean} */
var _maybeEInkAndroid =
        p_conpareVersion( 3, who.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION ) < 0
        && !p_hasAudioElement;

/**
 * Kindle は userAgent に特徴が無いため、他の Eink デバイスの確認の後に判断する
 * @return {boolean} */
who.device.Kindle.is = function(){
    return !who.device.isEinkAndroidWithoutKindle() &&
           _maybeEInkAndroid;
};

/** @return {boolean|void} */
who.device.Kindle.detect = function(){
    if( who.device.Kindle.is() ){
        p_setDevice(
            EnumDevice.Kindle,
            _androidWebViewVersionToKindleVersion( who.engine.ChromiumOrAndroidWebView.ANDROID_WEBVIEW_IMPLEMENT_VERSION ),
            EnumDeviceType.EINK_READER
        );
        return true;
    };
};

/**
 * @param {number|string} androidWebViewVersion
 * @return {number} */
function _androidWebViewVersionToKindleVersion( androidWebViewVersion ){
    return 5;
};