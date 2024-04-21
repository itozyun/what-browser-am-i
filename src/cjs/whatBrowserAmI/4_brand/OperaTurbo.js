goog.provide( 'whatBrowserAmI.brand.OperaTurbo.is' );
goog.provide( 'whatBrowserAmI.brand.OperaTurbo.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Opera Turbo
 */

/** @const {string} */
whatBrowserAmI.brand.OperaTurbo.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'OPT/' );

/**
 * @package
 * @return {boolean} */
whatBrowserAmI.brand.OperaTurbo.is = function(){
    return !!whatBrowserAmI.brand.OperaTurbo.NAVIGATOR_VERSION ||
           p_platformName === PLATFORM.iOS && !p_inObject( 'isSecureContext', window );
};

/** @return {boolean|void} */
whatBrowserAmI.brand.OperaTurbo.detect = function(){
    if( whatBrowserAmI.brand.OperaTurbo.is() ){
        p_setBrand( BRAND.Opera_Turbo, whatBrowserAmI.brand.OperaTurbo.NAVIGATOR_VERSION );
        if( !p_isPcSiteRequested ){
            p_isPcSiteRequested = !p_hasSubstring( p_strAppVersion, 'Mobile/' );
        };
        return true;
    };
};
