goog.provide( 'who.device.Kobo.is' );
goog.provide( 'who.device.Kobo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Rakuten Kobo
 *
 *    Mozilla/5.0 (Linux; U; Android 2.0; en-us;) AppleWebKit/533.1 (KHTML, like Gecko) Verson/4.0 Mobile Safari/533.1 (Kobo Touch)
 */

/** @return {boolean} */
who.device.Kobo.is = function(){
    return p_hasSubstring( p_strUserAgent, 'Kobo' );
};

/** @return {boolean|void} */
who.device.Kobo.detect = function(){
    if( who.device.Kobo.is() ){
        p_setDevice( DEVICE.Kobo, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
