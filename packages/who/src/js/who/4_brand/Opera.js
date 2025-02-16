goog.provide( 'who.brand.Opera.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Opera.OPR_NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Opera.is' );
goog.provide( 'who.brand.Opera.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Opera
 */

/** @const {string} */
who.brand.Opera.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Opera/' );

/**
 * Chromium Opera Version
 * @const {string} */
who.brand.Opera.OPR_NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'OPR/' );

/**
 * @package
 * @return {boolean} */
who.brand.Opera.is = function(){
    return !!who.brand.Opera.NAVIGATOR_VERSION ||
           !!who.brand.Opera.OPR_NAVIGATOR_VERSION ||
           who.result.engineName === iAm.EnumEngine.Presto || who.result.engineName === iAm.EnumEngine.Presto_Mobile;
};

/** @return {boolean|void} */
who.brand.Opera.detect = function(){
    if( who.brand.Opera.is() ){
        who.base.setBrand(
            iAm.EnumBrand.Opera,
            who.result.engineName === iAm.EnumEngine.Presto || who.result.engineName === iAm.EnumEngine.Presto_Mobile
                ? who.result.engineVersion
                : who.brand.Opera.NAVIGATOR_VERSION || who.brand.Opera.OPR_NAVIGATOR_VERSION
        );
        return true;
    };
};
