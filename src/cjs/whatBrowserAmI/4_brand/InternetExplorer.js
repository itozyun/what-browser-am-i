goog.provide( 'whatBrowserAmI.brand.InternetExplorer.is' );
goog.provide( 'whatBrowserAmI.brand.InternetExplorer.detect' );

/*----------------------------------------------------------------------------//
 *  Internet Explorer
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.InternetExplorer = {};

/** @return {boolean} */
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