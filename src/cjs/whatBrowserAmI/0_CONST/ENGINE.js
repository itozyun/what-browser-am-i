goog.provide( 'whatBrowserAmI.ENGINE' );

goog.require( 'whatBrowserAmI' );
goog.require( 'whatBrowserAmI.DEFINE.MINIFY' );

/**
 *  DHTML ブラウザと Flash Player をサポートするブラウザ
 * 
 *  めくるめく粗挽きWebブラウザエンジンの世界
 *    https://qiita.com/okuoku/items/9c942a0732e0f7cddc3a
 * 
 * @enum {string|number} */
whatBrowserAmI.ENGINE = {
    Unknown        : whatBrowserAmI.DEFINE.MINIFY ?  0 : 'UnknownEngine',
    Netscape       : whatBrowserAmI.DEFINE.MINIFY ?  1 : 'Netscape',
    Trident        : whatBrowserAmI.DEFINE.MINIFY ?  2 : 'Trident',
    TridentMobile  : whatBrowserAmI.DEFINE.MINIFY ?  3 : 'TridentMobile',
    TridentPocket  : whatBrowserAmI.DEFINE.MINIFY ?  4 : 'TridentPocket', // ?
    EdgeHTML       : whatBrowserAmI.DEFINE.MINIFY ?  5 : 'EdgeHTML',
    EdgeMobile     : whatBrowserAmI.DEFINE.MINIFY ?  6 : 'EdgeMobile',
    Tasman         : whatBrowserAmI.DEFINE.MINIFY ?  7 : 'Tasman',
    Presto         : whatBrowserAmI.DEFINE.MINIFY ?  8 : 'Presto',
    PrestoMobile   : whatBrowserAmI.DEFINE.MINIFY ?  9 : 'PrestoMobile',
    OperaMini      : whatBrowserAmI.DEFINE.MINIFY ? 10 : 'OperaMini',
    Gecko          : whatBrowserAmI.DEFINE.MINIFY ? 11 : 'Gecko',
    Fennec         : whatBrowserAmI.DEFINE.MINIFY ? 12 : 'Fennec',
    Goanna         : whatBrowserAmI.DEFINE.MINIFY ? 13 : 'Goanna',
    KHTML          : whatBrowserAmI.DEFINE.MINIFY ? 14 : 'KHTML',
    WebKit         : whatBrowserAmI.DEFINE.MINIFY ? 15 : 'WebKit',
    SafariMobile   : whatBrowserAmI.DEFINE.MINIFY ? 16 : 'SafariMobile',
    iOSWebView     : whatBrowserAmI.DEFINE.MINIFY ? 17 : 'iOSWebView',
    NetFront       : whatBrowserAmI.DEFINE.MINIFY ? 18 : 'NetFront',
    iCab           : whatBrowserAmI.DEFINE.MINIFY ? 19 : 'iCab',
    Chromium       : whatBrowserAmI.DEFINE.MINIFY ? 20 : 'Chromium',
    AndroidWebView : whatBrowserAmI.DEFINE.MINIFY ? 21 : 'AndroidWebView',
    ChromiumMobile : whatBrowserAmI.DEFINE.MINIFY ? 22 : 'ChromiumMobile',
    Samsung        : whatBrowserAmI.DEFINE.MINIFY ? 23 : 'Samsung',
    UCWEB          : whatBrowserAmI.DEFINE.MINIFY ? 24 : 'UCWEB',
    Sony           : whatBrowserAmI.DEFINE.MINIFY ? 25 : 'Sony',
    // https://www.ekioh.com/flow-browser/
    flow           : whatBrowserAmI.DEFINE.MINIFY ? 26 : 'flow',
    // 
    Servo          : whatBrowserAmI.DEFINE.MINIFY ? 27 : 'Servo',
    // http://serenityos.org/happy/1st/
    Serenity       : whatBrowserAmI.DEFINE.MINIFY ? 28 : 'Serenity',
    // https://github.com/esrille/escudo
    Escudo         : whatBrowserAmI.DEFINE.MINIFY ? 29 : 'Escudo',
    // https://github.com/maekawatoshiki/naglfar
    Naglfar        : whatBrowserAmI.DEFINE.MINIFY ? 30 : 'Naglfar',
    // http://www.litehtml.com/
    Litehtml       : whatBrowserAmI.DEFINE.MINIFY ? 31 : 'Litehtml',
    // https://lexbor.com/
    lexbor         : whatBrowserAmI.DEFINE.MINIFY ? 32 : 'lexbor'
};
