goog.provide( 'iAm.EnumEngine' );

goog.require( 'iAm.DEFINE.MINIFY' );

/**
 *  DHTML ブラウザと Flash Player をサポートするブラウザ
 * 
 *  めくるめく粗挽きWebブラウザエンジンの世界
 *    https://qiita.com/okuoku/items/9c942a0732e0f7cddc3a
 * 
 * @enum {string|number} */
iAm.EnumEngine = {
    Unknown          : iAm.DEFINE.MINIFY ?  0 : '',
    Netscape         : iAm.DEFINE.MINIFY ?  1 : 'Netscape',
    Trident          : iAm.DEFINE.MINIFY ?  2 : 'Trident',
    Trident_Mobile   : iAm.DEFINE.MINIFY ?  3 : 'TridentMobile',
    Trident_Pocket   : iAm.DEFINE.MINIFY ?  4 : 'TridentPocket', // ?
    EdgeHTML         : iAm.DEFINE.MINIFY ?  5 : 'EdgeHTML',
    Edge_Mobile      : iAm.DEFINE.MINIFY ?  6 : 'EdgeMobile',
    Tasman           : iAm.DEFINE.MINIFY ?  7 : 'Tasman',
    Presto           : iAm.DEFINE.MINIFY ?  8 : 'Presto',
    Presto_Mobile    : iAm.DEFINE.MINIFY ?  9 : 'PrestoMobile',
    Opera_Mini       : iAm.DEFINE.MINIFY ? 10 : 'OperaMini',
    Gecko            : iAm.DEFINE.MINIFY ? 11 : 'Gecko',
    Fennec           : iAm.DEFINE.MINIFY ? 12 : 'Fennec',
    Goanna           : iAm.DEFINE.MINIFY ? 13 : 'Goanna',
    KHTML            : iAm.DEFINE.MINIFY ? 14 : 'KHTML',
    WebKit           : iAm.DEFINE.MINIFY ? 15 : 'WebKit',
    Safari_Mobile    : iAm.DEFINE.MINIFY ? 16 : 'SafariMobile',
    iOS_WebView      : iAm.DEFINE.MINIFY ? 17 : 'iOSWebView',
    NetFront         : iAm.DEFINE.MINIFY ? 18 : 'NetFront',
    iCab             : iAm.DEFINE.MINIFY ? 19 : 'iCab',
    Chromium         : iAm.DEFINE.MINIFY ? 20 : 'Chromium',
    Android_WebView  : iAm.DEFINE.MINIFY ? 21 : 'AndroidWebView',
    Chromium_Mobile  : iAm.DEFINE.MINIFY ? 22 : 'ChromiumMobile',
    Samsung_Internet : iAm.DEFINE.MINIFY ? 23 : 'SamsungInternet',
    Qt_WebEngine     : iAm.DEFINE.MINIFY ? 24 : 'QtWebEngine',
    Qt_WebKit        : iAm.DEFINE.MINIFY ? 25 : 'QtWebKit',
    UCWEB            : iAm.DEFINE.MINIFY ? 26 : 'UCWEB',
    Sony             : iAm.DEFINE.MINIFY ? 27 : 'Sony',
    // https://www.ekioh.com/flow-browser/
    flow             : iAm.DEFINE.MINIFY ? 28 : 'flow',
    // 
    Servo            : iAm.DEFINE.MINIFY ? 29 : 'Servo',
    // http://serenityos.org/happy/1st/
    Serenity         : iAm.DEFINE.MINIFY ? 30 : 'Serenity',
    // https://github.com/esrille/escudo
    Escudo           : iAm.DEFINE.MINIFY ? 31 : 'Escudo',
    // https://github.com/maekawatoshiki/naglfar
    Naglfar          : iAm.DEFINE.MINIFY ? 32 : 'Naglfar',
    // http://www.litehtml.com/
    Litehtml         : iAm.DEFINE.MINIFY ? 33 : 'Litehtml',
    // https://lexbor.com/
    lexbor           : iAm.DEFINE.MINIFY ? 34 : 'lexbor'
};
