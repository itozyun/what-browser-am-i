goog.provide( 'who.device.PocketBook.is' );
goog.provide( 'who.device.PocketBook.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  PocketBook
 *    https://en.wikipedia.org/wiki/PocketBook_International
 * 
 *  PocketBook User Agents
 *    https://explore.whatismybrowser.com/useragents/explore/operating_platform_string/pocketbook/8
 *      > Mozilla/5.0 (Linux; Android 8.0.0; de_DE) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.105 Mobile Safari/537.36 PocketBook/743C (screen 1872x1404; FW U743c.6.8.1550; LCP)
 *      > Mozilla/5.0 (Linux; Android 4.4.2; PocketBook SURFpad 3 (10,1&quot;)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 OPR/58.8.2878.72999
 * 
 *   https://whatmyuseragent.com/brand/p8/pocketbook
 * 
 *   PocketBook 360 Plus
 *     2011
 * 
 *   PocketBook Pro 912 
 *     2011
 * 
 *   PocketBook Touch
 *     2011
 * 
 *   PocketBook Basic New
 *     2012
 * 
 *   PocketBook Touch HD 3
 *     2019
 * 
 *   PocketBook CAD Reader
 *     2014
 * 
 *   PocketBook CAD Reader Flex
 *     2014
 */


/** @return {boolean} */
who.device.PocketBook.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, ' PocketBook' );
};

/** @return {boolean|void} */
who.device.PocketBook.detect = function(){
    if( who.device.PocketBook.is() ){
        who.base.setDevice( iAm.EnumDevice.PocketBook, undefined, iAm.EnumDeviceType.EInkReader );
        return true;
    };
};
