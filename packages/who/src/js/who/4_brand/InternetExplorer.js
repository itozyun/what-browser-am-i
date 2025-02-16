goog.provide( 'who.brand.InternetExplorer.is' );
goog.provide( 'who.brand.InternetExplorer.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Internet Explorer
 */

/**
 * @package
 * @return {boolean} */
who.brand.InternetExplorer.is = function(){
    return who.result.engineName === iAm.EnumEngine.Trident || who.result.engineName === iAm.EnumEngine.Trident_Mobile || who.result.engineName === iAm.EnumEngine.Tasman;
};

/** @return {boolean|void} */
who.brand.InternetExplorer.detect = function(){
    if( who.brand.InternetExplorer.is() ){
        who.base.setBrand( iAm.EnumBrand.Internet_Explorer, who.result.engineVersion );
        return true;
    };
};