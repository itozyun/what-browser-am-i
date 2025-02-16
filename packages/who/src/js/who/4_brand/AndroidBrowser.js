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
    return who.result.engineName === iAm.EnumEngine.Android_WebView && who.util.conpareVersion( who.result.engineVersion, 5 ) < 0;
};

/** @return {boolean|void} */
who.brand.AndroidBrowser.detect = function(){
    if( who.brand.AndroidBrowser.is() ){
        who.base.setBrand( iAm.EnumBrand.Android_Browser, who.result.engineVersion );
        return true;
    };
};