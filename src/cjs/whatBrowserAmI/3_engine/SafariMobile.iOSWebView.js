goog.provide( 'whatBrowserAmI.engine.SafariMobile.is' );
goog.provide( 'whatBrowserAmI.engine.SafariMobile.detect' );
goog.provide( 'whatBrowserAmI.engine.iOSWebView.is' );
goog.provide( 'whatBrowserAmI.engine.iOSWebView.detect' );
goog.provide( 'whatBrowserAmI.engine.iOSWebView.IMPLEMENT_VERSION' );

goog.require( 'whatBrowserAmI.brand.Puffin.iOSImplementVersion' );
goog.require( 'whatBrowserAmI.engine.OperaMini.is' );
goog.require( 'whatBrowserAmI.engine.UCWEB.is' );

/*----------------------------------------------------------------------------//
 *  Safari Mobile
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.SafariMobile = {};

/**
 * @private
 * @return {boolean}
 */
function _isIOS(){
    return p_platformName === PLATFORM.iOS;
};

/** @return {boolean} */
whatBrowserAmI.engine.SafariMobile.is = function(){
    var platformVersion = p_platformVersion;

    var isIOSWithPuffin = !!whatBrowserAmI.brand.Puffin.iOSImplementVersion;

    return _isIOS() &&
        !isIOSWithPuffin && // iPad iOS12.2 Puffin5.2.2 で fullscreenEnabled が存在の模様
        // ホーム画面から起動したWebページ(A2H)は navigator.standalone === true になっている。fullscreen API は無い。
        ( p_standalone ||
            // https://github.com/uupaa/WebApp2/blob/master/app/assets/modules/UserAgent.js
            // _isWebView_iOS(options)
            // iPhone 13 で fullscreenEnabled の判定が出来ない.
            // https://caniuse.com/#feat=fullscreen によると、iOS は12からなので、fullscreenEnabled による Safari/WebView の判定は 11 迄は動いたと仮定する
            ( ( p_deviceName === DEVICE.iPad || platformVersion < 12 ) && p_inObject( 'webkitFullscreenEnabled', document ) ) ||
            ( 11 <= platformVersion && platformVersion < 13 && navigator.mediaDevices ) // 12迄は mediaDevices は Safari だけだった。
        );
};

/** @return {boolean|void} */
whatBrowserAmI.engine.SafariMobile.detect = function(){
    if( whatBrowserAmI.engine.SafariMobile.is() ){
        p_setEngine( ENGINE.SafariMobile, p_platformVersion );
        return true;
    };
};

/*----------------------------------------------------------------------------//
 *  iOS WebView
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.iOSWebView = {};

/** @return {number} */
whatBrowserAmI.engine.iOSWebView.IMPLEMENT_VERSION =
    // navigator[ 'mediaDevices'    ] ? 11.2 : // WebView では無効
    // https://github.com/BasqueVoIPMafia/cordova-plugin-iosrtc/issues/250#issuecomment-336240953
    window.PointerEvent        ? 13   :
    window.HTMLDataListElement ? 12.2 :
    Array.prototype.flat       ? 12   :
    navigator.sendBeacon       ? 11.3 :
    window.WebAssembly         ? 11.2 :
    window.HTMLMeterElement    ? 10.3 :
    window.Proxy               ? 10.2 :
    window.HTMLPictureElement  ?  9.3 :
    Number.isNaN               ?  9.2 :
    // http://uupaa.hatenablog.com/entry/2015/03/03/223344
    window.SharedWorker        ?
        ( p_performance && p_performance.now ? 8.0 : 8.4 ) :
    document.execCommand       ?  7.1 :
    window.webkitURL           ?  6.1 :
    window.Worker              ?  5.1 :
    p_hasInt8Array                  ?  4.3 :
    p_hasAudioElement            ?  4.1 : 3.2;

/** @return {boolean} */
whatBrowserAmI.engine.iOSWebView.is = function(){
    return _isIOS() &&
        !whatBrowserAmI.engine.SafariMobile.is() &&
        !whatBrowserAmI.engine.OperaMini.is() &&
        !whatBrowserAmI.engine.UCWEB.is();
};

/** @return {boolean|void} */
whatBrowserAmI.engine.iOSWebView.detect = function(){
    if( whatBrowserAmI.engine.iOSWebView.is() ){
        p_setEngine( ENGINE.iOSWebView, p_platformVersion );
        return true;
    };
};
