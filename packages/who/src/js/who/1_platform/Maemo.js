goog.provide( 'who.platform.Maemo.is' );
goog.provide( 'who.platform.Maemo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Maemo
 *
 *    https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference
 *    Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0
 *                 ^^^^^
 */

/** @return {boolean} */
who.platform.Maemo.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, 'Maemo' );
};

/** @return {boolean|void} */
who.platform.Maemo.detect = function(){
    if( who.platform.Maemo.is() ){
        who.base.setPlatform( iAm.EnumPlatform.Maemo );
        return true;
    };
};
