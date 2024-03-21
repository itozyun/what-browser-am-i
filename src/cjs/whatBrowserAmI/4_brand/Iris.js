goog.provide( 'whatBrowserAmI.brand.Iris.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Iris.is' );
goog.provide( 'whatBrowserAmI.brand.Iris.detect' );

/*----------------------------------------------------------------------------//
 *  Iris
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Iris = {};

/**
 * http://archive.is/0trve
 * Mozilla/5.0 (Windows NT; U; en) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Iris/1.1.7 Safari/525.20
 * @const {string} */
whatBrowserAmI.brand.Iris.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent.toLowerCase(), 'iris' );

/** @const {boolean} */
whatBrowserAmI.brand.Iris.is = function(){
    return !!whatBrowserAmI.brand.Iris.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Iris.detect = function(){
    if( whatBrowserAmI.brand.Iris.is() ){
        p_setBrand( BRAND.Iris, whatBrowserAmI.brand.Iris.NAVIGATOR_VERSION );
        return true;
    };
};
