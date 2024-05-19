goog.provide( 'who.brand.Otter.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Otter.is' );
goog.provide( 'who.brand.Otter.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Otter
 *
 *    http://vega.pgw.jp/~kabe/WWW/browsers/otter1.0.03.html
 */

/** @const {string} */
who.brand.Otter.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Otter/' );

/** @return {boolean} */
who.brand.Otter.is = function(){
    return !!who.brand.Otter.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Otter.detect = function(){
    if( who.brand.Otter.is() ){
        p_setBrand( BRAND.Otter, who.brand.Otter.NAVIGATOR_VERSION );
        return true;
    };
};
