goog.provide( 'whatBrowserAmI.engine.QtWebEngine.is' );
goog.provide( 'whatBrowserAmI.engine.QtWebEngine.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION' );
goog.require( 'whatBrowserAmI.brand.Falkon.NAVIGATOR_VERSION' );
goog.require( 'whatBrowserAmI.brand.Otter.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Qt WebEngine
 *
 *    http://vega.pgw.jp/~kabe/WWW/browsers/falkon31-win.html
 */

/**
 * @private
 * @const {string} private browse only
 */
whatBrowserAmI.engine.QtWebEngine.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'QtWebEngine/' );

/** @return {boolean} */
whatBrowserAmI.engine.QtWebEngine.is = function(){
    return !!whatBrowserAmI.brand.Falkon.NAVIGATOR_VERSION || !!whatBrowserAmI.brand.Otter.NAVIGATOR_VERSION || !!whatBrowserAmI.engine.QtWebEngine.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.QtWebEngine.detect = function(){
    if( whatBrowserAmI.engine.QtWebEngine.is() ){
        p_setEngine( ENGINE.Qt_WebEngine, whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION );
        return true;
    };
};
