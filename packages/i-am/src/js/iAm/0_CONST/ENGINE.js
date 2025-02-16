goog.provide( 'who.ENGINE' );

goog.require( 'who.DEFINE.MINIFY' );

/**
 *  DHTML ブラウザと Flash Player をサポートするブラウザ
 * 
 *  めくるめく粗挽きWebブラウザエンジンの世界
 *    https://qiita.com/okuoku/items/9c942a0732e0f7cddc3a
 * 
 * @enum {string|number} */
who.ENGINE = {
    Unknown          : who.DEFINE.MINIFY ?  0 : '',
    Netscape         : who.DEFINE.MINIFY ?  1 : 'Netscape',
    Trident          : who.DEFINE.MINIFY ?  2 : 'Trident',
    Trident_Mobile   : who.DEFINE.MINIFY ?  3 : 'TridentMobile',
    Trident_Pocket   : who.DEFINE.MINIFY ?  4 : 'TridentPocket', // ?
    EdgeHTML         : who.DEFINE.MINIFY ?  5 : 'EdgeHTML',
    Edge_Mobile      : who.DEFINE.MINIFY ?  6 : 'EdgeMobile',
    Tasman           : who.DEFINE.MINIFY ?  7 : 'Tasman',
    Presto           : who.DEFINE.MINIFY ?  8 : 'Presto',
    Presto_Mobile    : who.DEFINE.MINIFY ?  9 : 'PrestoMobile',
    Opera_Mini       : who.DEFINE.MINIFY ? 10 : 'OperaMini',
    Gecko            : who.DEFINE.MINIFY ? 11 : 'Gecko',
    Fennec           : who.DEFINE.MINIFY ? 12 : 'Fennec',
    Goanna           : who.DEFINE.MINIFY ? 13 : 'Goanna',
    KHTML            : who.DEFINE.MINIFY ? 14 : 'KHTML',
    WebKit           : who.DEFINE.MINIFY ? 15 : 'WebKit',
    Safari_Mobile    : who.DEFINE.MINIFY ? 16 : 'SafariMobile',
    iOS_WebView      : who.DEFINE.MINIFY ? 17 : 'iOSWebView',
    NetFront         : who.DEFINE.MINIFY ? 18 : 'NetFront',
    iCab             : who.DEFINE.MINIFY ? 19 : 'iCab',
    Chromium         : who.DEFINE.MINIFY ? 20 : 'Chromium',
    Android_WebView  : who.DEFINE.MINIFY ? 21 : 'AndroidWebView',
    Chromium_Mobile  : who.DEFINE.MINIFY ? 22 : 'ChromiumMobile',
    Samsung_Internet : who.DEFINE.MINIFY ? 23 : 'SamsungInternet',
    Qt_WebEngine     : who.DEFINE.MINIFY ? 24 : 'QtWebEngine',
    Qt_WebKit        : who.DEFINE.MINIFY ? 25 : 'QtWebKit',
    UCWEB            : who.DEFINE.MINIFY ? 26 : 'UCWEB',
    Sony             : who.DEFINE.MINIFY ? 27 : 'Sony',
    // https://www.ekioh.com/flow-browser/
    flow             : who.DEFINE.MINIFY ? 28 : 'flow',
    // 
    Servo            : who.DEFINE.MINIFY ? 29 : 'Servo',
    // http://serenityos.org/happy/1st/
    Serenity         : who.DEFINE.MINIFY ? 30 : 'Serenity',
    // https://github.com/esrille/escudo
    Escudo           : who.DEFINE.MINIFY ? 31 : 'Escudo',
    // https://github.com/maekawatoshiki/naglfar
    Naglfar          : who.DEFINE.MINIFY ? 32 : 'Naglfar',
    // http://www.litehtml.com/
    Litehtml         : who.DEFINE.MINIFY ? 33 : 'Litehtml',
    // https://lexbor.com/
    lexbor           : who.DEFINE.MINIFY ? 34 : 'lexbor'
};
