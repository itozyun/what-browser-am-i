goog.provide( 'whatBrowserAmI.brand.SamsungInternet.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.SamsungInternet.is' );
goog.provide( 'whatBrowserAmI.brand.SamsungInternet.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  SamsungInternet
 */

/**
 * @package
 * @return {boolean} */
whatBrowserAmI.brand.SamsungInternet.is = function(){
    return p_engineName === ENGINE.Samsung_Internet;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.SamsungInternet.detect = function(){
    if( whatBrowserAmI.brand.SamsungInternet.is() ){
        p_setBrand( BRAND.Samsung_Internet, p_engineVersion );
        return true;
    };
};