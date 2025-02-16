goog.provide( 'who.brand.Iron.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Iron.is' );
goog.provide( 'who.brand.Iron.detect' );

goog.require( 'who.base' );
goog.require( 'who.brand.Chrome.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Iron
 */

/**
 * Iron 3 には Chrome/ が居ない, Iron 5 は Iron/ Chrome/ の併記.
 * @const {string} */
who.brand.Iron.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Iron/' );

/** @return {boolean} */
who.brand.Iron.is = function(){
    return !!who.brand.Iron.NAVIGATOR_VERSION || p_hasSubstring( p_strUserAgent, ' Iron ' );
};

/** @return {boolean|void} */
who.brand.Iron.detect = function(){
    if( who.brand.Iron.is() ){
        p_setBrand(
            EnumBrand.Iron,
            who.brand.Iron.NAVIGATOR_VERSION || who.brand.Chrome.NAVIGATOR_VERSION
        );
        return true;
    };
};
