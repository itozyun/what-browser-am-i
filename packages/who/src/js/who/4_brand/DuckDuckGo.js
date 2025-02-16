goog.provide( 'who.brand.DuckDuckGo.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.DuckDuckGo.is' );
goog.provide( 'who.brand.DuckDuckGo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  DuckDuckGo
 */

/** @const {string} */
who.brand.DuckDuckGo.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'DuckDuckGo/' );

/** @return {boolean} */
who.brand.DuckDuckGo.is = function(){
    return !!who.brand.DuckDuckGo.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.DuckDuckGo.detect = function(){
    if( who.brand.DuckDuckGo.is() ){
        p_setBrand( EnumBrand.DuckDuckGo, who.brand.DuckDuckGo.NAVIGATOR_VERSION );
        return true;
    };
};