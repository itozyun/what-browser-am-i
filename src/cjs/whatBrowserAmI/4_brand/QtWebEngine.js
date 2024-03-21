goog.provide( 'whatBrowserAmI.brand.QtWebEngine.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.QtWebEngine.is' );
goog.provide( 'whatBrowserAmI.brand.QtWebEngine.detect' );

/*----------------------------------------------------------------------------//
 *  QtWebEngine
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.QtWebEngine = {};

/** @const {string} */
whatBrowserAmI.brand.QtWebEngine.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'QtWebEngine/' );

/** @return {boolean} */
whatBrowserAmI.brand.QtWebEngine.is = function(){
    return !!whatBrowserAmI.brand.QtWebEngine.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.QtWebEngine.detect = function(){
    if( whatBrowserAmI.brand.QtWebEngine.is() ){
        p_setBrand( BRAND.QtWebEngine, whatBrowserAmI.brand.QtWebEngine.NAVIGATOR_VERSION );
        return true;
    };
};