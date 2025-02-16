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
    return who.util.hasSubstring( who.env.strUserAgent, 'Kobo' );
};

/** @return {boolean|void} */
who.device.Kobo.detect = function(){
    if( who.device.Kobo.is() ){
        who.base.setDevice( iAm.EnumDevice.Kobo, undefined, iAm.EnumDeviceType.EINK_READER );
        return true;
    };
};
