goog.provide( 'whatBrowserAmI.brand.Konqueror.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Konqueror.is' );
goog.provide( 'whatBrowserAmI.brand.Konqueror.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Konqueror
 */

/** @const {string} */
whatBrowserAmI.brand.Konqueror.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Konqueror/' );

/** @return {boolean} */
whatBrowserAmI.brand.Konqueror.is = function(){
    return !!whatBrowserAmI.brand.Konqueror.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Konqueror.detect = function(){
    if( whatBrowserAmI.brand.Konqueror.is() ){
        p_setBrand( BRAND.Konqueror, whatBrowserAmI.brand.Konqueror.NAVIGATOR_VERSION );
        return true;
    };
};