goog.provide( 'who.platform.PlayStation.is' );
goog.provide( 'who.platform.PlayStation.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  PlayStation 3
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:531 | 4.10 -
 */

/**
 * @private
 * @const {boolean} */
var _isPlayStation3 = who.env.strPlatform === 'PlayStation 3';

/*----------------------------------------------------------------------------//
 *  PlayStation 4
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:536 | 1.00 - 1.76
 *      >   Webkit:537 | 2.00 -
 */

/**
 * @private
 * @const {boolean} */
var _isPlayStation4 = who.env.strPlatform === 'PlayStation 4';

/*----------------------------------------------------------------------------//
 *  PlayStation 5
 */

/**
 * @private
 * @const {boolean} */
var _isPlayStation5 = who.env.strPlatform === 'PlayStation 5';

/** @return {boolean} */
who.platform.PlayStation.is = function(){
    return _isPlayStation3 || _isPlayStation4 || _isPlayStation5;
};

/** @return {boolean|void} */
who.platform.PlayStation.detect = function(){
    if( _isPlayStation3 ){
        who.base.setPlatform(
            iAm.EnumPlatform.PlayStation$R3,
            who.util.getVersionString( who.env.strUserAgent, 'PLAYSTATION 3; ' ) || who.util.getVersionString( who.env.strUserAgent, 'PLAYSTATION 3 ' )
        );
        who.base.setDevice( iAm.EnumDevice.PlayStation, 3, iAm.EnumDeviceType.GAME );
        if( who.util.conpareVersion( who.result.platformVersion, '4.10' ) < 0 ){
            who.base.setEngine( iAm.EnumEngine.Sony, who.result.platformVersion );
        };
        return true;
    } else if( _isPlayStation4 ){
        who.base.setPlatform( iAm.EnumPlatform.PlayStation$R4, who.util.getVersionString( who.env.strAppVersion, who.env.strPlatform + '/' ) );
        who.base.setDevice( iAm.EnumDevice.PlayStation, 4, iAm.EnumDeviceType.GAME );
        return true;
    } else if( _isPlayStation5 ){
        who.base.setPlatform( iAm.EnumPlatform.PlayStation$R5, who.util.getVersionString( who.env.strAppVersion, who.env.strPlatform + '/' ) );
        who.base.setDevice( iAm.EnumDevice.PlayStation, 5, iAm.EnumDeviceType.GAME );
        return true;
    };
};
