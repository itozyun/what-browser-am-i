goog.provide( 'who.brand.Mozilla.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Mozilla.is' );
goog.provide( 'who.brand.Mozilla.detect' );

goog.require( 'who.base' );
goog.require( 'who.brand.Firefox.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Mozilla
 */

/** @return {boolean} */
who.brand.Mozilla.is = function(){
    return who.result.engineName === iAm.EnumEngine.Gecko &&
           who.util.conpareVersion( who.result.engineVersion, 1.8 ) < 0 &&
           !who.brand.Firefox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Mozilla.detect = function(){
    if( who.brand.Mozilla.is() ){
        who.base.setBrand( iAm.EnumBrand.Mozilla, who.result.engineVersion );
        return true;
    };
};