goog.provide( 'who.brand.OperaTurbo.is' );
goog.provide( 'who.brand.OperaTurbo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Opera Turbo
 */

/** @const {string} */
who.brand.OperaTurbo.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strAppVersion, 'OPT/' );

/**
 * @package
 * @return {boolean} */
who.brand.OperaTurbo.is = function(){
    return !!who.brand.OperaTurbo.NAVIGATOR_VERSION ||
           who.result.platformName === iAm.EnumPlatform.iOS && !core.hasProperty( window, 'isSecureContext' );
};

/** @return {boolean|void} */
who.brand.OperaTurbo.detect = function(){
    if( who.brand.OperaTurbo.is() ){
        who.base.setBrand( iAm.EnumBrand.Opera_Turbo, who.brand.OperaTurbo.NAVIGATOR_VERSION );
        if( !who.result.isPcSiteRequested ){
            who.result.isPcSiteRequested = !who.util.hasSubstring( who.env.strAppVersion, 'Mobile/' );
        };
        return true;
    };
};
