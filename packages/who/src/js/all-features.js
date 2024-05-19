goog.provide( 'allfeatures' );

goog.require( 'who.platform.detectAll' );
goog.require( 'who.device.detectAll' );
goog.require( 'who.engine.detectAll' );
goog.require( 'who.brand.detectAll' );
goog.require( 'who.base.finalizePlatform' );
goog.require( 'who.base.finalizeDevice' );
goog.require( 'who.base.finalizeDeviceType' );
goog.require( 'who.base.finalizeEngine' );
goog.require( 'who.base.finalizeBrand' );
goog.require( 'who.base.finalizePcSiteRequested' );

goog.scope(
    function(){
        who.platform.detectAll();
        who.device.detectAll();
        who.engine.detectAll();
        who.brand.detectAll();

        who.base.finalizePlatform();
        who.base.finalizeDevice();
        who.base.finalizeDeviceType();
        who.base.finalizeEngine();
        who.base.finalizeBrand();
        who.base.finalizePcSiteRequested();
    }
);
