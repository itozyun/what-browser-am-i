goog.provide( 'who.brand.Safari.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Safari.is' );
goog.provide( 'who.brand.Safari.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Safari
 */

/** @const {string} */
who.brand.Safari.NAVIGATOR_VERSION = who.env.Something.NAVIGATOR_VERSION;

/** @return {boolean} */
who.brand.Safari.is = function(){
    return ( who.result.engineName === iAm.EnumEngine.WebKit || who.result.engineName === iAm.EnumEngine.Safari_Mobile || who.result.engineName === iAm.EnumEngine.iOS_WebView ) &&
           who.util.hasSubstring( who.env.strUserAgent, 'Safari/' ) || !!who.env.Something.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Safari.detect = function(){
    if( who.brand.Safari.is() ){
        who.base.setBrand( iAm.EnumBrand.Safari, who.brand.Safari.NAVIGATOR_VERSION || _webKitVersionToSafariVersion( who.env.numberWebKit ) );
        
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
