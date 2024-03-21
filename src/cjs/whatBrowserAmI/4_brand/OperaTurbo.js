goog.provide( 'whatBrowserAmI.brand.OperaTurbo.is' );
goog.provide( 'whatBrowserAmI.brand.OperaTurbo.detect' );

/*----------------------------------------------------------------------------//
 *  OperaTurbo
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.OperaTurbo = {};

/** @const {string} */
whatBrowserAmI.brand.OperaTurbo.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'OPT/' );

/** @const {boolean} */
whatBrowserAmI.brand.OperaTurbo.is = function(){
    return !!whatBrowserAmI.brand.OperaTurbo.NAVIGATOR_VERSION ||
           p_platformName === platform.iOS && !p_inObject( 'isSecureContext', window );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.OperaTurbo.detect = function(){
    if( whatBrowserAmI.brand.OperaTurbo.is() ){
        p_setBrand( BRAND.OperaTurbo, whatBrowserAmI.brand.OperaTurbo.NAVIGATOR_VERSION );
        if( !p_isPcSiteRequested ){
            p_isPcSiteRequested = !p_hasSubstring( p_strAppVersion, 'Mobile/' );
        };
        return true;
    };
};
