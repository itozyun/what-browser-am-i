goog.provide( 'who.brand.Yandex.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Yandex.is' );
goog.provide( 'who.brand.Yandex.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Yandex
 */

/** @const {string} */
who.brand.Yandex.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'YaBrowser/' );

/** @return {boolean} */
who.brand.Yandex.is = function(){
    return !!who.brand.Yandex.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Yandex.detect = function(){
    if( who.brand.Yandex.is() ){
        who.base.setBrand( iAm.EnumBrand.Yandex, who.brand.Yandex.NAVIGATOR_VERSION );
        return true;
    };
};