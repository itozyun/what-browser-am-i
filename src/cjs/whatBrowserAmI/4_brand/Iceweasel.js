goog.provide( 'whatBrowserAmI.brand.Iceweasel.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Iceweasel.is' );
goog.provide( 'whatBrowserAmI.brand.Iceweasel.detect' );

/*----------------------------------------------------------------------------//
 *  Iceweasel
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Iceweasel = {};

/** @const {string} */
whatBrowserAmI.brand.Iceweasel.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Iceweasel/' );

/** @return {boolean} */
whatBrowserAmI.brand.Iceweasel.is = function(){
    return !!whatBrowserAmI.brand.Iceweasel.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Iceweasel.detect = function(){
    if( whatBrowserAmI.brand.Iceweasel.is() ){
        p_setBrand( BRAND.Iceweasel, whatBrowserAmI.brand.Iceweasel.NAVIGATOR_VERSION );
        return true;
    };
};