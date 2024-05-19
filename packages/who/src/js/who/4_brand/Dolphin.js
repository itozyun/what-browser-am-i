goog.provide( 'who.brand.Dolphin.is' );
goog.provide( 'who.brand.Dolphin.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Dolphin
 */

/**
 * @package
 * @return {boolean} */
who.brand.Dolphin.is = function(){
    return p_engineName === ENGINE.iOS_WebView && !!p_inObject( 'enableWebGL', window );
};

/** @return {boolean|void} */
who.brand.Dolphin.detect = function(){
    if( who.brand.Dolphin.is() ){
        p_setBrand( BRAND.Dolphin );
        return true;
    };
};
