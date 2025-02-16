goog.provide( 'who.brand.QQ.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.QQ.is' );
goog.provide( 'who.brand.QQ.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  QQ
 */

/** @const {string} */
who.brand.QQ.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'QQBrowser/' );

/** @return {boolean} */
who.brand.QQ.is = function(){
    return !!who.brand.QQ.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.QQ.detect = function(){
    if( who.brand.QQ.is() ){
        p_setBrand( EnumBrand.QQ, who.brand.QQ.NAVIGATOR_VERSION );
        return true;
    };
};