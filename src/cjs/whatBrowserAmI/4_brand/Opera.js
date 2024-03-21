goog.provide( 'whatBrowserAmI.brand.Opera.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Opera.is' );
goog.provide( 'whatBrowserAmI.brand.Opera.detect' );

/*----------------------------------------------------------------------------//
 *  Opera
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Opera = {};

/** @const {string} */
whatBrowserAmI.brand.Opera.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Opera/' );

/**
 * Chromium Opera Version
 * @const {string} */
whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'OPR/' );

/** @return {boolean} */
whatBrowserAmI.brand.Opera.is = function(){
    return !!whatBrowserAmI.brand.Opera.NAVIGATOR_VERSION ||
           !!whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Opera.detect = function(){
    if( whatBrowserAmI.brand.Opera.is() ){
        p_setBrand(
            BRAND.Opera,
            p_engineName === ENGINE.Presto || p_engineName === ENGINE.PrestoMobile
                ? p_engineVersion
                : whatBrowserAmI.brand.Opera.NAVIGATOR_VERSION || whatBrowserAmI.brand.Opera.OPR_NAVIGATOR_VERSION
        );
        return true;
    };
};
