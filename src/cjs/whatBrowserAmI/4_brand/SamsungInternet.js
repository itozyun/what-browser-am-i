goog.provide( 'whatBrowserAmI.brand.SamsungInternet.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.SamsungInternet.is' );
goog.provide( 'whatBrowserAmI.brand.SamsungInternet.detect' );

/*----------------------------------------------------------------------------//
 *  SamsungInternet
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.SamsungInternet = {};

/** @return {boolean} */
whatBrowserAmI.brand.SamsungInternet.is = function(){
    return p_engineName === ENGINE.SamsungInternet;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.SamsungInternet.detect = function(){
    if( whatBrowserAmI.brand.SamsungInternet.is() ){
        p_setBrand( BRAND.SamsungInternet, p_engineVersion );
        return true;
    };
};