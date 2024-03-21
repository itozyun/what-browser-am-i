goog.provide( 'whatBrowserAmI.brand.UC.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.UC.is' );
goog.provide( 'whatBrowserAmI.brand.UC.detect' );

goog.require( 'whatBrowserAmI.brand.UCWEB.is' );

/*----------------------------------------------------------------------------//
 *  UC Browser
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.UC = {};

/** @const {string} */
whatBrowserAmI.brand.UC.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'UCBrowser/' );

/** @return {boolean} */
whatBrowserAmI.brand.UC.is = function(){
    return !whatBrowserAmI.brand.UCWEB.is() && !!whatBrowserAmI.brand.UC.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.UC.detect = function(){
    if( whatBrowserAmI.brand.UC.is() ){
        p_setBrand( BRAND.UC, whatBrowserAmI.brand.UC.NAVIGATOR_VERSION );
        return true;
    };
};