goog.provide( 'whatBrowserAmI.platform.Maemo.is' );
goog.provide( 'whatBrowserAmI.platform.Maemo.detect' );

/*----------------------------------------------------------------------------//
 *  Maemo
 *
 *    https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference
 *    Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0
 *                 ^^^^^
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.Maemo = {};

/** @const {boolean} */
whatBrowserAmI.platform.Maemo.is = function(){
    return p_hasSubstring( p_strUserAgent, 'Maemo' );
};

/** @return {boolean|void} */
whatBrowserAmI.platform.Maemo.detect = function(){
    if( whatBrowserAmI.platform.Maemo.is() ){
        p_setPlatform( PLATFORM.Maemo );
        return true;
    };
};
