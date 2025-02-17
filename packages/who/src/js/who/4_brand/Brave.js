goog.provide( 'who.brand.Brave.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Brave.is' );
goog.provide( 'who.brand.Brave.detect' );

goog.require( 'core.hasProperty' );
goog.require( 'who.base' );
goog.require( 'who.brand.Chrome.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Brave
 */

/** @const {string} */
who.brand.Brave.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Brave/' );

/**
 * @package
 * @return {boolean} */
who.brand.Brave.is = function(){
    return !!who.brand.Brave.NAVIGATOR_VERSION || who.util.hasSubstring( who.env.strUserAgent, ' Brave ' )
               || who.result.engineName === iAm.EnumEngine.iOS_WebView && core.hasProperty( window, 'sameOrigin' );
};

/** @return {boolean|void} */
who.brand.Brave.detect = function(){
    if( who.brand.Brave.is() ){
        who.base.setBrand(
            iAm.EnumBrand.Brave,
            who.brand.Brave.NAVIGATOR_VERSION ||
                (
                    who.result.engineName === iAm.EnumEngine.Chromium || who.result.engineName === iAm.EnumEngine.Chromium_Mobile
                        ? who.brand.Chrome.NAVIGATOR_VERSION
                        : undefined
                )
        );
        return true;
    };
};
