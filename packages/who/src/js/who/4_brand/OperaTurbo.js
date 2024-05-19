goog.provide( 'who.brand.OperaTurbo.is' );
goog.provide( 'who.brand.OperaTurbo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Opera Turbo
 */

/** @const {string} */
who.brand.OperaTurbo.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'OPT/' );

/**
 * @package
 * @return {boolean} */
who.brand.OperaTurbo.is = function(){
    return !!who.brand.OperaTurbo.NAVIGATOR_VERSION ||
           p_platformName === PLATFORM.iOS && !p_inObject( 'isSecureContext', window );
};

/** @return {boolean|void} */
who.brand.OperaTurbo.detect = function(){
    if( who.brand.OperaTurbo.is() ){
        p_setBrand( BRAND.Opera_Turbo, who.brand.OperaTurbo.NAVIGATOR_VERSION );
        if( !p_isPcSiteRequested ){
            p_isPcSiteRequested = !p_hasSubstring( p_strAppVersion, 'Mobile/' );
        };
        return true;
    };
};
