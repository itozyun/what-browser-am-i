goog.provide( 'who.brand.Sogou.is' );
goog.provide( 'who.brand.Sogou.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Sogou
 */

/** @return {boolean} */
who.brand.Sogou.is = function(){
    return p_hasSubstring( p_strUserAgent, 'SE 2.X MetaSr 1.0' );
};

/** @return {boolean|void} */
who.brand.Sogou.detect = function(){
    if( who.brand.Sogou.is() ){
        p_setBrand( BRAND.Sogou );
        return true;
    };
};