goog.provide( 'who.brand.Flock.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Flock.is' );
goog.provide( 'who.brand.Flock.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Flock
 */

/** @const {string} */
who.brand.Flock.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Flock/' );

/** @return {boolean} */
who.brand.Flock.is = function(){
    return !!who.brand.Flock.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Flock.detect = function(){
    if( who.brand.Flock.is() ){
        who.base.setBrand( iAm.EnumBrand.Flock, who.brand.Flock.NAVIGATOR_VERSION );
        return true;
    };
};