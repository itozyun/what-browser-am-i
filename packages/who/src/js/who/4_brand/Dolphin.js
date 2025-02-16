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
    return who.result.engineName === iAm.EnumEngine.iOS_WebView && core.hasProperty( window, 'enableWebGL' );
};

/** @return {boolean|void} */
who.brand.Dolphin.detect = function(){
    if( who.brand.Dolphin.is() ){
        who.base.setBrand( iAm.EnumBrand.Dolphin );
        return true;
    };
};
