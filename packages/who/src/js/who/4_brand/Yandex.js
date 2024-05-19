goog.provide( 'who.brand.Yandex.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Yandex.is' );
goog.provide( 'who.brand.Yandex.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Yandex
 */

/** @const {string} */
who.brand.Yandex.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'YaBrowser/' );

/** @return {boolean} */
who.brand.Yandex.is = function(){
    return !!who.brand.Yandex.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Yandex.detect = function(){
    if( who.brand.Yandex.is() ){
        p_setBrand( BRAND.Yandex, who.brand.Yandex.NAVIGATOR_VERSION );
        return true;
    };
};