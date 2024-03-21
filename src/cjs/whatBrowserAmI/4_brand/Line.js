goog.provide( 'whatBrowserAmI.brand.Line.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Line.is' );
goog.provide( 'whatBrowserAmI.brand.Line.detect' );

/*----------------------------------------------------------------------------//
 *  Line
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Line = {};

/** @const {string} */
whatBrowserAmI.brand.Line.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Line/' );

/** @return {boolean} */
whatBrowserAmI.brand.Line.is = function(){
    return !!whatBrowserAmI.brand.Line.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Line.detect = function(){
    if( whatBrowserAmI.brand.Line.is() ){
        p_setBrand( BRAND.Line, whatBrowserAmI.brand.Line.NAVIGATOR_VERSION );
        return true;
    };
};