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
    who.env.isGeckoFamily
        ? ( who.util.getVersionString( who.env.strUserAgent, 'rv:' ) ||
            who.util.getVersionString( who.env.strUserAgent.substr( who.env.strUserAgent.indexOf( ') Gecko/' ) - 11 ), '; ' ) // for Gecko ~0.8.1
          )
        : '';

/** @return {boolean} */
who.engine.Gecko.is = function(){
    return who.env.isGeckoFamily && !who.engine.Goanna.is();
};

/** @return {boolean|void} */
who.engine.Gecko.detect = function(){
    if( who.engine.Gecko.is() ){
        who.base.setEngine(
            who.util.isAndroidBased() ? iAm.EnumEngine.Fennec : iAm.EnumEngine.Gecko, // TODO KaiOS
            who.engine.Gecko.NAVIGATOR_VERSION ||
            who.brand.Firefox.NAVIGATOR_VERSION // Android9 + Firefox67.0 + PC_MODE で rv: が存在しない！
        );
        return true;
    };
};
