goog.provide( 'who.brand.SamsungInternet.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.SamsungInternet.is' );
goog.provide( 'who.brand.SamsungInternet.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  SamsungInternet
 */

/**
 * @package
 * @return {boolean} */
who.brand.SamsungInternet.is = function(){
    return p_engineName === EnumEngine.Samsung_Internet;
};

/** @return {boolean|void} */
who.brand.SamsungInternet.detect = function(){
    if( who.brand.SamsungInternet.is() ){
        p_setBrand( EnumBrand.Samsung_Internet, p_engineVersion );
        return true;
    };
};