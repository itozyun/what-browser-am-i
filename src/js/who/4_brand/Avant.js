goog.provide( 'who.brand.Avant.is' );
goog.provide( 'who.brand.Avant.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Avant
 */

/** @return {boolean} */
who.brand.Avant.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, 'Avant Browser;' );
};

/** @return {boolean|void} */
who.brand.Avant.detect = function(){
    if( who.brand.Avant.is() ){
        who.base.setBrand( iAm.EnumBrand.Avant );
        return true;
    };
};