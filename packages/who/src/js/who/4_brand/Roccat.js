goog.provide( 'who.brand.Roccat.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Roccat.is' );
goog.provide( 'who.brand.Roccat.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Roccat
 */

/** @const {string} */
who.brand.Roccat.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Roccat/' );

/** @return {boolean} */
who.brand.Roccat.is = function(){
    return !!who.brand.Roccat.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Roccat.detect = function(){
    if( who.brand.Roccat.is() ){
        p_setBrand( BRAND.Roccat, who.brand.Roccat.NAVIGATOR_VERSION );
        return true;
    };
};