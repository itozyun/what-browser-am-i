goog.provide( 'who.brand.Vivaldi.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Vivaldi.is' );
goog.provide( 'who.brand.Vivaldi.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Vivaldi
 */

/** @const {string} */
who.brand.Vivaldi.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Vivaldi/' );

/** @return {boolean} */
who.brand.Vivaldi.is = function(){
    return !!who.brand.Vivaldi.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Vivaldi.detect = function(){
    if( who.brand.Vivaldi.is() ){
        p_setBrand( BRAND.Vivaldi, who.brand.Vivaldi.NAVIGATOR_VERSION );
        return true;
    };
};