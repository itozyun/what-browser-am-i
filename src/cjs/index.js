goog.provide( 'entry' );

goog.require( 'whatBrowserAmI.platform.detectAll' );
goog.require( 'whatBrowserAmI.engine.detectAll' );
// goog.require( 'whatBrowserAmI.brand.detectAll' );
goog.require( 'whatBrowserAmI.base.finalizePlatform' );
goog.require( 'whatBrowserAmI.base.finalizeEngine' );
// goog.require( 'whatBrowserAmI.base.finalizeBrand' );

goog.scope(
    function(){
        whatBrowserAmI.platform.detectAll();
        whatBrowserAmI.engine.detectAll();

        whatBrowserAmI.base.finalizePlatform();
        whatBrowserAmI.base.finalizeEngine();
    }
);