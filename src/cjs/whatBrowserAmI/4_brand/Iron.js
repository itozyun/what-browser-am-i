goog.provide( 'whatBrowserAmI.brand.Iron.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Iron.is' );
goog.provide( 'whatBrowserAmI.brand.Iron.detect' );

goog.require( 'whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Iron
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Iron = {};

/**
 * Iron 3 には Chrome/ が居ない, Iron 5 は Iron/ Chrome/ の併記.
 * @const {string} */
whatBrowserAmI.brand.Iron.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Iron/' );

/** @return {boolean} */
whatBrowserAmI.brand.Iron.is = function(){
    return !!whatBrowserAmI.brand.Iron.NAVIGATOR_VERSION || p_hasSubstring( p_strUserAgent, ' Iron ' );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Iron.detect = function(){
    if( whatBrowserAmI.brand.Iron.is() ){
        p_setBrand(
            BRAND.Iron,
            whatBrowserAmI.brand.Iron.NAVIGATOR_VERSION || whatBrowserAmI.brand.Chrome.NAVIGATOR_VERSION
        );
        return true;
    };
};
