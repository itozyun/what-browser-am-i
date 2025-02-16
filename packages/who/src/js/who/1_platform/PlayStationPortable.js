goog.provide( 'who.platform.PlayStationPortable.is' );
goog.provide( 'who.platform.PlayStationPortable.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  PlayStation Portable
 *    https://github.com/chitoku-k/SystemInfo/blob/master/systeminfo.js
 *    http://www.jp.playstation.com/psp/dl/pdf/InternetBrowser_ContentGuideline-J_500.pdf
 *    User-Agent: Mozilla/4.0 (PSP (PlayStation Portable); 2.00)
 */

/** @return {boolean} */
who.platform.PlayStationPortable.is = function(){
    return p_strPlatform === 'PSP';
};

/** @return {boolean|void} */
who.platform.PlayStationPortable.detect = function(){
    if( who.platform.PlayStationPortable.is() ){
        p_setPlatform(
            EnumPlatform.PlayStation$RPortable,
            p_getVersionString( p_strUserAgent, '(PlayStation Portable); ' )
        );
        p_setDevice( EnumDevice.PlayStationPortable, undefined, EnumDeviceType.GAME );
        p_setEngine( EnumEngine.NetFront, 3.2 ); // DHTML ブラウザではないので 3.3 未満、リリース時期から推測
        return true;
    };
};
