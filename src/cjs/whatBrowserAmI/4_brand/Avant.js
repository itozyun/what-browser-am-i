goog.provide( 'whatBrowserAmI.brand.Avant.is' );
goog.provide( 'whatBrowserAmI.brand.Avant.detect' );

/*----------------------------------------------------------------------------//
 *  Avant
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Avant = {};

/** @return {boolean} */
whatBrowserAmI.brand.Avant.is = function(){
    return p_hasSubstring( p_strAppVersion, 'Avant Browser;' );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Avant.detect = function(){
    if( whatBrowserAmI.brand.Avant.is() ){
        p_setBrand( BRAND.Avant );
        return true;
    };
};