goog.provide( 'who.brand.Opera.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Opera.OPR_NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Opera.is' );
goog.provide( 'who.brand.Opera.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Opera
 */

/** @const {string} */
who.brand.Opera.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Opera/' );

/**
 * Chromium Opera Version
 * @const {string} */
who.brand.Opera.OPR_NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'OPR/' );

/**
 * @package
 * @return {boolean} */
who.brand.Opera.is = function(){
    return !!who.brand.Opera.NAVIGATOR_VERSION ||
           !!who.brand.Opera.OPR_NAVIGATOR_VERSION ||
           p_engineName === ENGINE.Presto || p_engineName === ENGINE.Presto_Mobile;
};

/** @return {boolean|void} */
who.brand.Opera.detect = function(){
    if( who.brand.Opera.is() ){
        p_setBrand(
            BRAND.Opera,
            p_engineName === ENGINE.Presto || p_engineName === ENGINE.Presto_Mobile
                ? p_engineVersion
                : who.brand.Opera.NAVIGATOR_VERSION || who.brand.Opera.OPR_NAVIGATOR_VERSION
        );
        return true;
    };
};
