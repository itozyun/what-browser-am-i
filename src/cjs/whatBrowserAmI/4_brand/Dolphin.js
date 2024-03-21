goog.provide( 'whatBrowserAmI.brand.Dolphin.is' );
goog.provide( 'whatBrowserAmI.brand.Dolphin.detect' );

/*----------------------------------------------------------------------------//
 *  Dolphin
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Dolphin = {};

/** @const {boolean} */
whatBrowserAmI.brand.Dolphin.is = function(){
    return p_engineName === ENGINE.iOSWebView && p_inObject( 'enableWebGL', window );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Dolphin.detect = function(){
    if( whatBrowserAmI.brand.Dolphin.is() ){
        p_setBrand( BRAND.Dolphin );
        return true;
    };
};
