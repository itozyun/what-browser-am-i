goog.provide( 'who.platform.NewNintendo3DS.is' );
goog.provide( 'who.platform.NewNintendo3DS.detect' );

goog.require( 'who.base' );
goog.require( 'who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  New Nintendo 3DS
 *    [!] iPhone より先に判定すること
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:536 | 8.1.0-0J -
 */

/** @return {boolean} */
who.platform.NewNintendo3DS.is = function(){
    return who.env.strPlatform === 'New Nintendo 3DS' ||
           ( who.util.hasSubstring( who.env.strUserAgent, 'iPhone OS 6_0' ) && who.env.screenWidth === 320 && who.env.screenHeight === 240 );
};

/**
 * @return {boolean|void}
 */
who.platform.NewNintendo3DS.detect = function(){
    if( who.platform.NewNintendo3DS.is() ){
        who.base.setPlatform( iAm.EnumPlatform.New_NINTENDO_3DS$TM, who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION );
        who.base.setDevice( iAm.EnumDevice.NewNintendo3DS, undefined, iAm.EnumDeviceType.Game );
        return true;
    };
};
