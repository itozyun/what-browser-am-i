goog.provide( 'who.brand.Brave.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Brave.is' );
goog.provide( 'who.brand.Brave.detect' );

goog.require( 'who.base' );
goog.require( 'who.brand.Chrome.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Brave
 */

/** @const {string} */
who.brand.Brave.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Brave/' );

/**
 * @package
 * @return {boolean} */
who.brand.Brave.is = function(){
    return !!who.brand.Brave.NAVIGATOR_VERSION || p_hasSubstring( p_strUserAgent, ' Brave ' )
               || p_engineName === ENGINE.iOS_WebView && !!p_inObject( 'sameOrigin', window );
};

/** @return {boolean|void} */
who.brand.Brave.detect = function(){
    if( who.brand.Brave.is() ){
        p_setBrand(
            BRAND.Brave,
            who.brand.Brave.NAVIGATOR_VERSION ||
                (
                    p_engineName === ENGINE.Chromium || p_engineName === ENGINE.Chromium_Mobile
                        ? who.brand.Chrome.NAVIGATOR_VERSION
                        : undefined
                )
        );
        return true;
    };
};
