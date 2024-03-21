goog.provide( 'whatBrowserAmI.brand.Sogou.is' );
goog.provide( 'whatBrowserAmI.brand.Sogou.detect' );

/*----------------------------------------------------------------------------//
 *  Sogou
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Sogou = {};

/** @return {boolean} */
whatBrowserAmI.brand.Sogou.is = function(){
    return p_hasSubstring( p_strUserAgent, 'SE 2.X MetaSr 1.0' );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Sogou.detect = function(){
    if( whatBrowserAmI.brand.Sogou.is() ){
        p_setBrand( BRAND.Sogou );
        return true;
    };
};