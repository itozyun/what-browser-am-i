goog.provide( 'who.brand.DuckDuckGo.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.DuckDuckGo.is' );
goog.provide( 'who.brand.DuckDuckGo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  DuckDuckGo
 */

/** @const {string} */
who.brand.DuckDuckGo.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'DuckDuckGo/' );

/** @return {boolean} */
who.brand.DuckDuckGo.is = function(){
    return !!who.brand.DuckDuckGo.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.DuckDuckGo.detect = function(){
    if( who.brand.DuckDuckGo.is() ){
        who.base.setBrand( iAm.EnumBrand.DuckDuckGo, who.brand.DuckDuckGo.NAVIGATOR_VERSION );
        return true;
    };
};