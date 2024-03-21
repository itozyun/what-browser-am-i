goog.provide( 'whatBrowserAmI.brand.detectAll' );

goog.require( 'whatBrowserAmI.brand' );
goog.require( 'whatBrowserAmI.brand.Edge.detect' );
goog.require( 'whatBrowserAmI.brand.OperaCoast.detect' );
goog.require( 'whatBrowserAmI.brand.OperaTurbo.detect' );
goog.require( 'whatBrowserAmI.brand.Yahoo.detect' );
goog.require( 'whatBrowserAmI.brand.UC.detect' );
goog.require( 'whatBrowserAmI.brand.Silk.detect' );
goog.require( 'whatBrowserAmI.brand.Vivaldi.detect' );
goog.require( 'whatBrowserAmI.brand.QQ.detect' );
goog.require( 'whatBrowserAmI.brand.Yandex.detect' );
goog.require( 'whatBrowserAmI.brand.coccoc.detect' );
goog.require( 'whatBrowserAmI.brand.Camino.detect' );
goog.require( 'whatBrowserAmI.brand.Sogou.detect' );
goog.require( 'whatBrowserAmI.brand.FirefoxFocus.detect' );
goog.require( 'whatBrowserAmI.brand.AOL.detect' );
goog.require( 'whatBrowserAmI.brand.IceDragon.detect' );
goog.require( 'whatBrowserAmI.brand.Iceweasel.detect' );
goog.require( 'whatBrowserAmI.brand.TenFourFox.detect' );
goog.require( 'whatBrowserAmI.brand.Waterfox.detect' );
goog.require( 'whatBrowserAmI.brand.GNUzilla.detect' );
goog.require( 'whatBrowserAmI.brand.SeaMonkey.detect' );
goog.require( 'whatBrowserAmI.brand.PaleMoon.detect' );
goog.require( 'whatBrowserAmI.brand.Basilisk.detect' );
goog.require( 'whatBrowserAmI.brand.Maxthon.detect' );
goog.require( 'whatBrowserAmI.brand.Avant.detect' );
goog.require( 'whatBrowserAmI.brand.Konqueror.detect' );
goog.require( 'whatBrowserAmI.brand.Midori.detect' );
goog.require( 'whatBrowserAmI.brand.OmniWeb.detect' );
goog.require( 'whatBrowserAmI.brand.Roccat.detect' );
goog.require( 'whatBrowserAmI.brand.Epiphany.detect' );
goog.require( 'whatBrowserAmI.brand.WebPositive.detect' );
goog.require( 'whatBrowserAmI.brand.Iron.detect' );
goog.require( 'whatBrowserAmI.brand.ComodoDragon.detect' );
goog.require( 'whatBrowserAmI.brand.Brave.detect' );
goog.require( 'whatBrowserAmI.brand.Rockmelt.detect' );
goog.require( 'whatBrowserAmI.brand.Dolphin.detect' );
goog.require( 'whatBrowserAmI.brand.Puffin.detect' );
goog.require( 'whatBrowserAmI.brand.Dooble.detect' );
goog.require( 'whatBrowserAmI.brand.Flock.detect' );
goog.require( 'whatBrowserAmI.brand.Galeon.detect' );
goog.require( 'whatBrowserAmI.brand.Falkon.detect' );
goog.require( 'whatBrowserAmI.brand.Iceape.detect' );
goog.require( 'whatBrowserAmI.brand.KMeleon.detect' );
goog.require( 'whatBrowserAmI.brand.NetFrontNX.detect' );
goog.require( 'whatBrowserAmI.brand.NetscapeNavigator.detect' );
goog.require( 'whatBrowserAmI.brand.Iris.detect' );
goog.require( 'whatBrowserAmI.brand.Facebook.detect' );
goog.require( 'whatBrowserAmI.brand.Line.detect' );
goog.require( 'whatBrowserAmI.brand.QtWebEngine.detect' );
goog.require( 'whatBrowserAmI.brand.QtWebKit.detect' );
goog.require( 'whatBrowserAmI.brand.DuckDuckGo.detect' );
goog.require( 'whatBrowserAmI.brand.Lunascape.detect' );
goog.require( 'whatBrowserAmI.brand.Firefox.detect' );
goog.require( 'whatBrowserAmI.brand.OperaGX.detect' );
goog.require( 'whatBrowserAmI.brand.Opera.detect' );
goog.require( 'whatBrowserAmI.brand.InternetExplorer.detect' );
goog.require( 'whatBrowserAmI.brand.SamsungInternet.detect' );
goog.require( 'whatBrowserAmI.brand.Chrome.detect' );
goog.require( 'whatBrowserAmI.brand.AndroidBrowser.detect' );
goog.require( 'whatBrowserAmI.brand.Safari.detect' );

whatBrowserAmI.brand.detectAll = function(){
    var brand = whatBrowserAmI.brand;

    // 特徴的な名前からテストする, Chromium, AndroidWebView, Safari, iOSWebView, WebKit が最後
    // Trident, Edge, WebKit 等は WebView を使ったサードパーティ製ブラウザの判定を最初に
    if( !p_brandName ){
        brand.Edge.detect() ||
        brand.OperaCoast.detect() ||
        brand.OperaTurbo.detect() ||
        brand.Yahoo.detect() ||
        brand.UC.detect() ||
        brand.Silk.detect() ||
        brand.Vivaldi.detect() ||
        brand.QQ.detect() ||
        brand.Yandex.detect() ||
        brand.coccoc.detect() ||
        brand.Camino.detect() ||
        brand.Sogou.detect() ||
        brand.FirefoxFocus.detect() ||
        brand.AOL.detect() ||
        brand.IceDragon.detect() ||
        brand.Iceweasel.detect() ||
        brand.TenFourFox.detect() ||
        brand.Waterfox.detect() ||
        brand.GNUzilla.detect() ||
        brand.SeaMonkey.detect() ||
        brand.PaleMoon.detect() ||
        brand.Basilisk.detect() ||
        brand.Maxthon.detect() ||
        brand.Avant.detect() ||
        brand.Konqueror.detect() ||
        brand.Midori.detect() ||
        brand.OmniWeb.detect() ||
        brand.Roccat.detect() ||
        brand.Epiphany.detect() ||
        brand.WebPositive.detect() ||
        brand.Iron.detect() ||
        brand.ComodoDragon.detect() ||
        brand.Brave.detect() ||
        brand.Rockmelt.detect() ||
        brand.Dolphin.detect() ||
        brand.Puffin.detect() ||
        brand.Dooble.detect() ||
        brand.Flock.detect() ||
        brand.Galeon.detect() ||
        brand.Falkon.detect() ||
        brand.Iceape.detect() ||
        brand.KMeleon.detect() ||
        brand.NetFrontNX.detect() ||
        brand.NetscapeNavigator.detect() ||
        brand.Iris.detect() ||
        brand.Facebook.detect() ||
        brand.Line.detect() ||
        brand.QtWebEngine.detect() ||
        brand.QtWebKit.detect() ||
        brand.DuckDuckGo.detect() ||
        brand.Lunascape.detect() ||
        brand.Firefox.detect() ||
        brand.OperaGX.detect() ||
        brand.Opera.detect() ||
        brand.InternetExplorer.detect() ||
        brand.SamsungInternet.detect() ||
        brand.Chrome.detect() ||
        brand.AndroidBrowser.detect() ||
        brand.Safari.detect();
    };
};