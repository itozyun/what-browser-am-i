goog.provide( 'whatBrowserAmI.engine.Trident.is' );
goog.provide( 'whatBrowserAmI.engine.Trident.detect' );
goog.provide( 'whatBrowserAmI.engine.Trident.IMPLEMENT_VERSION' );
goog.provide( 'whatBrowserAmI.engine.Trident.NAVIGATOR_VERSION' );

goog.require( 'whatBrowserAmI.engine.Presto.is' );
goog.require( 'whatBrowserAmI.platform.Mac.is' );

/*----------------------------------------------------------------------------//
 *  Trident, TridentMobile, Tasman
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.Trident = {};

/** @return {boolean} */
whatBrowserAmI.engine.Trident.is = function(){
    return !whatBrowserAmI.engine.Presto.is() && p_hasDocumentAll // Presto にも docuemnt.all が定義されている
           || !!p_documentMode;                                   // document.all:IE4~10, p_documentMode:IE7~11
};

/** @const {number} */
whatBrowserAmI.engine.Trident.IMPLEMENT_VERSION =
    p_documentMode        ? p_documentMode :
    window.XMLHttpRequest ? ( document.getElementsByTagName ? 7 : 4 ) :
    document.compatMode   ? 6   :
    (0).toFixed           ? 5.5 :
    window.attachEvent    ? 5   : 4;

/** @const {number} */
whatBrowserAmI.engine.Trident.NAVIGATOR_VERSION = p_getNumber( p_strAppVersion, 'Trident/' ) + 4;

/** @return {boolean|void} */
whatBrowserAmI.engine.Trident.detect = function(){
    if( whatBrowserAmI.engine.Trident.is() ){
        var implementVersion = whatBrowserAmI.engine.Trident.IMPLEMENT_VERSION;

        if( p_deviceType !== DEVICE_TYPE.PC ){
            p_setEngine( ENGINE.TridentMobile, implementVersion );
        } else if( whatBrowserAmI.platform.Mac.is() ){
            if( 5 <= implementVersion ){
                p_setEngine( ENGINE.Tasman, implementVersion );
            } else {
                p_setEngine( ENGINE.Trident, implementVersion );
            };
            p_setBrand( BRAND.MacIE, implementVersion );
        } else {
            var navigatorVersion = whatBrowserAmI.engine.Trident.NAVIGATOR_VERSION;

            p_setEngine( ENGINE.Trident, implementVersion );
            // Modern UI IE 
            // https://stackoverflow.com/questions/8751479/detect-metro-ui-version-of-ie
            if( 10 <= implementVersion && 6.2 <= p_platformVersion && p_platformVersion < 7 ){ // WinNT6.2 = Win8, WinNT6.3 = Win8.1
                if( screenY === 0 && ( innerHeight + 1 ) !== outerHeight ){
                    p_setBrand( BRAND.ModernIE, implementVersion );
                };
            };
            // Compat Mode IE
            if( 7 <= navigatorVersion && navigatorVersion !== implementVersion ){
                p_setBrand( BRAND.IECompatMode, navigatorVersion );
            };
        };
        return true;
    };
};
