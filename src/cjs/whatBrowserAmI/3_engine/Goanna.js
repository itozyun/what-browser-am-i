goog.provide( 'whatBrowserAmI.engine.Goanna.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.Goanna.is' );
goog.provide( 'whatBrowserAmI.engine.Goanna.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Goanna
 *
 *  PaleMoon 26以降, Gecko 48からフォークした Goanna エンジンを使用する
 */

/**
 * https://developers.whatismybrowser.com/useragents/parse/987005-pale-moon-windows-goanna
 * TODO Goanna/20161201 になっている時がある…
 * @const {string} */
whatBrowserAmI.engine.Goanna.NAVIGATOR_VERSION = p_isGeckoFamily ? p_getVersionString( p_strUserAgent, 'Goanna/' ) : '';

/** @return {boolean} */
whatBrowserAmI.engine.Goanna.is = function(){
    return !!whatBrowserAmI.engine.Goanna.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.Goanna.detect = function(){
    if( whatBrowserAmI.engine.Goanna.is() ){
        p_setEngine( ENGINE.Goanna, whatBrowserAmI.engine.Goanna.NAVIGATOR_VERSION );
        return true;
    };
};