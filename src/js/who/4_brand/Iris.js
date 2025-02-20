goog.provide( 'who.brand.Iris.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Iris.is' );
goog.provide( 'who.brand.Iris.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Iris
 */

/**
 * http://archive.is/0trve
 * Mozilla/5.0 (Windows NT; U; en) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Iris/1.1.7 Safari/525.20
 * @const {string} */
who.brand.Iris.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent.toLowerCase(), 'iris' );

/** @return {boolean} */
who.brand.Iris.is = function(){
    return !!who.brand.Iris.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Iris.detect = function(){
    if( who.brand.Iris.is() ){
        who.base.setBrand( iAm.EnumBrand.Iris, who.brand.Iris.NAVIGATOR_VERSION );
        return true;
    };
};
