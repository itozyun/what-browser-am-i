goog.provide( 'whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.platform.Nintendo3DS.is' );
goog.provide( 'whatBrowserAmI.platform.Nintendo3DS.detect' );

/*----------------------------------------------------------------------------//
 *  Nintendo 3DS
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:534 | 2.0.0-2J ~ 9.5.0-22J
 *      >   Webkit:535 | 9.5.0-23J ~
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.Nintendo3DS = {};

/** @const {string} */
whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'NintendoBrowser/' );

/** @return {boolean} */
whatBrowserAmI.platform.Nintendo3DS.is = function(){
    return p_strPlatform === 'Nintendo 3DS';
};

/**
 * @return {boolean|void}
 */
whatBrowserAmI.platform.Nintendo3DS.detect = function(){
    if( whatBrowserAmI.platform.Nintendo3DS.is() ){
        p_setPlatform( PLATFORM.Nintendo3DS, whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION, DEVICE_TYPE.GAME );
        p_setEngine( ENGINE.WebKit, p_numberWebKit || 535 );
        p_setBrand( BRAND.NetFrontNX, whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION );
        return true;
    };
};
