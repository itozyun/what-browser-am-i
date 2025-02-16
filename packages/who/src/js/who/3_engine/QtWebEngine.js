goog.provide( 'who.engine.QtWebEngine.is' );
goog.provide( 'who.engine.QtWebEngine.detect' );

goog.require( 'who.base' );
goog.require( 'who.brand.Chrome.NAVIGATOR_VERSION' );
goog.require( 'who.brand.Falkon.NAVIGATOR_VERSION' );
goog.require( 'who.brand.Otter.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Qt WebEngine
 *
 *    http://vega.pgw.jp/~kabe/WWW/browsers/falkon31-win.html
 */

/**
 * @private
 * @const {string} private browse only
 */
who.engine.QtWebEngine.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'QtWebEngine/' );

/** @return {boolean} */
who.engine.QtWebEngine.is = function(){
    return !!who.brand.Falkon.NAVIGATOR_VERSION || !!who.brand.Otter.NAVIGATOR_VERSION || !!who.engine.QtWebEngine.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.QtWebEngine.detect = function(){
    if( who.engine.QtWebEngine.is() ){
        p_setEngine( EnumEngine.Qt_WebEngine, who.brand.Chrome.NAVIGATOR_VERSION );
        return true;
    };
};
