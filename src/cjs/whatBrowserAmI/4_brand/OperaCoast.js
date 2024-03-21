goog.provide( 'whatBrowserAmI.brand.OperaCoast.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.OperaCoast.is' );
goog.provide( 'whatBrowserAmI.brand.OperaCoast.detect' );

/*----------------------------------------------------------------------------//
 *  OperaCoast
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.OperaCoast = {};

/** @const {string} */
whatBrowserAmI.brand.OperaCoast.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Coast/' );

/** @return {boolean} */
whatBrowserAmI.brand.OperaCoast.is = function(){
    return !!whatBrowserAmI.brand.OperaCoast.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.OperaCoast.detect = function(){
    if( whatBrowserAmI.brand.OperaCoast.is() ){
        p_setBrand( BRAND.OperaCoast, whatBrowserAmI.brand.OperaCoast.NAVIGATOR_VERSION );
        return true;
    };
};
