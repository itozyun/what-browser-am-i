goog.provide( 'who.platform.NintendoDSi.is' );
goog.provide( 'who.platform.NintendoDSi.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Nintendo DSi
 *    https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDSi%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC
 *      > 2008年11月1日配信開始版：Opera/9.50（Nintendo DSi; Opera/446; U; ja）
 *                                                                 ^^^: platformVersion
 *      > 2009年7月29日配信開始版：Opera/9.50（Nintendo DSi; Opera/507; U; ja）
 */

/** @return {boolean} */
who.platform.NintendoDSi.is = function(){
    return who.env.strPlatform === 'Nintendo DSi';
};

/**
 * @return {boolean|void}
 */
who.platform.NintendoDSi.detect = function(){
    if( who.platform.NintendoDSi.is() ){
        who.base.setPlatform(
            iAm.EnumPlatform.NINTENDO_DSi$TM,
            who.util.getVersionString( who.env.strUserAgent, who.env.strPlatform + '; Opera/' )
        );
        who.base.setDevice( iAm.EnumDevice.NintendoDSi, undefined, iAm.EnumDeviceType.Game );
        who.base.setEngine( iAm.EnumEngine.Presto_Mobile, 9.5 );
        return true;
    };
};
