goog.provide( 'who.brand.detectAll' );

goog.require( 'who.brand.Edge.detect' );
goog.require( 'who.brand.OperaCoast.detect' );
goog.require( 'who.brand.OperaTurbo.detect' );
goog.require( 'who.brand.Yahoo.detect' );
goog.require( 'who.brand.UC.detect' );
goog.require( 'who.brand.Silk.detect' );
goog.require( 'who.brand.Vivaldi.detect' );
goog.require( 'who.brand.QQ.detect' );
goog.require( 'who.brand.Yandex.detect' );
goog.require( 'who.brand.coccoc.detect' );
goog.require( 'who.brand.Camino.detect' );
goog.require( 'who.brand.Sogou.detect' );
goog.require( 'who.brand.FirefoxFocus.detect' );
goog.require( 'who.brand.AOL.detect' );
goog.require( 'who.brand.Otter.detect' );
goog.require( 'who.brand.QupZilla.detect' );
goog.require( 'who.brand.IceDragon.detect' );
goog.require( 'who.brand.Iceweasel.detect' );
goog.require( 'who.brand.TenFourFox.detect' );
goog.require( 'who.brand.Waterfox.detect' );
goog.require( 'who.brand.GNUzilla.detect' );
goog.require( 'who.brand.SeaMonkey.detect' );
goog.require( 'who.brand.PaleMoon.detect' );
goog.require( 'who.brand.Basilisk.detect' );
goog.require( 'who.brand.Maxthon.detect' );
goog.require( 'who.brand.Avant.detect' );
goog.require( 'who.brand.Konqueror.detect' );
goog.require( 'who.brand.Midori.detect' );
goog.require( 'who.brand.OmniWeb.detect' );
goog.require( 'who.brand.Roccat.detect' );
goog.require( 'who.brand.Epiphany.detect' );
goog.require( 'who.brand.WebPositive.detect' );
goog.require( 'who.brand.Iron.detect' );
goog.require( 'who.brand.ComodoDragon.detect' );
goog.require( 'who.brand.Brave.detect' );
goog.require( 'who.brand.Rockmelt.detect' );
goog.require( 'who.brand.Dolphin.detect' );
goog.require( 'who.brand.Puffin.detect' );
goog.require( 'who.brand.Dooble.detect' );
goog.require( 'who.brand.Flock.detect' );
goog.require( 'who.brand.Galeon.detect' );
goog.require( 'who.brand.Falkon.detect' );
goog.require( 'who.brand.Iceape.detect' );
goog.require( 'who.brand.KMeleon.detect' );
goog.require( 'who.brand.NetFrontNX.detect' );
goog.require( 'who.brand.NetscapeNavigator.detect' );
goog.require( 'who.brand.Iris.detect' );
goog.require( 'who.brand.Facebook.detect' );
goog.require( 'who.brand.LINE.detect' );
goog.require( 'who.brand.DuckDuckGo.detect' );
goog.require( 'who.brand.Lunascape.detect' );
goog.require( 'who.brand.Mozilla.detect' );
goog.require( 'who.brand.Firefox.detect' );
goog.require( 'who.brand.OperaGX.detect' );
goog.require( 'who.brand.Opera.detect' );
goog.require( 'who.brand.InternetExplorer.detect' );
goog.require( 'who.brand.SamsungInternet.detect' );
goog.require( 'who.brand.Chrome.detect' );
goog.require( 'who.brand.AndroidBrowser.detect' );
goog.require( 'who.brand.Safari.detect' );

who.brand.detectAll = function(){
    // 特徴的な名前からテストする, Chromium, AndroidWebView, Safari, iOSWebView, WebKit が最後
    // Trident, Edge, WebKit 等は WebView を使ったサードパーティ製ブラウザの判定を最初に
    if( !p_brandName ){
        who.brand.Edge.detect() ||
        who.brand.OperaCoast.detect() ||
        who.brand.OperaTurbo.detect() ||
        who.brand.Yahoo.detect() ||
        who.brand.UC.detect() ||
        who.brand.Silk.detect() ||
        who.brand.Vivaldi.detect() ||
        who.brand.QQ.detect() ||
        who.brand.Yandex.detect() ||
        who.brand.coccoc.detect() ||
        who.brand.Camino.detect() ||
        who.brand.Sogou.detect() ||
        who.brand.FirefoxFocus.detect() ||
        who.brand.AOL.detect() ||
        who.brand.Otter.detect() ||
        who.brand.QupZilla.detect() ||
        who.brand.IceDragon.detect() ||
        who.brand.Iceweasel.detect() ||
        who.brand.TenFourFox.detect() ||
        who.brand.Waterfox.detect() ||
        who.brand.GNUzilla.detect() ||
        who.brand.SeaMonkey.detect() ||
        who.brand.PaleMoon.detect() ||
        who.brand.Basilisk.detect() ||
        who.brand.Maxthon.detect() ||
        who.brand.Avant.detect() ||
        who.brand.Konqueror.detect() ||
        who.brand.Midori.detect() ||
        who.brand.OmniWeb.detect() ||
        who.brand.Roccat.detect() ||
        who.brand.Epiphany.detect() ||
        who.brand.WebPositive.detect() ||
        who.brand.Iron.detect() ||
        who.brand.ComodoDragon.detect() ||
        who.brand.Brave.detect() ||
        who.brand.Rockmelt.detect() ||
        who.brand.Dolphin.detect() ||
        who.brand.Puffin.detect() ||
        who.brand.Dooble.detect() ||
        who.brand.Flock.detect() ||
        who.brand.Galeon.detect() ||
        who.brand.Falkon.detect() ||
        who.brand.Iceape.detect() ||
        who.brand.KMeleon.detect() ||
        who.brand.NetFrontNX.detect() ||
        who.brand.NetscapeNavigator.detect() ||
        who.brand.Iris.detect() ||
        who.brand.Facebook.detect() ||
        who.brand.LINE.detect() ||
        who.brand.DuckDuckGo.detect() ||
        who.brand.Lunascape.detect() ||
        who.brand.Mozilla.detect() ||
        who.brand.Firefox.detect() ||
        who.brand.OperaGX.detect() ||
        who.brand.Opera.detect() ||
        who.brand.InternetExplorer.detect() ||
        who.brand.SamsungInternet.detect() ||
        who.brand.Chrome.detect() ||
        who.brand.AndroidBrowser.detect() ||
        who.brand.Safari.detect();
    };
};