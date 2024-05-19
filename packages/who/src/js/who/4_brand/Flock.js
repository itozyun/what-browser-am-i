goog.provide( 'who.brand.Flock.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Flock.is' );
goog.provide( 'who.brand.Flock.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Flock
 */

/** @const {string} */
who.brand.Flock.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Flock/' );

/** @return {boolean} */
who.brand.Flock.is = function(){
    return !!who.brand.Flock.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Flock.detect = function(){
    if( who.brand.Flock.is() ){
        p_setBrand( BRAND.Flock, who.brand.Flock.NAVIGATOR_VERSION );
        return true;
    };
};