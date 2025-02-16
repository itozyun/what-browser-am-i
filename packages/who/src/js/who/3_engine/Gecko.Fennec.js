goog.provide( 'who.engine.Gecko.IMPLEMENT_VERSION' );
goog.provide( 'who.engine.Gecko.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.Gecko.is' );
goog.provide( 'who.engine.Gecko.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.Trident.is' );
goog.require( 'who.engine.Goanna.is' );
goog.require( 'who.brand.Firefox.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Gecko, Fennec
 */

/** @const {number} */
who.engine.Gecko.IMPLEMENT_VERSION = 0; // TODO

/** @const {string} */
who.engine.Gecko.NAVIGATOR_VERSION =
    p_isGeckoFamily
        ? ( p_getVersionString( p_strUserAgent, 'rv:' ) ||
            p_getVersionString( p_strUserAgent.substr( p_strUserAgent.indexOf( ') Gecko/' ) - 11 ), '; ' ) // for Gecko ~0.8.1
          )
        : '';

/** @return {boolean} */
who.engine.Gecko.is = function(){
    return p_isGeckoFamily && !who.engine.Goanna.is();
};

/** @return {boolean|void} */
who.engine.Gecko.detect = function(){
    if( who.engine.Gecko.is() ){
        p_setEngine(
            p_isAndroidBased() ? EnumEngine.Fennec : EnumEngine.Gecko, // TODO KaiOS
            who.engine.Gecko.NAVIGATOR_VERSION ||
            who.brand.Firefox.NAVIGATOR_VERSION // Android9 + Firefox67.0 + PC_MODE で rv: が存在しない！
        );
        return true;
    };
};
