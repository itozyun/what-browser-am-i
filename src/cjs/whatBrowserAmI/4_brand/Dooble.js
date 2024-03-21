goog.provide( 'whatBrowserAmI.brand.Dooble.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Dooble.is' );
goog.provide( 'whatBrowserAmI.brand.Dooble.detect' );

/*----------------------------------------------------------------------------//
 *  Dooble
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Dooble = {};

/** @const {string} */
whatBrowserAmI.brand.Dooble.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Dooble/' );

/** @return {boolean} */
whatBrowserAmI.brand.Dooble.is = function(){
    return !!whatBrowserAmI.brand.Dooble.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Dooble.detect = function(){
    if( whatBrowserAmI.brand.Dooble.is() ){
        p_setBrand( BRAND.Dooble, whatBrowserAmI.brand.Dooble.NAVIGATOR_VERSION );
        return true;
    };
};