goog.provide( 'whatBrowserAmI.platform.PlayStationPortable.is' );
goog.provide( 'whatBrowserAmI.platform.PlayStationPortable.detect' );

/*----------------------------------------------------------------------------//
 *  PlayStation Portable
 *    https://github.com/chitoku-k/SystemInfo/blob/master/systeminfo.js
 *    http://www.jp.playstation.com/psp/dl/pdf/InternetBrowser_ContentGuideline-J_500.pdf
 *    User-Agent: Mozilla/4.0 (PSP (PlayStation Portable); 2.00)
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.PlayStationPortable = {};

/** @return {boolean} */
whatBrowserAmI.platform.PlayStationPortable.is = function(){
    return p_strPlatform === 'PSP';
};

/** @return {boolean|void} */
whatBrowserAmI.platform.PlayStationPortable.detect = function(){
    if( whatBrowserAmI.platform.PlayStationPortable.is() ){
        p_setPlatform(
            PLATFORM.PlayStationPortable,
            p_getVersionString( p_strUserAgent, '(PlayStation Portable); ' ),
            DEVICE_TYPE.GAME
        );
        p_setEngine( ENGINE.NetFront, 3.2 ); // DHTML ブラウザではないので 3.3 未満、リリース時期から推測
        return true;
    };
};
