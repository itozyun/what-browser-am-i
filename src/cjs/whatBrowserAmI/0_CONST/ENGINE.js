goog.provide( 'whatBrowserAmI.ENGINE' );

goog.require( 'whatBrowserAmI.DEFINE.MINIFY' );

/**
 *  DHTML ブラウザと Flash Player をサポートするブラウザ
 * 
 *  めくるめく粗挽きWebブラウザエンジンの世界
 *    https://qiita.com/okuoku/items/9c942a0732e0f7cddc3a
 * 
 * @enum {string|number} */
whatBrowserAmI.ENGINE = {
    Unknown          : whatBrowserAmI.DEFINE.MINIFY ?  0 : '',
    Netscape         : whatBrowserAmI.DEFINE.MINIFY ?  1 : 'Netscape',
    Trident          : whatBrowserAmI.DEFINE.MINIFY ?  2 : 'Trident',
    Trident_Mobile   : whatBrowserAmI.DEFINE.MINIFY ?  3 : 'TridentMobile',
    Trident_Pocket   : whatBrowserAmI.DEFINE.MINIFY ?  4 : 'TridentPocket', // ?
    EdgeHTML         : whatBrowserAmI.DEFINE.MINIFY ?  5 : 'EdgeHTML',
    Edge_Mobile      : whatBrowserAmI.DEFINE.MINIFY ?  6 : 'EdgeMobile',
    Tasman           : whatBrowserAmI.DEFINE.MINIFY ?  7 : 'Tasman',
    Presto           : whatBrowserAmI.DEFINE.MINIFY ?  8 : 'Presto',
    Presto_Mobile    : whatBrowserAmI.DEFINE.MINIFY ?  9 : 'PrestoMobile',
    Opera_Mini       : whatBrowserAmI.DEFINE.MINIFY ? 10 : 'OperaMini',
    Gecko            : whatBrowserAmI.DEFINE.MINIFY ? 11 : 'Gecko',
    Fennec           : whatBrowserAmI.DEFINE.MINIFY ? 12 : 'Fennec',
    Goanna           : whatBrowserAmI.DEFINE.MINIFY ? 13 : 'Goanna',
    KHTML            : whatBrowserAmI.DEFINE.MINIFY ? 14 : 'KHTML',
    WebKit           : whatBrowserAmI.DEFINE.MINIFY ? 15 : 'WebKit',
    Safari_Mobile    : whatBrowserAmI.DEFINE.MINIFY ? 16 : 'SafariMobile',
    iOS_WebView      : whatBrowserAmI.DEFINE.MINIFY ? 17 : 'iOSWebView',
    NetFront         : whatBrowserAmI.DEFINE.MINIFY ? 18 : 'NetFront',
    iCab             : whatBrowserAmI.DEFINE.MINIFY ? 19 : 'iCab',
    Chromium         : whatBrowserAmI.DEFINE.MINIFY ? 20 : 'Chromium',
    Android_WebView  : whatBrowserAmI.DEFINE.MINIFY ? 21 : 'AndroidWebView',
    Chromium_Mobile  : whatBrowserAmI.DEFINE.MINIFY ? 22 : 'ChromiumMobile',
    Samsung_Internet : whatBrowserAmI.DEFINE.MINIFY ? 23 : 'SamsungInternet',
    Qt_WebEngine     : whatBrowserAmI.DEFINE.MINIFY ? 24 : 'QtWebEngine',
    Qt_WebKit        : whatBrowserAmI.DEFINE.MINIFY ? 25 : 'QtWebKit',
    UCWEB            : whatBrowserAmI.DEFINE.MINIFY ? 26 : 'UCWEB',
    Sony             : whatBrowserAmI.DEFINE.MINIFY ? 27 : 'Sony',
    // https://www.ekioh.com/flow-browser/
    flow             : whatBrowserAmI.DEFINE.MINIFY ? 28 : 'flow',
    // 
    Servo            : whatBrowserAmI.DEFINE.MINIFY ? 29 : 'Servo',
    // http://serenityos.org/happy/1st/
    Serenity         : whatBrowserAmI.DEFINE.MINIFY ? 30 : 'Serenity',
    // https://github.com/esrille/escudo
    Escudo           : whatBrowserAmI.DEFINE.MINIFY ? 31 : 'Escudo',
    // https://github.com/maekawatoshiki/naglfar
    Naglfar          : whatBrowserAmI.DEFINE.MINIFY ? 32 : 'Naglfar',
    // http://www.litehtml.com/
    Litehtml         : whatBrowserAmI.DEFINE.MINIFY ? 33 : 'Litehtml',
    // https://lexbor.com/
    lexbor           : whatBrowserAmI.DEFINE.MINIFY ? 34 : 'lexbor'
};
