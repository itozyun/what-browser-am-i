goog.provide( 'whatBrowserAmI.brand.KMeleon.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.KMeleon.is' );
goog.provide( 'whatBrowserAmI.brand.KMeleon.detect' );

/*----------------------------------------------------------------------------//
 *  K-Meleon
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.KMeleon = {};

/** @const {string} */
whatBrowserAmI.brand.KMeleon.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'K-Meleon/' );

/** @return {boolean} */
whatBrowserAmI.brand.KMeleon.is = function(){
    return !!whatBrowserAmI.brand.KMeleon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.KMeleon.detect = function(){
    if( whatBrowserAmI.brand.KMeleon.is() ){
        p_setBrand( BRAND.KMeleon, whatBrowserAmI.brand.KMeleon.NAVIGATOR_VERSION );
        return true;
    };
};