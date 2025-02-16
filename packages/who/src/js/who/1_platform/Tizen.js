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
who.platform.Tizen.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Tizen ' );

/** @return {boolean} */
who.platform.Tizen.is = function(){
    return !!who.platform.Tizen.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.platform.Tizen.detect = function(){
    if( who.platform.Tizen.is() ){
        p_setPlatform( EnumPlatform.Tizen, who.platform.Tizen.NAVIGATOR_VERSION, EnumDeviceType.PHONE ); // TODO deviceTypeIsTV = true;
        p_setEngine( EnumEngine.Samsung_Internet, who.engine.SamsungInternet.NAVIGATOR_VERSION );
        p_setBrand( EnumBrand.Samsung_Internet, who.engine.SamsungInternet.NAVIGATOR_VERSION );
        return true;
    };
};
