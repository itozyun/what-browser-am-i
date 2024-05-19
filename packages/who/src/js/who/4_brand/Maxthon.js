goog.provide( 'who.brand.Maxthon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Maxthon.is' );
goog.provide( 'who.brand.Maxthon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Maxthon
 */

/** @const {string} */
who.brand.Maxthon.NAVIGATOR_VERSION =
    p_getVersionString( p_strUserAgent, 'Maxthon/' ) ||
    p_getVersionString( p_strUserAgent, 'Maxthon ' ) ||
    p_getVersionString( p_strUserAgent, 'MXiOS/'   );

/** @return {boolean} */
who.brand.Maxthon.is = function(){
    return !!who.brand.Maxthon.NAVIGATOR_VERSION || p_hasSubstring( p_strUserAgent, 'Maxthon' );
};

/** @return {boolean|void} */
who.brand.Maxthon.detect = function(){
    if( who.brand.Maxthon.is() ){
        p_setBrand( BRAND.Maxthon, who.brand.Maxthon.NAVIGATOR_VERSION );
        return true;
    };
};