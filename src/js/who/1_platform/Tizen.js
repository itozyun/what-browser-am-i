goog.provide( 'who.platform.Tizen.NAVIGATOR_VERSION' );
goog.provide( 'who.platform.Tizen.is' );
goog.provide( 'who.platform.Tizen.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.SamsungInternet.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Tizen
 *
 */

/** @const {string} */
who.platform.Tizen.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Tizen ' );

/** @return {boolean} */
who.platform.Tizen.is = function(){
    return !!who.platform.Tizen.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.platform.Tizen.detect = function(){
    if( who.platform.Tizen.is() ){
        who.base.setPlatform( iAm.EnumPlatform.Tizen, who.platform.Tizen.NAVIGATOR_VERSION, iAm.EnumDeviceType.Phone ); // TODO deviceTypeIsTV = true;
        who.base.setEngine( iAm.EnumEngine.Samsung_Internet, who.engine.SamsungInternet.NAVIGATOR_VERSION );
        who.base.setBrand( iAm.EnumBrand.Samsung_Internet, who.engine.SamsungInternet.NAVIGATOR_VERSION );
        return true;
    };
};
