goog.provide( 'whatBrowserAmI.engine.detectAll' );

goog.require( 'whatBrowserAmI.engine' );
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
goog.require( 'whatBrowserAmI.engine.SamsungInternet.detect' );
goog.require( 'whatBrowserAmI.engine.SafariMobile.detect' );
goog.require( 'whatBrowserAmI.engine.iOSWebView.detect' );
goog.require( 'whatBrowserAmI.engine.ChromiumOrAndroidWebView.detect' );
goog.require( 'whatBrowserAmI.engine.WebKit.detect' );

whatBrowserAmI.engine.detectAll = function(){
    var engine = whatBrowserAmI.engine;

    // 特徴的なエンジンからテストする, Chromium, AndroidWebView, Safari, iOSWebView, WebKit が最後
    if( !p_engineName ){
        engine.Presto.detect() ||
        engine.OperaMini.detect() ||
        engine.Trident.detect() ||
        engine.EdgeHTML.detect() ||
        engine.Goanna.detect() ||
        engine.Gecko.detect() ||
        engine.iCab.detect() ||
        engine.KHTML.detect() ||
        engine.NetFront.detect() ||
        engine.UCWEB.detect() ||
        engine.SamsungInternet.detect() ||
        engine.SafariMobile.detect() ||
        engine.iOSWebView.detect() ||
        engine.ChromiumOrAndroidWebView.detect() ||
        engine.WebKit.detect();
    };
};