goog.provide( 'whatBrowserAmI.platform.PlayStation.is' );
goog.provide( 'whatBrowserAmI.platform.PlayStation.detect' );

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.PlayStation = {};

/*----------------------------------------------------------------------------//
 *  PlayStation 3
 *    https://ja.wikipedia.org/wiki/WebKit
 *      > バージョンの対応関係
 *      >   Webkit:531 | 4.10 -
 */

/**
 * @private
 * @const {boolean} */
var _isPlayStation3 = p_strPlatform === 'PlayStation 3';

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
var _isPlayStation4 = p_strPlatform === 'PlayStation 4';

/*----------------------------------------------------------------------------//
 *  PlayStation 5
 */

/**
 * @private
 * @const {boolean} */
var _isPlayStation5 = p_strPlatform === 'PlayStation 5';

/** @return {boolean} */
whatBrowserAmI.platform.PlayStation.is = function(){
    return _isPlayStation3 || _isPlayStation4 || _isPlayStation5;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.PlayStation.detect = function(){
    if( _isPlayStation3 ){
        p_setPlatform(
            PLATFORM.PS3,
            p_getVersionString( p_strUserAgent, 'PLAYSTATION 3; ' ) || p_getVersionString( p_strUserAgent, 'PLAYSTATION 3 '  ),
            DEVICE_TYPE.GAME
        );
        if( p_conpareVersion( p_platformVersion, '4.10' ) < 0 ){
            p_setEngine( ENGINE.Sony, p_platformVersion );
        };
        return true;
    } else if( _isPlayStation4 ){
        p_setPlatform( PLATFORM.PS4, p_getVersionString( p_strAppVersion, p_strPlatform + '/' ), DEVICE_TYPE.GAME );
        return true;
    } else if( _isPlayStation5 ){
        p_setPlatform( PLATFORM.PS5, p_getVersionString( p_strAppVersion, p_strPlatform + '/' ), DEVICE_TYPE.GAME );
        return true;
    };
};
