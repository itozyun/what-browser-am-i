goog.provide( 'whatBrowserAmI.brand.Dolphin.is' );
goog.provide( 'whatBrowserAmI.brand.Dolphin.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Dolphin
 */

/**
 * @package
 * @return {boolean} */
whatBrowserAmI.brand.Dolphin.is = function(){
    return p_engineName === ENGINE.iOS_WebView && !!p_inObject( 'enableWebGL', window );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Dolphin.detect = function(){
    if( whatBrowserAmI.brand.Dolphin.is() ){
        p_setBrand( BRAND.Dolphin );
        return true;
    };
};
