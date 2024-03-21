goog.provide( 'whatBrowserAmI.brand.AOL.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.AOL.is' );
goog.provide( 'whatBrowserAmI.brand.AOL.detect' );

/*----------------------------------------------------------------------------//
 *  AOL
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.AOL = {};

/** @const {string} */
whatBrowserAmI.brand.AOL.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'AOLBUILD/' ) || p_getVersionString( p_strAppVersion, 'AOL/' );

/** @return {boolean} */
whatBrowserAmI.brand.AOL.is = function(){
    return !!whatBrowserAmI.brand.AOL.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.AOL.detect = function(){
    if( whatBrowserAmI.brand.AOL.is() ){
        p_setBrand( BRAND.AOL, whatBrowserAmI.brand.AOL.NAVIGATOR_VERSION );
        return true;
    };
};