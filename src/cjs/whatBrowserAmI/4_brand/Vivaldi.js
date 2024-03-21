goog.provide( 'whatBrowserAmI.brand.Vivaldi.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Vivaldi.is' );
goog.provide( 'whatBrowserAmI.brand.Vivaldi.detect' );

/*----------------------------------------------------------------------------//
 *  Vivaldi
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Vivaldi = {};

/** @const {string} */
whatBrowserAmI.brand.Vivaldi.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Vivaldi/' );

/** @return {boolean} */
whatBrowserAmI.brand.Vivaldi.is = function(){
    return !!whatBrowserAmI.brand.Vivaldi.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Vivaldi.detect = function(){
    if( whatBrowserAmI.brand.Vivaldi.is() ){
        p_setBrand( BRAND.Vivaldi, whatBrowserAmI.brand.Vivaldi.NAVIGATOR_VERSION );
        return true;
    };
};