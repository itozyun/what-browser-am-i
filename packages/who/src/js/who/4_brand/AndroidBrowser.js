goog.provide( 'who.brand.AndroidBrowser.is' );
goog.provide( 'who.brand.AndroidBrowser.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  AndroidBrowser
 */

/**
 * @package
 * @return {boolean} */
who.brand.AndroidBrowser.is = function(){
    return p_engineName === ENGINE.Android_WebView && p_conpareVersion( p_engineVersion, 5 ) < 0;
};

/** @return {boolean|void} */
who.brand.AndroidBrowser.detect = function(){
    if( who.brand.AndroidBrowser.is() ){
        p_setBrand( BRAND.Android_Browser, p_engineVersion );
        return true;
    };
};