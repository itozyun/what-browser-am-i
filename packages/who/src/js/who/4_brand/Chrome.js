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
who.brand.Chrome.CRIOS_NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'CriOS/' );

/** @const {string} */
who.brand.Chrome.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Chrome/' );

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
    return p_engineName === ENGINE.Chromium || p_engineName === ENGINE.Chromium_Mobile ||
           p_engineName === ENGINE.Android_WebView && p_conpareVersion( 5, p_engineVersion ) < 0;
};

/** @return {boolean|void} */
who.brand.Chrome.detect = function(){
    if( who.brand.Chrome.is() ){
        p_setBrand(
            BRAND.Chrome,
            _isChromeFamily()
                ? p_engineVersion
                : who.brand.Chrome.NAVIGATOR_VERSION || who.brand.Chrome.CRIOS_NAVIGATOR_VERSION
        );
        return true;
    };
};
