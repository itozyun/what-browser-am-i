goog.provide( 'who.brand.UC.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.UC.is' );
goog.provide( 'who.brand.UC.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  UC Browser
 */

/** @const {string} */
who.brand.UC.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'UCBrowser/' );

/** @return {boolean} */
who.brand.UC.is = function(){
    return !!who.brand.UC.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.UC.detect = function(){
    if( who.brand.UC.is() ){
        p_setBrand( EnumBrand.UC, who.brand.UC.NAVIGATOR_VERSION );
        return true;
    };
};