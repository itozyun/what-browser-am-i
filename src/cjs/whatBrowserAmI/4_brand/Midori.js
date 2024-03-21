goog.provide( 'whatBrowserAmI.brand.Midori.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Midori.is' );
goog.provide( 'whatBrowserAmI.brand.Midori.detect' );

/*----------------------------------------------------------------------------//
 *  Midori
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Midori = {};

/** @const {string} */
whatBrowserAmI.brand.Midori.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Midori/' );

/** @return {boolean} */
whatBrowserAmI.brand.Midori.is = function(){
    return !!whatBrowserAmI.brand.Midori.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Midori.detect = function(){
    if( whatBrowserAmI.brand.Midori.is() ){
        p_setBrand( BRAND.Midori, whatBrowserAmI.brand.Midori.NAVIGATOR_VERSION );
        return true;
    };
};