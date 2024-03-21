goog.provide( 'whatBrowserAmI.platform.detectAll' );

goog.require( 'whatBrowserAmI.platform' );
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
    var platform = whatBrowserAmI.platform;

    // パワーの低い platform を先に調べる

    platform.mylo.detect() ||
    platform.NintendoDS.detect() ||
    platform.NintendoDSi.detect() ||
    platform.PlayStationPortable.detect() ||
    platform.WindowsCE.detect() ||
    platform.WindowsMobile.detect() ||
    platform.BlackBerry.detect() ||

    platform.Nintendo3DS.detect() ||
    platform.NewNintendo3DS.detect() ||
    platform.Wii.detect() ||
    platform.WiiU.detect() ||
    platform.WindowsPhone.detect() ||
    platform.Maemo.detect() ||
    platform.MeeGo.detect() ||
    platform.WebOS.detect() ||
    platform.Tizen.detect() ||

    platform.PlayStationVita.detect() ||
    platform.PlayStation.detect() ||
    platform.NintendoSwitch.detect() ||

    platform.BSD.detect() ||
    platform.SunOS.detect() ||

    platform.Xbox.detect() ||
    platform.Windows.detect() ||
    platform.Mac.detect() ||
    platform.FirefoxOS.detect() ||
    platform.FireOS.detect() ||
    platform.ChromeOS.detect() ||

    platform.iOS.detect() ||
    platform.Android.detect() ||
    platform.Linux.detect();
};