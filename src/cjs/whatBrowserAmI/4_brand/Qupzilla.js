goog.provide( 'whatBrowserAmI.brand.QupZilla.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.QupZilla.is' );
goog.provide( 'whatBrowserAmI.brand.QupZilla.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  QupZilla
 */

/** @const {string} */
whatBrowserAmI.brand.QupZilla.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'QupZillaBrowser/' );

/** @return {boolean} */
whatBrowserAmI.brand.QupZilla.is = function(){
    return !!whatBrowserAmI.brand.QupZilla.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.QupZilla.detect = function(){
    if( whatBrowserAmI.brand.QupZilla.is() ){
        p_setBrand( BRAND.QupZilla, whatBrowserAmI.brand.QupZilla.NAVIGATOR_VERSION );
        return true;
    };
};
