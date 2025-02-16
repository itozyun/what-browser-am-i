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
    return p_engineName === EnumEngine.Gecko &&
           p_conpareVersion( p_engineVersion, 1.8 ) < 0 &&
           !who.brand.Firefox.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Mozilla.detect = function(){
    if( who.brand.Mozilla.is() ){
        p_setBrand( EnumBrand.Mozilla, p_engineVersion );
        return true;
    };
};