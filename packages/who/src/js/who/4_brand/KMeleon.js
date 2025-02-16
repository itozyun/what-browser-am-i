goog.provide( 'who.brand.KMeleon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.KMeleon.is' );
goog.provide( 'who.brand.KMeleon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  K-Meleon
 */

/** @const {string} */
who.brand.KMeleon.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'K-Meleon/' );

/** @return {boolean} */
who.brand.KMeleon.is = function(){
    return !!who.brand.KMeleon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.KMeleon.detect = function(){
    if( who.brand.KMeleon.is() ){
        who.base.setBrand( iAm.EnumBrand.K$_Meleon, who.brand.KMeleon.NAVIGATOR_VERSION );
        return true;
    };
};