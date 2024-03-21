goog.provide( 'whatBrowserAmI.brand.GNUzilla.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.GNUzilla.is' );
goog.provide( 'whatBrowserAmI.brand.GNUzilla.detect' );

/*----------------------------------------------------------------------------//
 *  GNUzilla
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.GNUzilla = {};

/** @const {string} */
whatBrowserAmI.brand.GNUzilla.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'GNUzilla/' );

/** @return {boolean} */
whatBrowserAmI.brand.GNUzilla.is = function(){
    return !!whatBrowserAmI.brand.GNUzilla.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.GNUzilla.detect = function(){
    if( whatBrowserAmI.brand.GNUzilla.is() ){
        p_setBrand( BRAND.GNUzilla, whatBrowserAmI.brand.GNUzilla.NAVIGATOR_VERSION );
        return true;
    };
};