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
    return p_engineName === EnumEngine.Trident || p_engineName === EnumEngine.Trident_Mobile || p_engineName === EnumEngine.Tasman;
};

/** @return {boolean|void} */
who.brand.InternetExplorer.detect = function(){
    if( who.brand.InternetExplorer.is() ){
        p_setBrand( EnumBrand.Internet_Explorer, p_engineVersion );
        return true;
    };
};