goog.provide( 'whatBrowserAmI.brand.DuckDuckGo.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.DuckDuckGo.is' );
goog.provide( 'whatBrowserAmI.brand.DuckDuckGo.detect' );

/*----------------------------------------------------------------------------//
 *  DuckDuckGo
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.DuckDuckGo = {};

/** @const {string} */
whatBrowserAmI.brand.DuckDuckGo.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'DuckDuckGo/' );

/** @return {boolean} */
whatBrowserAmI.brand.DuckDuckGo.is = function(){
    return !!whatBrowserAmI.brand.DuckDuckGo.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.DuckDuckGo.detect = function(){
    if( whatBrowserAmI.brand.DuckDuckGo.is() ){
        p_setBrand( BRAND.DuckDuckGo, whatBrowserAmI.brand.DuckDuckGo.NAVIGATOR_VERSION );
        return true;
    };
};