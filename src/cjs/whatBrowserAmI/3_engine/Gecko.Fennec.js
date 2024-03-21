goog.provide( 'whatBrowserAmI.engine.Gecko.IMPLEMENT_VERSION' );
goog.provide( 'whatBrowserAmI.engine.Gecko.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.Gecko.is' );
goog.provide( 'whatBrowserAmI.engine.Gecko.detect' );

goog.require( 'whatBrowserAmI.engine.Trident.is' );
goog.require( 'whatBrowserAmI.engine.Goanna.is' );
goog.require( 'whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Gecko, Fennec
 */

/** @const {number} */
whatBrowserAmI.engine.Gecko.IMPLEMENT_VERSION = 0; // TODO

/** @const {string} */
whatBrowserAmI.engine.Gecko.NAVIGATOR_VERSION =
    p_isGeckoFamily &&
    ( p_getVersionString( p_strUserAgent, 'rv:' ) ||
      p_getVersionString( p_strUserAgent.substr( p_strUserAgent.indexOf( ') Gecko/' ) - 11 ), '; ' ) // for Gecko ~0.8.1
    );

/** @return {boolean} */
whatBrowserAmI.engine.Gecko.is = function(){
    return p_isGeckoFamily && !whatBrowserAmI.engine.Goanna.is();
};

/** @return {boolean|void} */
whatBrowserAmI.engine.Gecko.detect = function(){
    if( whatBrowserAmI.engine.Gecko.is() ){
        p_setEngine(
            p_isAndroidBased() ? ENGINE.Fennec : ENGINE.Gecko, // TODO KaiOS
            whatBrowserAmI.engine.Gecko.NAVIGATOR_VERSION ||
            whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION // Android9 + Firefox67.0 + PC_MODE で rv: が存在しない！
        );
        return true;
    };
};
