goog.provide( 'whatBrowserAmI.platform.WindowsMobile.is' );
goog.provide( 'whatBrowserAmI.platform.WindowsMobile.detect' );

goog.require( 'whatBrowserAmI.brand.Iris.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Windows Mobile
 *
 *    https://en.wikipedia.org/wiki/Internet_Explorer_Mobile
 *      > Internet Explorer Mobile 6 was released as part of Windows Mobile 6.1.4
 *      > ... support for Adobe Flash Lite 3.1
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.WindowsMobile = {};

/** @const {boolean} */
whatBrowserAmI.platform.WindowsMobile.is = function(){
    return p_hasSubstring( p_strUserAgent, 'Windows Mobile;' ) || !!whatBrowserAmI.brand.Iris.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.WindowsMobile.detect = function(){
    if( whatBrowserAmI.platform.WindowsMobile.is() ){
        p_setPlatform( PLATFORM.WindowsMobile, 6.1, DEVICE_TYPE.PDA );
        return true;
    };
};
