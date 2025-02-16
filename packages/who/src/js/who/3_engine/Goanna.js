goog.provide( 'who.engine.Goanna.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.Goanna.is' );
goog.provide( 'who.engine.Goanna.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Goanna
 *
 *  PaleMoon 26以降, Gecko 48からフォークした Goanna エンジンを使用する
 */

/**
 * https://developers.whatismybrowser.com/useragents/parse/987005-pale-moon-windows-goanna
 * TODO Goanna/20161201 になっている時がある…
 * @const {string} */
who.engine.Goanna.NAVIGATOR_VERSION = p_isGeckoFamily ? p_getVersionString( p_strUserAgent, 'Goanna/' ) : '';

/** @return {boolean} */
who.engine.Goanna.is = function(){
    return !!who.engine.Goanna.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.Goanna.detect = function(){
    if( who.engine.Goanna.is() ){
        p_setEngine( EnumEngine.Goanna, who.engine.Goanna.NAVIGATOR_VERSION );
        return true;
    };
};