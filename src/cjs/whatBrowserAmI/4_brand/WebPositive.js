goog.provide( 'whatBrowserAmI.brand.WebPositive.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.WebPositive.is' );
goog.provide( 'whatBrowserAmI.brand.WebPositive.detect' );

/*----------------------------------------------------------------------------//
 *  WebPositive
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.WebPositive = {};

/** @const {string} */
whatBrowserAmI.brand.WebPositive.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'WebPositive/' );

/** @return {boolean} */
whatBrowserAmI.brand.WebPositive.is = function(){
    return !!whatBrowserAmI.brand.WebPositive.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.WebPositive.detect = function(){
    if( whatBrowserAmI.brand.WebPositive.is() ){
        p_setBrand( BRAND.WebPositive, whatBrowserAmI.brand.WebPositive.NAVIGATOR_VERSION );
        return true;
    };
};