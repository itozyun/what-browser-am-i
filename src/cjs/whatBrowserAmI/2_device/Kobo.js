goog.provide( 'whatBrowserAmI.device.Kobo.is' );
goog.provide( 'whatBrowserAmI.device.Kobo.detect' );

/*----------------------------------------------------------------------------//
 *  Rakuten Kobo
 *
 *    Mozilla/5.0 (Linux; U; Android 2.0; en-us;) AppleWebKit/533.1 (KHTML, like Gecko) Verson/4.0 Mobile Safari/533.1 (Kobo Touch)
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.device.Kobo = {};

/** @const {boolean} */
whatBrowserAmI.device.Kobo.is = function(){
    return p_hasSubstring( p_strUserAgent, 'Kobo' );
};

/** @return {boolean|void} */
whatBrowserAmI.device.Kobo.detect = function(){
    if( whatBrowserAmI.device.Kobo.is() ){
        p_setDevice( DEVICE.Kobo, 1 );
        p_setEngine( ENGINE.AndroidWebview, 2.2 );
        return true;
    };
};
