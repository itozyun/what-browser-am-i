goog.provide( 'whatBrowserAmI.platform.NintendoDSi.is' );
goog.provide( 'whatBrowserAmI.platform.NintendoDSi.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Nintendo DSi
 *    https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDSi%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC
 *      > 2008年11月1日配信開始版：Opera/9.50（Nintendo DSi; Opera/446; U; ja）
 *                                                                 ^^^: platformVersion
 *      > 2009年7月29日配信開始版：Opera/9.50（Nintendo DSi; Opera/507; U; ja）
 */

/** @return {boolean} */
whatBrowserAmI.platform.NintendoDSi.is = function(){
    return p_strPlatform === 'Nintendo DSi';
};

/**
 * @return {boolean|void}
 */
whatBrowserAmI.platform.NintendoDSi.detect = function(){
    if( whatBrowserAmI.platform.NintendoDSi.is() ){
        p_setPlatform(
            PLATFORM.NINTENDO_DSi$TM,
            p_getVersionString( p_strUserAgent, p_strPlatform + '; Opera/' )
        );
        p_setDevice( DEVICE.NintendoDSi, undefined, DEVICE_TYPE.GAME );
        p_setEngine( ENGINE.Presto_Mobile, 9.5 );
        return true;
    };
};
