goog.provide( 'who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );
goog.provide( 'who.platform.Nintendo3DS.is' );
goog.provide( 'who.platform.Nintendo3DS.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Nintendo 3DS
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:534 | 2.0.0-2J ~ 9.5.0-22J
 *      >   Webkit:535 | 9.5.0-23J ~
 */



/** @const {string} */
who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'NintendoBrowser/' );

/** @return {boolean} */
who.platform.Nintendo3DS.is = function(){
    return p_strPlatform === 'Nintendo 3DS';
};

/**
 * @return {boolean|void}
 */
who.platform.Nintendo3DS.detect = function(){
    if( who.platform.Nintendo3DS.is() ){
        p_setPlatform( EnumPlatform.NINTENDO_3DS$TM, who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION );
        p_setDevice( EnumDevice.Nintendo3DS, undefined, EnumDeviceType.GAME );
        p_setEngine( EnumEngine.WebKit, p_numberWebKit || 535 );
        p_setBrand( EnumBrand.NetFront$R_Browser_NX, who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION );
        return true;
    };
};
