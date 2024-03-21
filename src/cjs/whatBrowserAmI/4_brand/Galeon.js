goog.provide( 'whatBrowserAmI.brand.Galeon.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Galeon.is' );
goog.provide( 'whatBrowserAmI.brand.Galeon.detect' );

/*----------------------------------------------------------------------------//
 *  Galeon
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Galeon = {};

/** @const {string} */
whatBrowserAmI.brand.Galeon.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Galeon/' );

/** @return {boolean} */
whatBrowserAmI.brand.Galeon.is = function(){
    return !!whatBrowserAmI.brand.Galeon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Galeon.detect = function(){
    if( whatBrowserAmI.brand.Galeon.is() ){
        p_setBrand( BRAND.Galeon, whatBrowserAmI.brand.Galeon.NAVIGATOR_VERSION );
        return true;
    };
};