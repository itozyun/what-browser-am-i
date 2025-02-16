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
    return p_strPlatform === 'New Nintendo 3DS' ||
           ( p_hasSubstring( p_strUserAgent, 'iPhone OS 6_0' ) && p_screenWidth === 320 && p_screenHeight === 240 );
};

/**
 * @return {boolean|void}
 */
who.platform.NewNintendo3DS.detect = function(){
    if( who.platform.NewNintendo3DS.is() ){
        p_setPlatform( EnumPlatform.New_NINTENDO_3DS$TM, who.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION );
        p_setDevice( EnumDevice.NewNintendo3DS, undefined, EnumDeviceType.GAME );
        return true;
    };
};
