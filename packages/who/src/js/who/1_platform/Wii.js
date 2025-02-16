goog.provide( 'who.platform.Wii.is' );
goog.provide( 'who.platform.Wii.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.Presto.operaObject' );

/*----------------------------------------------------------------------------//
 *  Wii
 *    https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB
 *      > 2007年 4月12日版：Opera/9.10（Nintendo Wii; U; ; 1621; ja）
 *      > 2007年10月10日版：Opera/9.30（Nintendo Wii; U; ; 2047-7; ja）
 *      > 2009年 9月 1日版：Opera/9.30 (Nintendo Wii; U; ; 3642; ja)
 */

/** @return {boolean} */
who.platform.Wii.is = function(){
    var operaObject = who.engine.Presto.operaObject;

    return !!operaObject && !!operaObject.wiiremote; // p_strPlatform === 'Nintendo Wii'
};

/**
 * @return {boolean|void}
 */
who.platform.Wii.detect = function(){
    if( who.platform.Wii.is() ){
        p_setPlatform(
            EnumPlatform.Wii$TM,
            p_getVersionString( p_strAppVersion, p_strPlatform + '; U; ; ' )
        );
        p_setDevice( EnumDevice.Wii, undefined, EnumDeviceType.GAME );
        return true;
    };
};
