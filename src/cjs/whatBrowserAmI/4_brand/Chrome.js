goog.provide( 'whatBrowserAmI.brand.Chrome.is' );
goog.provide( 'whatBrowserAmI.brand.Chrome.detect' );
goog.provide( 'whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Chrome.CRIOS_NAVIGATOR_VERSION' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Chrome
 */

/**
 * iOS + Chrome
 * @const {string} */
whatBrowserAmI.brand.Chrome.CRIOS_NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'CriOS/' );

/** @const {string} */
whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Chrome/' );

/**
 * @package
 * @return {boolean} */
whatBrowserAmI.brand.Chrome.is = function(){
    return !!whatBrowserAmI.brand.Chrome.CRIOS_NAVIGATOR_VERSION ||
           !!whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION || _isChromeFamily();
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
whatBrowserAmI.brand.Chrome.detect = function(){
    if( whatBrowserAmI.brand.Chrome.is() ){
        p_setBrand(
            BRAND.Chrome,
            _isChromeFamily()
                ? p_engineVersion
                : whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION || whatBrowserAmI.brand.Chrome.CRIOS_NAVIGATOR_VERSION
        );
        return true;
    };
};
