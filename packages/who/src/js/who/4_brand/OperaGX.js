goog.provide( 'who.brand.OperaGX.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.OperaGX.is' );
goog.provide( 'who.brand.OperaGX.detect' );

goog.require( 'who.base' );
goog.require( 'who.brand.Opera.OPR_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Opera GX
 */

/** @return {boolean} */
who.brand.OperaGX.is = function(){
    return window.onoperadetachedviewchange === null;
};

/** @return {boolean|void} */
who.brand.OperaGX.detect = function(){
    if( who.brand.OperaGX.is() ){
        p_setBrand( BRAND.Opera_GX, who.brand.Opera.OPR_NAVIGATOR_VERSION );
        return true;
    };
};
