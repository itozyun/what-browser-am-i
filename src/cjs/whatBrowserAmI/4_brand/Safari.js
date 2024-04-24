goog.provide( 'whatBrowserAmI.brand.Safari.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Safari.is' );
goog.provide( 'whatBrowserAmI.brand.Safari.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Safari
 */

/** @const {string} */
whatBrowserAmI.brand.Safari.NAVIGATOR_VERSION = p_Version.NAVIGATOR_VERSION;

/** @return {boolean} */
whatBrowserAmI.brand.Safari.is = function(){
    return ( p_engineName === ENGINE.WebKit || p_engineName === ENGINE.Safari_Mobile || p_engineName === ENGINE.iOS_WebView ) &&
           p_hasSubstring( p_strUserAgent, 'Safari/' ) || !!p_Version.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Safari.detect = function(){
    if( whatBrowserAmI.brand.Safari.is() ){
        p_setBrand( BRAND.Safari, whatBrowserAmI.brand.Safari.NAVIGATOR_VERSION || _webKitVersionToSafariVersion( p_numberWebKit ) );
        
        return true;
    };
};

/**
 * @private
 * @param {number} versionWebKit 
 * @return {number}
 */
function _webKitVersionToSafariVersion( versionWebKit ){
    return versionWebKit <   73    ? 0.8 :
           versionWebKit <   85    ? 0.9 :
           versionWebKit <  100    ? 1 :
           versionWebKit <  125    ? 1.1 :
           versionWebKit <  312    ? 1.2 :
           versionWebKit <  412    ? 1.3 :
           versionWebKit <= 419.3  ? 2 :
           versionWebKit <= 525.13 ? 3 :
           versionWebKit <= 525.25 ? 3.1 : 3.2;
};
