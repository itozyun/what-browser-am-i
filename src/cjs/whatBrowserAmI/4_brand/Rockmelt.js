goog.provide( 'whatBrowserAmI.brand.Rockmelt.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Rockmelt.is' );
goog.provide( 'whatBrowserAmI.brand.Rockmelt.detect' );

/*----------------------------------------------------------------------------//
 *  Rockmelt
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Rockmelt = {};

/** @const {string} */
whatBrowserAmI.brand.Rockmelt.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Rockmelt/' );

/** @return {boolean} */
whatBrowserAmI.brand.Rockmelt.is = function(){
    return !!whatBrowserAmI.brand.Rockmelt.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Rockmelt.detect = function(){
    if( whatBrowserAmI.brand.Rockmelt.is() ){
        p_setBrand( BRAND.Rockmelt, whatBrowserAmI.brand.Rockmelt.NAVIGATOR_VERSION );
        return true;
    };
};