goog.provide( 'whatBrowserAmI.engine.QtWebEngine.is' );
goog.provide( 'whatBrowserAmI.engine.QtWebEngine.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION' );
goog.require( 'whatBrowserAmI.brand.Falkon.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Qt WebEngine
 */

/** @return {boolean} */
whatBrowserAmI.engine.QtWebEngine.is = function(){
    return !!whatBrowserAmI.brand.Falkon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.QtWebEngine.detect = function(){
    if( whatBrowserAmI.engine.QtWebEngine.is() ){
        p_setEngine( ENGINE.Qt_WebEngine, whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION );
        return true;
    };
};
