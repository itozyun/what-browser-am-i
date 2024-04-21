goog.provide( 'whatBrowserAmI.brand.QQ.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.QQ.is' );
goog.provide( 'whatBrowserAmI.brand.QQ.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  QQ
 */

/** @const {string} */
whatBrowserAmI.brand.QQ.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'QQBrowser/' );

/** @return {boolean} */
whatBrowserAmI.brand.QQ.is = function(){
    return !!whatBrowserAmI.brand.QQ.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.QQ.detect = function(){
    if( whatBrowserAmI.brand.QQ.is() ){
        p_setBrand( BRAND.QQ, whatBrowserAmI.brand.QQ.NAVIGATOR_VERSION );
        return true;
    };
};