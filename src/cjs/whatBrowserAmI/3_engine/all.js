goog.provide( 'whatBrowserAmI.engine.detectAll' );

goog.require( 'whatBrowserAmI.engine.Presto.detect' );
goog.require( 'whatBrowserAmI.engine.OperaMini.detect' );
goog.require( 'whatBrowserAmI.engine.Trident.detect' );
goog.require( 'whatBrowserAmI.engine.EdgeHTML.detect' );
goog.require( 'whatBrowserAmI.engine.Goanna.detect' );
goog.require( 'whatBrowserAmI.engine.Gecko.detect' );
goog.require( 'whatBrowserAmI.engine.iCab.detect' );
goog.require( 'whatBrowserAmI.engine.KHTML.detect' );
goog.require( 'whatBrowserAmI.engine.NetFront.detect' );
goog.require( 'whatBrowserAmI.engine.UCWEB.detect' );
goog.require( 'whatBrowserAmI.engine.QtWebEngine.detect' );
goog.require( 'whatBrowserAmI.engine.QtWebKit.detect' );
goog.require( 'whatBrowserAmI.engine.Servo.detect' );
goog.require( 'whatBrowserAmI.engine.SamsungInternet.detect' );
goog.require( 'whatBrowserAmI.engine.SafariMobile.detect' );
goog.require( 'whatBrowserAmI.engine.iOSWebView.detect' );
goog.require( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.detect' );
goog.require( 'whatBrowserAmI.engine.WebKit.detect' );

whatBrowserAmI.engine.detectAll = function(){
    // 特徴的なエンジンからテストする, Safari Mobile, iOSWebView, Chromium or Android WebView, WebKit が最後
    if( !p_engineName ){
        whatBrowserAmI.engine.Presto.detect() ||
        whatBrowserAmI.engine.OperaMini.detect() ||
        whatBrowserAmI.engine.Trident.detect() ||
        whatBrowserAmI.engine.EdgeHTML.detect() ||
        whatBrowserAmI.engine.Goanna.detect() ||
        whatBrowserAmI.engine.Gecko.detect() ||
        whatBrowserAmI.engine.iCab.detect() ||
        whatBrowserAmI.engine.KHTML.detect() ||
        whatBrowserAmI.engine.NetFront.detect() ||
        whatBrowserAmI.engine.UCWEB.detect() ||
        whatBrowserAmI.engine.QtWebEngine.detect() ||
        whatBrowserAmI.engine.QtWebKit.detect() ||
        whatBrowserAmI.engine.Servo.detect() ||
        whatBrowserAmI.engine.SamsungInternet.detect() ||
        whatBrowserAmI.engine.SafariMobile.detect() ||
        whatBrowserAmI.engine.iOSWebView.detect() ||
        whatBrowserAmI.engine.ChromiumOrAndroidWebView.detect() ||
        whatBrowserAmI.engine.WebKit.detect();
    };
};