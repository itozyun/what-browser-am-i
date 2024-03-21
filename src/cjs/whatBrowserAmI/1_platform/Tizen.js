goog.provide( 'whatBrowserAmI.platform.Tizen.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.platform.Tizen.is' );
goog.provide( 'whatBrowserAmI.platform.Tizen.detect' );

goog.require( 'whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Tizen
 *
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.Tizen = {};

/** @const {string} */
whatBrowserAmI.platform.Tizen.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Tizen ' );

/** @const {boolean} */
whatBrowserAmI.platform.Tizen.is = function(){
    return !!whatBrowserAmI.platform.Tizen.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.Tizen.detect = function(){
    if( whatBrowserAmI.platform.Tizen.is() ){
        p_setPlatform( PLATFORM.Tizen, whatBrowserAmI.platform.Tizen.NAVIGATOR_VERSION, DEVICE_TYPE.Phone ); // TODO deviceTypeIsTV = true;
        p_setEngine( ENGINE.SamsungInternet, whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION );
        p_setBrand( BRAND.SamsungInternet, whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION );
        return true;
    };
};
