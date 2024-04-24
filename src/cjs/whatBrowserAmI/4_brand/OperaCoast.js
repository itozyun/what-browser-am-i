goog.provide( 'whatBrowserAmI.brand.OperaCoast.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.OperaCoast.is' );
goog.provide( 'whatBrowserAmI.brand.OperaCoast.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Opera Coast
 */

/** @const {string} */
whatBrowserAmI.brand.OperaCoast.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Coast/' );

/** @return {boolean} */
whatBrowserAmI.brand.OperaCoast.is = function(){
    return !!whatBrowserAmI.brand.OperaCoast.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.OperaCoast.detect = function(){
    if( whatBrowserAmI.brand.OperaCoast.is() ){
        p_setBrand( BRAND.Opera_Coast, whatBrowserAmI.brand.OperaCoast.NAVIGATOR_VERSION );
        return true;
    };
};
