goog.provide( 'who.brand.ComodoDragon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.ComodoDragon.is' );
goog.provide( 'who.brand.ComodoDragon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  ComodoDragon
 */

/** @const {string} */
who.brand.ComodoDragon.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Comodo Dragon/' );

/** @return {boolean} */
who.brand.ComodoDragon.is = function(){
    return !!who.brand.ComodoDragon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.ComodoDragon.detect = function(){
    if( who.brand.ComodoDragon.is() ){
        who.base.setBrand( iAm.EnumBrand.Comodo_Dragon, who.brand.ComodoDragon.NAVIGATOR_VERSION );
        return true;
    };
};