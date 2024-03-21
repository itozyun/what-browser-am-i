goog.provide( 'whatBrowserAmI.brand.SeaMonkey.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.SeaMonkey.is' );
goog.provide( 'whatBrowserAmI.brand.SeaMonkey.detect' );

/*----------------------------------------------------------------------------//
 *  SeaMonkey
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.SeaMonkey = {};

/** @const {string} */
whatBrowserAmI.brand.SeaMonkey.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'SeaMonkey/' );

/** @return {boolean} */
whatBrowserAmI.brand.SeaMonkey.is = function(){
    return !!whatBrowserAmI.brand.SeaMonkey.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.SeaMonkey.detect = function(){
    if( whatBrowserAmI.brand.SeaMonkey.is() ){
        p_setBrand( BRAND.SeaMonkey, whatBrowserAmI.brand.SeaMonkey.NAVIGATOR_VERSION );
        return true;
    };
};