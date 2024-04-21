goog.provide( 'allfeatures' );

goog.require( 'whatBrowserAmI.platform.detectAll' );
goog.require( 'whatBrowserAmI.device.detectAll' );
goog.require( 'whatBrowserAmI.engine.detectAll' );
goog.require( 'whatBrowserAmI.brand.detectAll' );
goog.require( 'whatBrowserAmI.base.finalizePlatform' );
goog.require( 'whatBrowserAmI.base.finalizeDevice' );
goog.require( 'whatBrowserAmI.base.finalizeDeviceType' );
goog.require( 'whatBrowserAmI.base.finalizeEngine' );
goog.require( 'whatBrowserAmI.base.finalizeBrand' );
goog.require( 'whatBrowserAmI.base.finalizePcSiteRequested' );

goog.scope(
    function(){
        whatBrowserAmI.platform.detectAll();
        whatBrowserAmI.device.detectAll();
        whatBrowserAmI.engine.detectAll();
        whatBrowserAmI.brand.detectAll();

        whatBrowserAmI.base.finalizePlatform();
        whatBrowserAmI.base.finalizeDevice();
        whatBrowserAmI.base.finalizeDeviceType();
        whatBrowserAmI.base.finalizeEngine();
        whatBrowserAmI.base.finalizeBrand();
        whatBrowserAmI.base.finalizePcSiteRequested();
    }
);
