goog.provide( 'who.platform.WindowsMobile.is' );
goog.provide( 'who.platform.WindowsMobile.detect' );

goog.require( 'who.base' );
goog.require( 'who.brand.Iris.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Windows Mobile
 *
 *    https://en.wikipedia.org/wiki/Internet_Explorer_Mobile
 *      > Internet Explorer Mobile 6 was released as part of Windows Mobile 6.1.4
 *      > ... support for Adobe Flash Lite 3.1
 */

/** @return {boolean} */
who.platform.WindowsMobile.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, 'Windows Mobile;' ) || !!who.brand.Iris.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.platform.WindowsMobile.detect = function(){
    if( who.platform.WindowsMobile.is() ){
        who.base.setPlatform( iAm.EnumPlatform.Windows_Mobile, 6.1, iAm.EnumDeviceType.PDA );
        return true;
    };
};
