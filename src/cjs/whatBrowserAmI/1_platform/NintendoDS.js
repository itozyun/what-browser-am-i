goog.provide( 'whatBrowserAmI.platform.NintendoDS.is' );
goog.provide( 'whatBrowserAmI.platform.NintendoDS.detect' );

/*----------------------------------------------------------------------------//
 *  Nintendo DS
 *    https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDS%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC
 *    https://x.com/itozyun/status/1756757490992328862
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.NintendoDS = {};

/** @return {boolean} */
whatBrowserAmI.platform.NintendoDS.is = function(){
    return p_strPlatform === 'Nitro';
};

/**
 * @return {boolean|void}
 */
whatBrowserAmI.platform.NintendoDS.detect = function(){
    if( whatBrowserAmI.platform.NintendoDS.is() ){
        p_setPlatform( PLATFORM.NintendoDS, 1, DEVICE_TYPE.GAME );
        p_setEngine( ENGINE.PrestoMobile, 8.5 );
        return true;
    };
};
