goog.provide( 'who.brand.Galeon.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Galeon.is' );
goog.provide( 'who.brand.Galeon.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Galeon
 */

/** @const {string} */
who.brand.Galeon.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Galeon/' );

/** @return {boolean} */
who.brand.Galeon.is = function(){
    return !!who.brand.Galeon.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Galeon.detect = function(){
    if( who.brand.Galeon.is() ){
        p_setBrand( BRAND.Galeon, who.brand.Galeon.NAVIGATOR_VERSION );
        return true;
    };
};