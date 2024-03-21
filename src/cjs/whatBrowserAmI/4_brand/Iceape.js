goog.provide( 'whatBrowserAmI.brand.Iceape.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Iceape.is' );
goog.provide( 'whatBrowserAmI.brand.Iceape.detect' );

/*----------------------------------------------------------------------------//
 *  Iceape
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Iceape = {};

/** @const {string} */
whatBrowserAmI.brand.Iceape.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Iceape/' );

/** @return {boolean} */
whatBrowserAmI.brand.Iceape.is = function(){
    return !!whatBrowserAmI.brand.Iceape.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Iceape.detect = function(){
    if( whatBrowserAmI.brand.Iceape.is() ){
        p_setBrand( BRAND.Iceape, whatBrowserAmI.brand.Iceape.NAVIGATOR_VERSION );
        return true;
    };
};