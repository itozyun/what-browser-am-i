goog.provide( 'whatBrowserAmI.brand.Maxthon.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Maxthon.is' );
goog.provide( 'whatBrowserAmI.brand.Maxthon.detect' );

/*----------------------------------------------------------------------------//
 *  Maxthon
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Maxthon = {};

/** @const {string} */
whatBrowserAmI.brand.Maxthon.NAVIGATOR_VERSION =
    p_getVersionString( p_strAppVersion, 'Maxthon/' ) ||
    p_getVersionString( p_strAppVersion, 'Maxthon ' ) ||
    p_getVersionString( p_strAppVersion, 'MXiOS/'   );

/** @return {boolean} */
whatBrowserAmI.brand.Maxthon.is = function(){
    return !!whatBrowserAmI.brand.Maxthon.NAVIGATOR_VERSION || p_hasSubstring( p_strAppVersion, 'Maxthon' );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Maxthon.detect = function(){
    if( whatBrowserAmI.brand.Maxthon.is() ){
        p_setBrand( BRAND.Maxthon, whatBrowserAmI.brand.Maxthon.NAVIGATOR_VERSION );
        return true;
    };
};