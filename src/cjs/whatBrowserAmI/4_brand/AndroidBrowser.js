goog.provide( 'whatBrowserAmI.brand.AndroidBrowser.is' );
goog.provide( 'whatBrowserAmI.brand.AndroidBrowser.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  AndroidBrowser
 */

/**
 * @package
 * @return {boolean} */
whatBrowserAmI.brand.AndroidBrowser.is = function(){
    return p_engineName === ENGINE.AndroidWebView && p_conpareVersion( p_engineVersion, 5 ) < 0;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.AndroidBrowser.detect = function(){
    if( whatBrowserAmI.brand.AndroidBrowser.is() ){
        p_setBrand( BRAND.AndroidBrowser, p_engineVersion );
        return true;
    };
};