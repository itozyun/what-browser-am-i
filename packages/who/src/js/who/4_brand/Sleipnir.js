goog.provide( 'who.brand.Sleipnir.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Sleipnir.is' );
goog.provide( 'who.brand.Sleipnir.detect' );
goog.provide( 'who.brand.Sleipnir.isOnIOS' );
goog.provide( 'who.brand.Sleipnir.isOnAndroid' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Sleipnir
 */

/** @const {string} */
who.brand.Sleipnir.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Sleipnir/' );

/** @const {boolean} */
who.brand.Sleipnir.isOnIOS = !!window.FNRBrowser;

/**
 * https://twitter.com/itozyun/status/1293633829647708160
 * @const {boolean}
 */
who.brand.Sleipnir.isOnAndroid = who.env.strPlatformIsLinuxCPU &&
                        (function(){
                            for( var k in window ){
                                if( who.util.startWith( k, 'SlexAPI_' ) ) return true;
                            };
                        })();

/*----------------------------------------------------------------------------//
 *  Sleipnir
 */
/** @return {boolean} */
who.brand.Sleipnir.is = function(){
    return !!who.brand.Sleipnir.NAVIGATOR_VERSION ||
           who.brand.Sleipnir.isOnIOS || who.brand.Sleipnir.isOnAndroid;
};

/** @return {boolean|void} */
who.brand.Sleipnir.detect = function(){
    if( who.brand.Sleipnir.is() ){
        who.base.setBrand( iAm.EnumBrand.Sleipnir, who.brand.Sleipnir.NAVIGATOR_VERSION );
        return true;
    };
};
