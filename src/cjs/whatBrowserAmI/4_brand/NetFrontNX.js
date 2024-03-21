goog.provide( 'whatBrowserAmI.brand.NetFrontNX.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.NetFrontNX.is' );
goog.provide( 'whatBrowserAmI.brand.NetFrontNX.detect' );

/*----------------------------------------------------------------------------//
 *  NetFrontNX
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.NetFrontNX = {};

/** @const {string} */
whatBrowserAmI.brand.NetFrontNX.NAVIGATOR_VERSION =
    p_getVersionString( p_strAppVersion, 'NX/' ) ||
    p_getVersionString( p_strAppVersion, 'NF/' );

/** @return {boolean} */
whatBrowserAmI.brand.NetFrontNX.is = function(){
    return !!whatBrowserAmI.brand.NetFrontNX.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.NetFrontNX.detect = function(){
    if( whatBrowserAmI.brand.NetFrontNX.is() ){
        p_setBrand( BRAND.NetFrontNX, whatBrowserAmI.brand.NetFrontNX.NAVIGATOR_VERSION );
        return true;
    };
};