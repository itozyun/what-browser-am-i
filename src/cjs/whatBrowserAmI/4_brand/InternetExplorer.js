goog.provide( 'whatBrowserAmI.brand.InternetExplorer.is' );
goog.provide( 'whatBrowserAmI.brand.InternetExplorer.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Internet Explorer
 */

/**
 * @package
 * @return {boolean} */
whatBrowserAmI.brand.InternetExplorer.is = function(){
    return p_engineName === ENGINE.Trident || p_engineName === ENGINE.TridentMobile || p_engineName === ENGINE.Tasman;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.InternetExplorer.detect = function(){
    if( whatBrowserAmI.brand.InternetExplorer.is() ){
        p_setBrand( BRAND.InternetExplorer, p_engineVersion );
        return true;
    };
};