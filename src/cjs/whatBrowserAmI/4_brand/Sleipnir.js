goog.provide( 'whatBrowserAmI.brand.Sleipnir.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Sleipnir.is' );
goog.provide( 'whatBrowserAmI.brand.Sleipnir.detect' );
goog.provide( 'whatBrowserAmI.brand.Sleipnir.isOnIOS' );
goog.provide( 'whatBrowserAmI.brand.Sleipnir.isOnAndroid' );


/*----------------------------------------------------------------------------//
 *  Sleipnir
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Sleipnir = {};

/** @const {string} */
whatBrowserAmI.brand.Sleipnir.NAVIGATOR_VERSION = p_getVersionString( p_strAppVersion, 'Sleipnir/' );

/** @const {boolean} */
whatBrowserAmI.brand.Sleipnir.isOnIOS = !!window.FNRBrowser;

/**
 * https://twitter.com/itozyun/status/1293633829647708160
 * @const {boolean}
 */
whatBrowserAmI.brand.Sleipnir.isOnAndroid = p_strPlatformIsLinuxCPU &&
                        (function(){
                            for( var k in window ){
                                if( p_startWith( k, 'SlexAPI_' ) ) return true;
                            };
                        })();

/*----------------------------------------------------------------------------//
 *  Sleipnir
 */
/** @return {boolean} */
whatBrowserAmI.brand.Sleipnir.is = function(){
    return !!whatBrowserAmI.brand.Sleipnir.NAVIGATOR_VERSION ||
           whatBrowserAmI.brand.Sleipnir.isOnIOS || whatBrowserAmI.brand.Sleipnir.isOnAndroid;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Sleipnir.detect = function(){
    if( whatBrowserAmI.brand.Sleipnir.is() ){
        p_setBrand( BRAND.Sleipnir, whatBrowserAmI.brand.Sleipnir.NAVIGATOR_VERSION );
        return true;
    };
};
