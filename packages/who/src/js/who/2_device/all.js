/**
 * https://en.wikipedia.org/wiki/Comparison_of_e-readers
 * 
 * List of Android smartphones
 * https://en.wikipedia.org/wiki/List_of_Android_smartphones#N
 * 
 */
goog.provide( 'who.device.isEinkAndroid' );
goog.provide( 'who.device.isEinkLinux' );
goog.provide( 'who.device.isEink' );
goog.provide( 'who.device.detectAll' );

goog.require( 'who.device.BOOX.is' );
goog.require( 'who.device.Cybook.is' );
goog.require( 'who.device.eClicto.is' );
goog.require( 'who.device.Fidibook.is' );
goog.require( 'who.device.Hisense.is' );
goog.require( 'who.device.icarus.is' );
goog.require( 'who.device.Kobo.is' );
goog.require( 'who.device.Likebook.is' );
goog.require( 'who.device.Manta.is' );
goog.require( 'who.device.Movistar.is' );
goog.require( 'who.device.Nook.is' );
goog.require( 'who.device.PocketBook.is' );
goog.require( 'who.device.SonyReader.is' );
goog.require( 'who.device.Tolino.is' );
goog.require( 'who.device.Kindle.is' );

goog.require( 'who.device.AppleSmartDevice.detect' );
goog.require( 'who.device.BOOX.detect' );
goog.require( 'who.device.Cybook.detect' );
goog.require( 'who.device.eClicto.detect' );
goog.require( 'who.device.Fidibook.detect' );
goog.require( 'who.device.FireTV.detect' );
goog.require( 'who.device.Hisense.detect' );
goog.require( 'who.device.icarus.detect' );
goog.require( 'who.device.Kindle.detect' );
goog.require( 'who.device.KindleFire.detect' );
goog.require( 'who.device.Kobo.detect' );
goog.require( 'who.device.Likebook.detect' );
goog.require( 'who.device.Manta.detect' );
goog.require( 'who.device.Movistar.detect' );
goog.require( 'who.device.Nook.detect' );
goog.require( 'who.device.PocketBook.detect' );
goog.require( 'who.device.SonyReader.detect' );
goog.require( 'who.device.Tolino.detect' );

/**
 * @package
 * @return {boolean} */
who.device.isEinkAndroidWithoutKindle = function(){
    return who.device.BOOX.is() ||
           who.device.Cybook.is() ||
           who.device.eClicto.is() ||
           who.device.Fidibook.is() ||
           who.device.Hisense.is() ||
           who.device.icarus.is() ||
           who.device.Kobo.is() ||
           who.device.Likebook.is() ||
           who.device.Manta.is() ||
           who.device.Movistar.is() ||
           who.device.Nook.is() ||
           who.device.PocketBook.is() ||
           who.device.SonyReader.is() ||
           who.device.Tolino.is();
};

/** @return {boolean} */
who.device.isEinkAndroid = function(){
    return who.device.isEinkAndroidWithoutKindle() ||
           who.device.Kindle.is();
};

/** @return {boolean} */
who.device.isEinkLinux = function(){
    return false;
};

/** @return {boolean} */
who.device.isEink = function(){
    return who.device.isEinkAndroid() || who.device.isEinkLinux();
};

who.device.detectAll = function(){
    // Kindle は最後!
    if( !p_deviceName ){
        who.device.AppleSmartDevice.detect() ||
        who.device.BOOX.detect() ||
        who.device.Cybook.detect() ||
        who.device.eClicto.detect() ||
        who.device.Fidibook.detect() ||
        who.device.FireTV.detect() ||
        who.device.Hisense.detect() ||
        who.device.icarus.detect() ||
        who.device.KindleFire.detect() ||
        who.device.Kobo.detect() ||
        who.device.Likebook.detect() ||
        who.device.Manta.detect() ||
        who.device.Movistar.detect() ||
        who.device.Nook.detect() ||
        who.device.PocketBook.detect() ||
        who.device.SonyReader.detect() ||
        who.device.Tolino.detect() ||
        who.device.Kindle.detect();
    };
};