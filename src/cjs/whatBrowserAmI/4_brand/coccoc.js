goog.provide( 'whatBrowserAmI.brand.coccoc.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.coccoc.is' );
goog.provide( 'whatBrowserAmI.brand.coccoc.detect' );

/*----------------------------------------------------------------------------//
 *  coccoc
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.coccoc = {};

/** @const {string} */
whatBrowserAmI.brand.coccoc.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'coc_coc_browser/' );

/** @return {boolean} */
whatBrowserAmI.brand.coccoc.is = function(){
    return !!whatBrowserAmI.brand.coccoc.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.coccoc.detect = function(){
    if( whatBrowserAmI.brand.coccoc.is() ){
        p_setBrand( BRAND.coccoc, whatBrowserAmI.brand.coccoc.NAVIGATOR_VERSION );
        return true;
    };
};