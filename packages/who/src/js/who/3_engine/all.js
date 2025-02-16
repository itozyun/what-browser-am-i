goog.provide( 'who.engine.detectAll' );

goog.require( 'who.engine.Presto.detect' );
goog.require( 'who.engine.OperaMini.detect' );
goog.require( 'who.engine.Trident.detect' );
goog.require( 'who.engine.EdgeHTML.detect' );
goog.require( 'who.engine.Goanna.detect' );
goog.require( 'who.engine.Gecko.detect' );
goog.require( 'who.engine.iCab.detect' );
goog.require( 'who.engine.KHTML.detect' );
goog.require( 'who.engine.NetFront.detect' );
goog.require( 'who.engine.UCWEB.detect' );
goog.require( 'who.engine.QtWebEngine.detect' );
goog.require( 'who.engine.QtWebKit.detect' );
goog.require( 'who.engine.Servo.detect' );
goog.require( 'who.engine.SamsungInternet.detect' );
goog.require( 'who.engine.SafariMobile.detect' );
goog.require( 'who.engine.iOSWebView.detect' );
goog.require( 'who.engine.ChromiumOrAndroidWebView.detect' );
goog.require( 'who.engine.WebKit.detect' );

who.engine.detectAll = function(){
    // 特徴的なエンジンからテストする, Safari Mobile, iOSWebView, Chromium or Android WebView, WebKit が最後
    if( !who.result.engineName ){
        who.engine.Presto.detect() ||
        who.engine.OperaMini.detect() ||
        who.engine.Trident.detect() ||
        who.engine.EdgeHTML.detect() ||
        who.engine.Goanna.detect() ||
        who.engine.Gecko.detect() ||
        who.engine.iCab.detect() ||
        who.engine.KHTML.detect() ||
        who.engine.NetFront.detect() ||
        who.engine.UCWEB.detect() ||
        who.engine.QtWebEngine.detect() ||
        who.engine.QtWebKit.detect() ||
        who.engine.Servo.detect() ||
        who.engine.SamsungInternet.detect() ||
        who.engine.SafariMobile.detect() ||
        who.engine.iOSWebView.detect() ||
        who.engine.ChromiumOrAndroidWebView.detect() ||
        who.engine.WebKit.detect();
    };
};