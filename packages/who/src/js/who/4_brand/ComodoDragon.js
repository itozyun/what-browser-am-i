goog.provide( 'who.brand.ComodoDragon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.ComodoDragon.is' );
goog.provide( 'who.brand.ComodoDragon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  ComodoDragon
 */

/** @const {string} */
who.brand.ComodoDragon.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Comodo Dragon/' );

/** @return {boolean} */
who.brand.ComodoDragon.is = function(){
    return !!who.brand.ComodoDragon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.ComodoDragon.detect = function(){
    if( who.brand.ComodoDragon.is() ){
        p_setBrand( EnumBrand.Comodo_Dragon, who.brand.ComodoDragon.NAVIGATOR_VERSION );
        return true;
    };
};