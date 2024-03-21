goog.provide( 'whatBrowserAmI.brand.Roccat.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Roccat.is' );
goog.provide( 'whatBrowserAmI.brand.Roccat.detect' );

/*----------------------------------------------------------------------------//
 *  Roccat
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Roccat = {};

/** @const {string} */
whatBrowserAmI.brand.Roccat.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Roccat/' );

/** @return {boolean} */
whatBrowserAmI.brand.Roccat.is = function(){
    return !!whatBrowserAmI.brand.Roccat.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Roccat.detect = function(){
    if( whatBrowserAmI.brand.Roccat.is() ){
        p_setBrand( BRAND.Roccat, whatBrowserAmI.brand.Roccat.NAVIGATOR_VERSION );
        return true;
    };
};