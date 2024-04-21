goog.provide( 'whatBrowserAmI.device.Kobo.is' );
goog.provide( 'whatBrowserAmI.device.Kobo.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Rakuten Kobo
 *
 *    Mozilla/5.0 (Linux; U; Android 2.0; en-us;) AppleWebKit/533.1 (KHTML, like Gecko) Verson/4.0 Mobile Safari/533.1 (Kobo Touch)
 */

/** @return {boolean} */
whatBrowserAmI.device.Kobo.is = function(){
    return p_hasSubstring( p_strUserAgent, 'Kobo' );
};

/** @return {boolean|void} */
whatBrowserAmI.device.Kobo.detect = function(){
    if( whatBrowserAmI.device.Kobo.is() ){
        p_setDevice( DEVICE.Kobo, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
