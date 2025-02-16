goog.provide( 'who.platform.NintendoDS.is' );
goog.provide( 'who.platform.NintendoDS.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Nintendo DS
 *    https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDS%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC
 *    https://x.com/itozyun/status/1756757490992328862
 */

/** @return {boolean} */
who.platform.NintendoDS.is = function(){
    return p_strPlatform === 'Nitro';
};

/**
 * @return {boolean|void}
 */
who.platform.NintendoDS.detect = function(){
    if( who.platform.NintendoDS.is() ){
        p_setPlatform( EnumPlatform.NINTENDO_DS$TM );
        p_setDevice( EnumDevice.NintendoDS, undefined, EnumDeviceType.GAME );
        p_setEngine( EnumEngine.Presto_Mobile, 8.5 );
        return true;
    };
};
