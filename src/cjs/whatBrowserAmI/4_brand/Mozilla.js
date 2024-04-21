goog.provide( 'whatBrowserAmI.brand.Mozilla.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Mozilla.is' );
goog.provide( 'whatBrowserAmI.brand.Mozilla.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Mozilla
 */

/** @return {boolean} */
whatBrowserAmI.brand.Mozilla.is = function(){
    return p_engineName === ENGINE.Gecko &&
           p_conpareVersion( p_engineVersion, 1.8 ) < 0 &&
           !whatBrowserAmI.brand.Firefox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Mozilla.detect = function(){
    if( whatBrowserAmI.brand.Mozilla.is() ){
        p_setBrand( BRAND.Mozilla, p_engineVersion );
        return true;
    };
};