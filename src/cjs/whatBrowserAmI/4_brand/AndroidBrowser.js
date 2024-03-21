goog.provide( 'whatBrowserAmI.brand.AndroidBrowser.is' );
goog.provide( 'whatBrowserAmI.brand.AndroidBrowser.detect' );

/*----------------------------------------------------------------------------//
 *  AndroidBrowser
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.AndroidBrowser = {};

/** @return {boolean} */
whatBrowserAmI.brand.AndroidBrowser.is = function(){
    return p_engineName === ENGINE.AndroidWebview && 0 < p_conpareVersion( p_engineVersion, 5 );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.AndroidBrowser.detect = function(){
    if( whatBrowserAmI.brand.AndroidBrowser.is() ){
        p_setBrand( BRAND.AndroidBrowser, p_engineVersion );
        return true;
    };
};