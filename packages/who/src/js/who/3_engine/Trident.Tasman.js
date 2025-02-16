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
    return !who.engine.Presto.is() && who.env.hasDocumentAll // Presto にも docuemnt.all が定義されている
           || !!who.env.documentMode;                                   // document.all:IE4~10, who.env.documentMode:IE7~11
};

/** @const {number} */
who.engine.Trident.IMPLEMENT_VERSION =
    who.env.documentMode  ? /** @type {number} */ (who.env.documentMode) :
    window.XMLHttpRequest ? ( document.getElementsByTagName ? 7 : 4 ) :
    document.compatMode   ? 6   :
    (0).toFixed           ? 5.5 :
    window.attachEvent    ? 5   : 4;

/** @const {number} */
who.engine.Trident.NAVIGATOR_VERSION = who.util.getNumber( who.env.strAppVersion, 'Trident/' ) + 4;

/** @return {boolean|void} */
who.engine.Trident.detect = function(){
    if( who.engine.Trident.is() ){
        var implementVersion = who.engine.Trident.IMPLEMENT_VERSION;

        if( who.result.deviceType !== iAm.EnumDeviceType.PC ){
            who.base.setEngine( iAm.EnumEngine.Trident_Mobile, implementVersion );
        } else if( who.platform.Mac.is() ){
            if( 5 <= implementVersion ){
                who.base.setEngine( iAm.EnumEngine.Tasman, implementVersion );
            } else {
                who.base.setEngine( iAm.EnumEngine.Trident, implementVersion );
            };
            who.base.setBrand( iAm.EnumBrand.Internet_Explorer_for_Mac, implementVersion );
        } else {
            var navigatorVersion = who.engine.Trident.NAVIGATOR_VERSION;

            who.base.setEngine( iAm.EnumEngine.Trident, implementVersion );
            // Modern UI IE 
            // https://stackoverflow.com/questions/8751479/detect-metro-ui-version-of-ie
            if( 10 <= implementVersion && 6.2 <= who.result.platformVersion && who.result.platformVersion < 7 ){ // WinNT6.2 = Win8, WinNT6.3 = Win8.1
                if( screenY === 0 && ( innerHeight + 1 ) !== outerHeight ){
                    who.base.setBrand( iAm.EnumBrand.Modern_IE, implementVersion );
                };
            };
            // Compat Mode IE
            if( 7 <= navigatorVersion && navigatorVersion !== implementVersion ){
                who.base.setBrand( iAm.EnumBrand.Internet_Explorer, navigatorVersion );
            };
        };
        return true;
    };
};
