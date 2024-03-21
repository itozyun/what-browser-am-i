goog.provide( 'whatBrowserAmI.brand.Safari.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Safari.is' );
goog.provide( 'whatBrowserAmI.brand.Safari.detect' );

/*----------------------------------------------------------------------------//
 *  Safari
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Safari = {};

/** @const {string} */
whatBrowserAmI.brand.Safari.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Safari/' );

/** @return {boolean} */
whatBrowserAmI.brand.Safari.is = function(){
    return !!whatBrowserAmI.brand.Safari.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Safari.detect = function(){
    if( whatBrowserAmI.brand.Safari.is() ){
        p_setBrand( BRAND.Safari, whatBrowserAmI.brand.Safari.NAVIGATOR_VERSION );
        return true;
    };
};