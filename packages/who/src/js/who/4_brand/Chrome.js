goog.provide( 'who.brand.Chrome.is' );
goog.provide( 'who.brand.Chrome.detect' );
goog.provide( 'who.brand.Chrome.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Chrome.CRIOS_NAVIGATOR_VERSION' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Chrome
 */

/**
 * iOS + Chrome
 * @const {string} */
who.brand.Chrome.CRIOS_NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'CriOS/' );

/** @const {string} */
who.brand.Chrome.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strAppVersion, 'Chrome/' );

/**
 * @package
 * @return {boolean} */
who.brand.Chrome.is = function(){
    return !!who.brand.Chrome.CRIOS_NAVIGATOR_VERSION ||
           !!who.brand.Chrome.NAVIGATOR_VERSION || _isChromeFamily();
};

/**
 * @private
 * @return {boolean}
 */
function _isChromeFamily(){
    return who.result.engineName === iAm.EnumEngine.Chromium || who.result.engineName === iAm.EnumEngine.Chromium_Mobile ||
           who.result.engineName === iAm.EnumEngine.Android_WebView && who.util.conpareVersion( 5, who.result.engineVersion ) < 0;
};

/** @return {boolean|void} */
who.brand.Chrome.detect = function(){
    if( who.brand.Chrome.is() ){
        who.base.setBrand(
            iAm.EnumBrand.Chrome,
            _isChromeFamily()
                ? who.result.engineVersion
                : who.brand.Chrome.NAVIGATOR_VERSION || who.brand.Chrome.CRIOS_NAVIGATOR_VERSION
        );
        return true;
    };
};
