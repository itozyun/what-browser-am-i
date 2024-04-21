goog.provide( 'whatBrowserAmI.brand.OperaGX.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.OperaGX.is' );
goog.provide( 'whatBrowserAmI.brand.OperaGX.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Opera GX
 */

/** @return {boolean} */
whatBrowserAmI.brand.OperaGX.is = function(){
    return window.onoperadetachedviewchange === null;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.OperaGX.detect = function(){
    if( whatBrowserAmI.brand.OperaGX.is() ){
        p_setBrand( BRAND.Opera_GX, whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION );
        return true;
    };
};
