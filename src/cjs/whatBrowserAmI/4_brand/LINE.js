goog.provide( 'whatBrowserAmI.brand.LINE.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.LINE.is' );
goog.provide( 'whatBrowserAmI.brand.LINE.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  LINE
 */

/** @const {string} */
whatBrowserAmI.brand.LINE.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Line/' );

/** @return {boolean} */
whatBrowserAmI.brand.LINE.is = function(){
    return !!whatBrowserAmI.brand.LINE.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.LINE.detect = function(){
    if( whatBrowserAmI.brand.LINE.is() ){
        p_setBrand( BRAND.LINE, whatBrowserAmI.brand.LINE.NAVIGATOR_VERSION );
        return true;
    };
};