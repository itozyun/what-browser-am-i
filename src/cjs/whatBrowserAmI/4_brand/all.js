goog.provide( 'whatBrowserAmI.brand.detectAll' );

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
goog.require( 'whatBrowserAmI.brand.LINE.detect' );
goog.require( 'whatBrowserAmI.brand.QtWebEngine.detect' );
goog.require( 'whatBrowserAmI.brand.QtWebKit.detect' );
goog.require( 'whatBrowserAmI.brand.DuckDuckGo.detect' );
goog.require( 'whatBrowserAmI.brand.Lunascape.detect' );
goog.require( 'whatBrowserAmI.brand.Mozilla.detect' );
goog.require( 'whatBrowserAmI.brand.Firefox.detect' );
goog.require( 'whatBrowserAmI.brand.OperaGX.detect' );
goog.require( 'whatBrowserAmI.brand.Opera.detect' );
goog.require( 'whatBrowserAmI.brand.InternetExplorer.detect' );
goog.require( 'whatBrowserAmI.brand.SamsungInternet.detect' );
goog.require( 'whatBrowserAmI.brand.Chrome.detect' );
goog.require( 'whatBrowserAmI.brand.AndroidBrowser.detect' );
goog.require( 'whatBrowserAmI.brand.Safari.detect' );

whatBrowserAmI.brand.detectAll = function(){
    // 特徴的な名前からテストする, Chromium, AndroidWebView, Safari, iOSWebView, WebKit が最後
    // Trident, Edge, WebKit 等は WebView を使ったサードパーティ製ブラウザの判定を最初に
    if( !p_brandName ){
        whatBrowserAmI.brand.Edge.detect() ||
        whatBrowserAmI.brand.OperaCoast.detect() ||
        whatBrowserAmI.brand.OperaTurbo.detect() ||
        whatBrowserAmI.brand.Yahoo.detect() ||
        whatBrowserAmI.brand.UC.detect() ||
        whatBrowserAmI.brand.Silk.detect() ||
        whatBrowserAmI.brand.Vivaldi.detect() ||
        whatBrowserAmI.brand.QQ.detect() ||
        whatBrowserAmI.brand.Yandex.detect() ||
        whatBrowserAmI.brand.coccoc.detect() ||
        whatBrowserAmI.brand.Camino.detect() ||
        whatBrowserAmI.brand.Sogou.detect() ||
        whatBrowserAmI.brand.FirefoxFocus.detect() ||
        whatBrowserAmI.brand.AOL.detect() ||
        whatBrowserAmI.brand.IceDragon.detect() ||
        whatBrowserAmI.brand.Iceweasel.detect() ||
        whatBrowserAmI.brand.TenFourFox.detect() ||
        whatBrowserAmI.brand.Waterfox.detect() ||
        whatBrowserAmI.brand.GNUzilla.detect() ||
        whatBrowserAmI.brand.SeaMonkey.detect() ||
        whatBrowserAmI.brand.PaleMoon.detect() ||
        whatBrowserAmI.brand.Basilisk.detect() ||
        whatBrowserAmI.brand.Maxthon.detect() ||
        whatBrowserAmI.brand.Avant.detect() ||
        whatBrowserAmI.brand.Konqueror.detect() ||
        whatBrowserAmI.brand.Midori.detect() ||
        whatBrowserAmI.brand.OmniWeb.detect() ||
        whatBrowserAmI.brand.Roccat.detect() ||
        whatBrowserAmI.brand.Epiphany.detect() ||
        whatBrowserAmI.brand.WebPositive.detect() ||
        whatBrowserAmI.brand.Iron.detect() ||
        whatBrowserAmI.brand.ComodoDragon.detect() ||
        whatBrowserAmI.brand.Brave.detect() ||
        whatBrowserAmI.brand.Rockmelt.detect() ||
        whatBrowserAmI.brand.Dolphin.detect() ||
        whatBrowserAmI.brand.Puffin.detect() ||
        whatBrowserAmI.brand.Dooble.detect() ||
        whatBrowserAmI.brand.Flock.detect() ||
        whatBrowserAmI.brand.Galeon.detect() ||
        whatBrowserAmI.brand.Falkon.detect() ||
        whatBrowserAmI.brand.Iceape.detect() ||
        whatBrowserAmI.brand.KMeleon.detect() ||
        whatBrowserAmI.brand.NetFrontNX.detect() ||
        whatBrowserAmI.brand.NetscapeNavigator.detect() ||
        whatBrowserAmI.brand.Iris.detect() ||
        whatBrowserAmI.brand.Facebook.detect() ||
        whatBrowserAmI.brand.LINE.detect() ||
        whatBrowserAmI.brand.QtWebEngine.detect() ||
        whatBrowserAmI.brand.QtWebKit.detect() ||
        whatBrowserAmI.brand.DuckDuckGo.detect() ||
        whatBrowserAmI.brand.Lunascape.detect() ||
        whatBrowserAmI.brand.Mozilla.detect() ||
        whatBrowserAmI.brand.Firefox.detect() ||
        whatBrowserAmI.brand.OperaGX.detect() ||
        whatBrowserAmI.brand.Opera.detect() ||
        whatBrowserAmI.brand.InternetExplorer.detect() ||
        whatBrowserAmI.brand.SamsungInternet.detect() ||
        whatBrowserAmI.brand.Chrome.detect() ||
        whatBrowserAmI.brand.AndroidBrowser.detect() ||
        whatBrowserAmI.brand.Safari.detect();
    };
};