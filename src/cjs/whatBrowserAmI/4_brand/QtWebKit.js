goog.provide( 'whatBrowserAmI.brand.QtWebKit.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.QtWebKit.is' );
goog.provide( 'whatBrowserAmI.brand.QtWebKit.detect' );

/*----------------------------------------------------------------------------//
 *  QtWebKit
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.QtWebKit = {};

/** @const {string} */
whatBrowserAmI.brand.QtWebKit.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'QtWebKit/' );

/** @return {boolean} */
whatBrowserAmI.brand.QtWebKit.is = function(){
    return !!whatBrowserAmI.brand.QtWebKit.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.QtWebKit.detect = function(){
    if( whatBrowserAmI.brand.QtWebKit.is() ){
        p_setBrand( BRAND.QtWebKit, whatBrowserAmI.brand.QtWebKit.NAVIGATOR_VERSION );
        return true;
    };
};