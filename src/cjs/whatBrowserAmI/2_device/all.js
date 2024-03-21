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

goog.require( 'whatBrowserAmI.device' );
goog.require( 'whatBrowserAmI.device.BOOX.is' );
goog.require( 'whatBrowserAmI.device.Kobo.is' );
goog.require( 'whatBrowserAmI.device.Nook.is' );
goog.require( 'whatBrowserAmI.device.PocketBook.is' );
goog.require( 'whatBrowserAmI.device.SonyReader.is' );
goog.require( 'whatBrowserAmI.device.Kindle.is' );

/** @return {boolean} */
whatBrowserAmI.device.isEinkAndroid = function(){
    return whatBrowserAmI.device.BOOX.is() ||
           whatBrowserAmI.device.Kobo.is() ||
           whatBrowserAmI.device.Nook.is() ||
           whatBrowserAmI.device.PocketBook.is() ||
           whatBrowserAmI.device.SonyReader.is() ||
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
    
};