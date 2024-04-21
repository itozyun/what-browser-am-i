/**
 * https://en.wikipedia.org/wiki/Comparison_of_e-readers
 * 
 * List of Android smartphones
 * https://en.wikipedia.org/wiki/List_of_Android_smartphones#N
 * 
 */
goog.provide( 'whatBrowserAmI.device.isEinkAndroid' );
goog.provide( 'whatBrowserAmI.device.isEinkLinux' );
goog.provide( 'whatBrowserAmI.device.isEink' );
goog.provide( 'whatBrowserAmI.device.detectAll' );

goog.require( 'whatBrowserAmI.device.BOOX.is' );
goog.require( 'whatBrowserAmI.device.Cybook.is' );
goog.require( 'whatBrowserAmI.device.eClicto.is' );
goog.require( 'whatBrowserAmI.device.Fidibook.is' );
goog.require( 'whatBrowserAmI.device.Hisense.is' );
goog.require( 'whatBrowserAmI.device.icarus.is' );
goog.require( 'whatBrowserAmI.device.Kobo.is' );
goog.require( 'whatBrowserAmI.device.Likebook.is' );
goog.require( 'whatBrowserAmI.device.Manta.is' );
goog.require( 'whatBrowserAmI.device.Movistar.is' );
goog.require( 'whatBrowserAmI.device.Nook.is' );
goog.require( 'whatBrowserAmI.device.PocketBook.is' );
goog.require( 'whatBrowserAmI.device.SonyReader.is' );
goog.require( 'whatBrowserAmI.device.Tolino.is' );
goog.require( 'whatBrowserAmI.device.Kindle.is' );

goog.require( 'whatBrowserAmI.device.AppleSmartDevice.detect' );
goog.require( 'whatBrowserAmI.device.BOOX.detect' );
goog.require( 'whatBrowserAmI.device.Cybook.detect' );
goog.require( 'whatBrowserAmI.device.eClicto.detect' );
goog.require( 'whatBrowserAmI.device.Fidibook.detect' );
goog.require( 'whatBrowserAmI.device.FireTV.detect' );
goog.require( 'whatBrowserAmI.device.Hisense.detect' );
goog.require( 'whatBrowserAmI.device.icarus.detect' );
goog.require( 'whatBrowserAmI.device.Kindle.detect' );
goog.require( 'whatBrowserAmI.device.KindleFire.detect' );
goog.require( 'whatBrowserAmI.device.Kobo.detect' );
goog.require( 'whatBrowserAmI.device.Likebook.detect' );
goog.require( 'whatBrowserAmI.device.Manta.detect' );
goog.require( 'whatBrowserAmI.device.Movistar.detect' );
goog.require( 'whatBrowserAmI.device.Nook.detect' );
goog.require( 'whatBrowserAmI.device.PocketBook.detect' );
goog.require( 'whatBrowserAmI.device.SonyReader.detect' );
goog.require( 'whatBrowserAmI.device.Tolino.detect' );

/**
 * @package
 * @return {boolean} */
whatBrowserAmI.device.isEinkAndroidWithoutKindle = function(){
    return whatBrowserAmI.device.BOOX.is() ||
           whatBrowserAmI.device.Cybook.is() ||
           whatBrowserAmI.device.eClicto.is() ||
           whatBrowserAmI.device.Fidibook.is() ||
           whatBrowserAmI.device.Hisense.is() ||
           whatBrowserAmI.device.icarus.is() ||
           whatBrowserAmI.device.Kobo.is() ||
           whatBrowserAmI.device.Likebook.is() ||
           whatBrowserAmI.device.Manta.is() ||
           whatBrowserAmI.device.Movistar.is() ||
           whatBrowserAmI.device.Nook.is() ||
           whatBrowserAmI.device.PocketBook.is() ||
           whatBrowserAmI.device.SonyReader.is() ||
           whatBrowserAmI.device.Tolino.is();
};

/** @return {boolean} */
whatBrowserAmI.device.isEinkAndroid = function(){
    return whatBrowserAmI.device.isEinkAndroidWithoutKindle() ||
           whatBrowserAmI.device.Kindle.is();
};

/** @return {boolean} */
whatBrowserAmI.device.isEinkLinux = function(){
    return false;
};

/** @return {boolean} */
whatBrowserAmI.device.isEink = function(){
    return whatBrowserAmI.device.isEinkAndroid() || whatBrowserAmI.device.isEinkLinux();
};

whatBrowserAmI.device.detectAll = function(){
    // Kindle は最後!
    if( !p_deviceName ){
        whatBrowserAmI.device.AppleSmartDevice.detect() ||
        whatBrowserAmI.device.BOOX.detect() ||
        whatBrowserAmI.device.Cybook.detect() ||
        whatBrowserAmI.device.eClicto.detect() ||
        whatBrowserAmI.device.Fidibook.detect() ||
        whatBrowserAmI.device.FireTV.detect() ||
        whatBrowserAmI.device.Hisense.detect() ||
        whatBrowserAmI.device.icarus.detect() ||
        whatBrowserAmI.device.KindleFire.detect() ||
        whatBrowserAmI.device.Kobo.detect() ||
        whatBrowserAmI.device.Likebook.detect() ||
        whatBrowserAmI.device.Manta.detect() ||
        whatBrowserAmI.device.Movistar.detect() ||
        whatBrowserAmI.device.Nook.detect() ||
        whatBrowserAmI.device.PocketBook.detect() ||
        whatBrowserAmI.device.SonyReader.detect() ||
        whatBrowserAmI.device.Tolino.detect() ||
        whatBrowserAmI.device.Kindle.detect();
    };
};