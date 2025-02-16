goog.provide( 'who.platform.PlayStationVita.is' );
goog.provide( 'who.platform.PlayStationVita.detect' );

goog.require( 'who.base' );

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

/** @return {boolean} */
who.platform.PlayStationVita.is = function(){
    return p_strPlatform === 'PlayStation Vita';
};

/** @return {boolean|void} */
who.platform.PlayStationVita.detect = function(){
    if( who.platform.PlayStationVita.is() ){
        p_setPlatform(
            EnumPlatform.PlayStation$RVita,
            p_getVersionString( p_strAppVersion, p_strPlatform + ' ' )
        );
        p_setDevice( EnumDevice.PlayStationVita, undefined, EnumDeviceType.GAME );
        return true;
    };
};
