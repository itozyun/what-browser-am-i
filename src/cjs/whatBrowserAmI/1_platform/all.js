goog.provide( 'whatBrowserAmI.platform.detectAll' );

goog.require( 'whatBrowserAmI.platform.mylo.detect' );
goog.require( 'whatBrowserAmI.platform.NintendoDS.detect' );
goog.require( 'whatBrowserAmI.platform.NintendoDSi.detect' );
goog.require( 'whatBrowserAmI.platform.PlayStationPortable.detect' );
goog.require( 'whatBrowserAmI.platform.WindowsCE.detect' );
goog.require( 'whatBrowserAmI.platform.WindowsMobile.detect' );
goog.require( 'whatBrowserAmI.platform.BlackBerry.detect' );

goog.require( 'whatBrowserAmI.platform.Nintendo3DS.detect' );
goog.require( 'whatBrowserAmI.platform.NewNintendo3DS.detect' );
goog.require( 'whatBrowserAmI.platform.Wii.detect' );
goog.require( 'whatBrowserAmI.platform.WiiU.detect' );
goog.require( 'whatBrowserAmI.platform.WindowsPhone.detect' );
goog.require( 'whatBrowserAmI.platform.Maemo.detect' );
goog.require( 'whatBrowserAmI.platform.MeeGo.detect' );
goog.require( 'whatBrowserAmI.platform.WebOS.detect' );
goog.require( 'whatBrowserAmI.platform.Tizen.detect' );

goog.require( 'whatBrowserAmI.platform.PlayStationVita.detect' );
goog.require( 'whatBrowserAmI.platform.PlayStation.detect' );
goog.require( 'whatBrowserAmI.platform.NintendoSwitch.detect' );

goog.require( 'whatBrowserAmI.platform.BSD.detect' );
goog.require( 'whatBrowserAmI.platform.SunOS.detect' );

goog.require( 'whatBrowserAmI.platform.Xbox.detect' );
goog.require( 'whatBrowserAmI.platform.Windows.detect' );
goog.require( 'whatBrowserAmI.platform.Mac.detect' );
goog.require( 'whatBrowserAmI.platform.FirefoxOS.detect' );
goog.require( 'whatBrowserAmI.platform.FireOS.detect' );
goog.require( 'whatBrowserAmI.platform.ChromeOS.detect' );

goog.require( 'whatBrowserAmI.platform.iOS.detect' );
goog.require( 'whatBrowserAmI.platform.Android.detect' );
goog.require( 'whatBrowserAmI.platform.Linux.detect' );

whatBrowserAmI.platform.detectAll = function(){

    // パワーの低い platform を先に調べる
    whatBrowserAmI.platform.mylo.detect() ||
    whatBrowserAmI.platform.NintendoDS.detect() ||
    whatBrowserAmI.platform.NintendoDSi.detect() ||
    whatBrowserAmI.platform.PlayStationPortable.detect() ||
    whatBrowserAmI.platform.WindowsCE.detect() ||
    whatBrowserAmI.platform.WindowsMobile.detect() ||
    whatBrowserAmI.platform.BlackBerry.detect() ||

    whatBrowserAmI.platform.Nintendo3DS.detect() ||
    whatBrowserAmI.platform.NewNintendo3DS.detect() ||
    whatBrowserAmI.platform.Wii.detect() ||
    whatBrowserAmI.platform.WiiU.detect() ||
    whatBrowserAmI.platform.WindowsPhone.detect() ||
    whatBrowserAmI.platform.Maemo.detect() ||
    whatBrowserAmI.platform.MeeGo.detect() ||
    whatBrowserAmI.platform.WebOS.detect() ||
    whatBrowserAmI.platform.Tizen.detect() ||

    whatBrowserAmI.platform.PlayStationVita.detect() ||
    whatBrowserAmI.platform.PlayStation.detect() ||
    whatBrowserAmI.platform.NintendoSwitch.detect() ||

    whatBrowserAmI.platform.BSD.detect() ||
    whatBrowserAmI.platform.SunOS.detect() ||

    whatBrowserAmI.platform.Xbox.detect() ||
    whatBrowserAmI.platform.Windows.detect() ||
    whatBrowserAmI.platform.Mac.detect() ||
    whatBrowserAmI.platform.FirefoxOS.detect() ||
    whatBrowserAmI.platform.FireOS.detect() ||
    whatBrowserAmI.platform.ChromeOS.detect() ||

    whatBrowserAmI.platform.iOS.detect() ||
    whatBrowserAmI.platform.Android.detect() ||
    whatBrowserAmI.platform.Linux.detect();
};