goog.provide( 'whatBrowserAmI.platform.WindowsCE.is' );
goog.provide( 'whatBrowserAmI.platform.WindowsCE.detect' );

goog.require( 'whatBrowserAmI.engine.Trident.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  Windows CE
 *
 *    https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%AE%E3%82%A2#%E3%82%B7%E3%82%B0%E3%83%9E%E3%83%AA%E3%82%AA%E3%83%B3%EF%BC%88sigmarion%EF%BC%89
 *      > sigmarion II(IE4)
 *      >   搭載OSはWindows CE 3.0（Windows for Handheld PC 2000）
 *      > sigmarion III(IE5)
 *      >   搭載OSはWindows CE.NET 4.1
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.WindowsCE = {};

/** @const {boolean} */
whatBrowserAmI.platform.WindowsCE.is = function(){
    return p_strPlatform === 'WinCE';
};

/** @return {boolean|void} */
whatBrowserAmI.platform.WindowsCE.detect = function(){
    if( whatBrowserAmI.platform.WindowsCE.is() ){
        p_setPlatform(
            PLATFORM.WindowsCE,
            whatBrowserAmI.engine.Trident.IMPLEMENT_VERSION < 5 ? 3.0 : 4.1,
            DEVICE_TYPE.PDA
        );
        return true;
    };
};
