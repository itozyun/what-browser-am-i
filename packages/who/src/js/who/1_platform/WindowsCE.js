goog.provide( 'who.platform.WindowsCE.is' );
goog.provide( 'who.platform.WindowsCE.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.Trident.IMPLEMENT_VERSION' );

/*----------------------------------------------------------------------------//
 *  Windows CE
 *
 *    https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%AE%E3%82%A2#%E3%82%B7%E3%82%B0%E3%83%9E%E3%83%AA%E3%82%AA%E3%83%B3%EF%BC%88sigmarion%EF%BC%89
 *      > sigmarion II(IE4)
 *      >   搭載OSはWindows CE 3.0（Windows for Handheld PC 2000）
 *      > sigmarion III(IE5)
 *      >   搭載OSはWindows CE.NET 4.1
 */

/** @return {boolean} */
who.platform.WindowsCE.is = function(){
    return who.env.strPlatform === 'WinCE';
};

/** @return {boolean|void} */
who.platform.WindowsCE.detect = function(){
    if( who.platform.WindowsCE.is() ){
        who.base.setPlatform(
            iAm.EnumPlatform.Windows_CE,
            who.engine.Trident.IMPLEMENT_VERSION < 5 ? 3.0 : 4.1,
            iAm.EnumDeviceType.PDA
        );
        return true;
    };
};
