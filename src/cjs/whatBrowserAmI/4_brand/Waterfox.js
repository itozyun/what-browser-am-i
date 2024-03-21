goog.provide( 'whatBrowserAmI.brand.Waterfox.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Waterfox.is' );
goog.provide( 'whatBrowserAmI.brand.Waterfox.detect' );

/*----------------------------------------------------------------------------//
 *  Waterfox
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Waterfox = {};

/** @const {string} */
whatBrowserAmI.brand.Waterfox.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Waterfox/' );

/** @return {boolean} */
whatBrowserAmI.brand.Waterfox.is = function(){
    return !!whatBrowserAmI.brand.Waterfox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Waterfox.detect = function(){
    if( whatBrowserAmI.brand.Waterfox.is() ){
        p_setBrand( BRAND.Waterfox, whatBrowserAmI.brand.Waterfox.NAVIGATOR_VERSION );
        return true;
    };
};