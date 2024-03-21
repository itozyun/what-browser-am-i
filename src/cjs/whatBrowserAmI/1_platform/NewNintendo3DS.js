goog.provide( 'whatBrowserAmI.platform.NewNintendo3DS.is' );
goog.provide( 'whatBrowserAmI.platform.NewNintendo3DS.detect' );

goog.require( 'whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  New Nintendo 3DS
 *    [!] iPhone より先に判定すること
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:536 | 8.1.0-0J -
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.NewNintendo3DS = {};

/** @return {boolean} */
whatBrowserAmI.platform.NewNintendo3DS.is = function(){
    return p_strPlatform === 'New Nintendo 3DS' ||
           ( p_hasSubstring( p_strUserAgent, 'iPhone OS 6_0' ) && p_screenWidth === 320 && p_screenHeight === 240 );
};

/**
 * @return {boolean|void}
 */
whatBrowserAmI.platform.NewNintendo3DS.detect = function(){
    if( whatBrowserAmI.platform.NewNintendo3DS.is() ){
        p_setPlatform( PLATFORM.NewNintendo3DS, whatBrowserAmI.platform.Nintendo3DS.NINTENDO_BROWSER_NAVIGATOR_VERSION, DEVICE_TYPE.GAME );
        return true;
    };
};
