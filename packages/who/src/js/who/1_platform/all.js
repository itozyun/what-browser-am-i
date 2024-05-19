goog.provide( 'who.platform.detectAll' );

goog.require( 'who.platform.mylo.detect' );
goog.require( 'who.platform.NintendoDS.detect' );
goog.require( 'who.platform.NintendoDSi.detect' );
goog.require( 'who.platform.PlayStationPortable.detect' );
goog.require( 'who.platform.WindowsCE.detect' );
goog.require( 'who.platform.WindowsMobile.detect' );
goog.require( 'who.platform.BlackBerry.detect' );

goog.require( 'who.platform.Nintendo3DS.detect' );
goog.require( 'who.platform.NewNintendo3DS.detect' );
goog.require( 'who.platform.Wii.detect' );
goog.require( 'who.platform.WiiU.detect' );
goog.require( 'who.platform.WindowsPhone.detect' );
goog.require( 'who.platform.Maemo.detect' );
goog.require( 'who.platform.MeeGo.detect' );
goog.require( 'who.platform.WebOS.detect' );
goog.require( 'who.platform.Tizen.detect' );

goog.require( 'who.platform.PlayStationVita.detect' );
goog.require( 'who.platform.PlayStation.detect' );
goog.require( 'who.platform.NintendoSwitch.detect' );

goog.require( 'who.platform.BSD.detect' );
goog.require( 'who.platform.SunOS.detect' );

goog.require( 'who.platform.Xbox.detect' );
goog.require( 'who.platform.Windows.detect' );
goog.require( 'who.platform.Mac.detect' );
goog.require( 'who.platform.FirefoxOS.detect' );
goog.require( 'who.platform.FireOS.detect' );
goog.require( 'who.platform.ChromeOS.detect' );

goog.require( 'who.platform.iOS.detect' );
goog.require( 'who.platform.Android.detect' );
goog.require( 'who.platform.Linux.detect' );

who.platform.detectAll = function(){

    // パワーの低い platform を先に調べる
    who.platform.mylo.detect() ||
    who.platform.NintendoDS.detect() ||
    who.platform.NintendoDSi.detect() ||
    who.platform.PlayStationPortable.detect() ||
    who.platform.WindowsCE.detect() ||
    who.platform.WindowsMobile.detect() ||
    who.platform.BlackBerry.detect() ||

    who.platform.Nintendo3DS.detect() ||
    who.platform.NewNintendo3DS.detect() ||
    who.platform.Wii.detect() ||
    who.platform.WiiU.detect() ||
    who.platform.WindowsPhone.detect() ||
    who.platform.Maemo.detect() ||
    who.platform.MeeGo.detect() ||
    who.platform.WebOS.detect() ||
    who.platform.Tizen.detect() ||

    who.platform.PlayStationVita.detect() ||
    who.platform.PlayStation.detect() ||
    who.platform.NintendoSwitch.detect() ||

    who.platform.BSD.detect() ||
    who.platform.SunOS.detect() ||

    who.platform.Xbox.detect() ||
    who.platform.Windows.detect() ||
    who.platform.Mac.detect() ||
    who.platform.FirefoxOS.detect() ||
    who.platform.FireOS.detect() ||
    who.platform.ChromeOS.detect() ||

    who.platform.iOS.detect() ||
    who.platform.Android.detect() ||
    who.platform.Linux.detect();
};