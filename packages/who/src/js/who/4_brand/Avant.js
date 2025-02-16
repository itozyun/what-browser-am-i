goog.provide( 'who.brand.Avant.is' );
goog.provide( 'who.brand.Avant.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Avant
 */

/** @return {boolean} */
who.brand.Avant.is = function(){
    return p_hasSubstring( p_strUserAgent, 'Avant Browser;' );
};

/** @return {boolean|void} */
who.brand.Avant.detect = function(){
    if( who.brand.Avant.is() ){
        p_setBrand( EnumBrand.Avant );
        return true;
    };
};