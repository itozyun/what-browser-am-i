goog.provide( 'whatBrowserAmI.brand.Flock.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Flock.is' );
goog.provide( 'whatBrowserAmI.brand.Flock.detect' );

/*----------------------------------------------------------------------------//
 *  Flock
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Flock = {};

/** @const {string} */
whatBrowserAmI.brand.Flock.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Flock/' );

/** @return {boolean} */
whatBrowserAmI.brand.Flock.is = function(){
    return !!whatBrowserAmI.brand.Flock.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Flock.detect = function(){
    if( whatBrowserAmI.brand.Flock.is() ){
        p_setBrand( BRAND.Flock, whatBrowserAmI.brand.Flock.NAVIGATOR_VERSION );
        return true;
    };
};