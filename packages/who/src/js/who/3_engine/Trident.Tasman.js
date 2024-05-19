goog.provide( 'who.engine.Trident.is' );
goog.provide( 'who.engine.Trident.detect' );
goog.provide( 'who.engine.Trident.IMPLEMENT_VERSION' );
goog.provide( 'who.engine.Trident.NAVIGATOR_VERSION' );

goog.require( 'who.base' );
goog.require( 'who.engine.Presto.is' );
goog.require( 'who.platform.Mac.is' );

/*----------------------------------------------------------------------------//
 *  Trident, TridentMobile, Tasman
 *
 *    https://en.wikipedia.org/wiki/Trident_(software)
 */

/** @return {boolean} */
who.engine.Trident.is = function(){
    return !who.engine.Presto.is() && p_hasDocumentAll // Presto にも docuemnt.all が定義されている
           || !!p_documentMode;                                   // document.all:IE4~10, p_documentMode:IE7~11
};

/** @const {number} */
who.engine.Trident.IMPLEMENT_VERSION =
    p_documentMode        ? p_documentMode :
    window.XMLHttpRequest ? ( document.getElementsByTagName ? 7 : 4 ) :
    document.compatMode   ? 6   :
    (0).toFixed           ? 5.5 :
    window.attachEvent    ? 5   : 4;

/** @const {number} */
who.engine.Trident.NAVIGATOR_VERSION = p_getNumber( p_strAppVersion, 'Trident/' ) + 4;

/** @return {boolean|void} */
who.engine.Trident.detect = function(){
    if( who.engine.Trident.is() ){
        var implementVersion = who.engine.Trident.IMPLEMENT_VERSION;

        if( p_deviceType !== DEVICE_TYPE.PC ){
            p_setEngine( ENGINE.Trident_Mobile, implementVersion );
        } else if( who.platform.Mac.is() ){
            if( 5 <= implementVersion ){
                p_setEngine( ENGINE.Tasman, implementVersion );
            } else {
                p_setEngine( ENGINE.Trident, implementVersion );
            };
            p_setBrand( BRAND.Internet_Explorer_for_Mac, implementVersion );
        } else {
            var navigatorVersion = who.engine.Trident.NAVIGATOR_VERSION;

            p_setEngine( ENGINE.Trident, implementVersion );
            // Modern UI IE 
            // https://stackoverflow.com/questions/8751479/detect-metro-ui-version-of-ie
            if( 10 <= implementVersion && 6.2 <= p_platformVersion && p_platformVersion < 7 ){ // WinNT6.2 = Win8, WinNT6.3 = Win8.1
                if( screenY === 0 && ( innerHeight + 1 ) !== outerHeight ){
                    p_setBrand( BRAND.Modern_IE, implementVersion );
                };
            };
            // Compat Mode IE
            if( 7 <= navigatorVersion && navigatorVersion !== implementVersion ){
                p_setBrand( BRAND.Internet_Explorer, navigatorVersion );
            };
        };
        return true;
    };
};
