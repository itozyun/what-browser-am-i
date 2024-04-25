goog.provide( 'whatBrowserAmI.brand.Otter.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Otter.is' );
goog.provide( 'whatBrowserAmI.brand.Otter.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Otter
 *
 *    http://vega.pgw.jp/~kabe/WWW/browsers/otter1.0.03.html
 */

/** @const {string} */
whatBrowserAmI.brand.Otter.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Otter/' );

/** @return {boolean} */
whatBrowserAmI.brand.Otter.is = function(){
    return !!whatBrowserAmI.brand.Otter.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Otter.detect = function(){
    if( whatBrowserAmI.brand.Otter.is() ){
        p_setBrand( BRAND.Otter, whatBrowserAmI.brand.Otter.NAVIGATOR_VERSION );
        return true;
    };
};
