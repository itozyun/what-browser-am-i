goog.provide( 'who.brand.QupZilla.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.QupZilla.is' );
goog.provide( 'who.brand.QupZilla.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  QupZilla
 *
 *    https://user-agents.net/browsers/qupzilla
 */

/** @const {string} */
who.brand.QupZilla.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'QupZilla/' );

/** @return {boolean} */
who.brand.QupZilla.is = function(){
    return !!who.brand.QupZilla.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.QupZilla.detect = function(){
    if( who.brand.QupZilla.is() ){
        p_setBrand( EnumBrand.QupZilla, who.brand.QupZilla.NAVIGATOR_VERSION );
        return true;
    };
};
