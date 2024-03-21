goog.provide( 'whatBrowserAmI.platform.PlayStationVita.is' );
goog.provide( 'whatBrowserAmI.platform.PlayStationVita.detect' );

/*----------------------------------------------------------------------------//
 *  PlayStation Vita
 *    http://d.hatena.ne.jp/nakamura001/20111221/1324486445
 *      > Mozilla/5.0 (PlayStation Vita 1.50) AppleWebKit/531.22.8 (KHTML, like Gecko) Silk/3.2
 *                                      ^^^^
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:531 | 1.00 - 1.81
 *      >   Webkit:536 | 2.00 - 3.20
 *      >   Webkit:537 | 3.30 -
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.PlayStationVita = {};

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.PlayStationVita = {};

/** @return {boolean} */
whatBrowserAmI.platform.PlayStationVita.is = function(){
    return p_strPlatform === 'PlayStation Vita';
};

/** @return {boolean|void} */
whatBrowserAmI.platform.PlayStationVita.detect = function(){
    if( whatBrowserAmI.platform.PlayStationVita.is() ){
        p_setPlatform(
            PLATFORM.PlayStationVita,
            p_getVersionString( p_strAppVersion, p_strPlatform + ' ' ),
            DEVICE_TYPE.GAME
        );
        return true;
    };
};
