goog.provide( 'whatBrowserAmI.platform.WiiU.is' );
goog.provide( 'whatBrowserAmI.platform.WiiU.detect' );

goog.require( 'whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  WiiU
 *    https://www.nintendo.co.jp/hardware/wiiu/internetbrowser/index.html
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:534 | 2.1.0J - 3.1.0J
 *      >   Webkit:536 | 4.0.0J -
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.WiiU = {};

/** @return {boolean} */
whatBrowserAmI.platform.WiiU.is = function(){
    return !!window.wiiu; // p_strPlatform === 'Nintendo WiiU'
};

/**
 * @return {boolean|void}
 */
whatBrowserAmI.platform.WiiU.detect = function(){
    if( whatBrowserAmI.platform.WiiU.is() ){
        // WebKit 534 と 536 の判定に使う
        var hasWebkitCancelAnimationFrame = !!window.webkitCancelAnimationFrame;
        var versionNintendoBrowser = whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION;

        if( versionNintendoBrowser ){
            p_setPlatform( PLATFORM.WiiU, versionNintendoBrowser, DEVICE_TYPE.GAME );
        } else {
        // https://blog.gutyan.jp/entry/2015/01/31/NintendoBrowser
        //   > Uブラウザには New3DS 以上のUA切替機能がある。
        //   > platform 始め UA 以外の navigator のプロパティはいずれの場合も変更されない。
            p_setPlatform( PLATFORM.WiiU, hasWebkitCancelAnimationFrame ? 4 : 2.1, DEVICE_TYPE.GAME );
            p_isPcSiteRequested = p_hasSubstring( p_strAppVersion, 'Macintosh;' ) ||
                                         ( p_hasSubstring( p_strAppVersion, 'Windows NT' ) && !p_hasSubstring( p_strAppVersion, 'Touch' ) );
        };
        p_setEngine(
            ENGINE.WebKit,
            p_getVersionString( p_strAppVersion, 'AppleWebKit/' ) || ( hasWebkitCancelAnimationFrame ? 536 : 534 )
        );
        p_setBrand( BRAND.NetFrontNX, 3 );
        return true;
    };
};
