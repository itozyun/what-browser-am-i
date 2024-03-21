goog.provide( 'whatBrowserAmI.brand.Yandex.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Yandex.is' );
goog.provide( 'whatBrowserAmI.brand.Yandex.detect' );

/*----------------------------------------------------------------------------//
 *  Yandex
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Yandex = {};

/** @const {string} */
whatBrowserAmI.brand.Yandex.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'YaBrowser/' );

/** @return {boolean} */
whatBrowserAmI.brand.Yandex.is = function(){
    return !!whatBrowserAmI.brand.Yandex.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Yandex.detect = function(){
    if( whatBrowserAmI.brand.Yandex.is() ){
        p_setBrand( BRAND.Yandex, whatBrowserAmI.brand.Yandex.NAVIGATOR_VERSION );
        return true;
    };
};