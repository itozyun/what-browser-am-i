goog.provide( 'who.platform.WiiU.is' );
goog.provide( 'who.platform.WiiU.detect' );

goog.require( 'who.base' );
goog.require( 'who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  WiiU
 *    https://www.nintendo.co.jp/hardware/wiiu/internetbrowser/index.html
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:534 | 2.1.0J - 3.1.0J
 *      >   Webkit:536 | 4.0.0J -
 */

/** @return {boolean} */
who.platform.WiiU.is = function(){
    return !!window.wiiu; // who.env.strPlatform === 'Nintendo WiiU'
};

/**
 * @return {boolean|void}
 */
who.platform.WiiU.detect = function(){
    if( who.platform.WiiU.is() ){
        // WebKit 534 と 536 の判定に使う
        var hasWebkitCancelAnimationFrame = !!window.webkitCancelAnimationFrame;
        var versionNintendoBrowser = who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION;

        if( versionNintendoBrowser ){
            who.base.setPlatform( iAm.EnumPlatform.WiiU$TM, versionNintendoBrowser );
        } else {
        // https://blog.gutyan.jp/entry/2015/01/31/NintendoBrowser
        //   > Uブラウザには New3DS 以上のUA切替機能がある。
        //   > platform 始め UA 以外の navigator のプロパティはいずれの場合も変更されない。
            who.base.setPlatform( iAm.EnumPlatform.WiiU$TM, hasWebkitCancelAnimationFrame ? 4 : 2.1 );
            who.result.isPcSiteRequested = who.util.hasSubstring( who.env.strAppVersion, 'Macintosh;' ) ||
                                         ( who.util.hasSubstring( who.env.strAppVersion, 'Windows NT' ) && !who.util.hasSubstring( who.env.strAppVersion, 'Touch' ) );
        };
        who.base.setDevice( iAm.EnumDevice.WiiU, undefined, iAm.EnumDeviceType.GAME );
        who.base.setEngine(
            iAm.EnumEngine.WebKit,
            who.util.getVersionString( who.env.strAppVersion, 'AppleWebKit/' ) || ( hasWebkitCancelAnimationFrame ? 536 : 534 )
        );
        who.base.setBrand( iAm.EnumBrand.NetFront$R_Browser_NX, 3 );
        return true;
    };
};
