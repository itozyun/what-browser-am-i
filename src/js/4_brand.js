
if( !DEFINE_WHAT_BROWSER_AM_I__BRAND_ENABLED ){
    if( getVersionString( strAppVersion, 'OPT/' ) ){
        isPcSiteRequested = isPcSiteRequested || !findString( strAppVersion, 'Mobile/' );
    };
} else {
    if( !brand ){
    // https://qiita.com/Ungaahhhh/items/980316d11c55acecbfa5
    // Edge のユーザーエージェントがいろいろとひどい
        if( strVersion =
            ( isEdgeHTML && getVersionString( strUserAgent, 'Edge/'   ) ) || // Win Edge
            getVersionString( strUserAgent, 'EdgA/'   ) || // Android
            versionEdgiOS || // iOS
            getVersionString( strUserAgent, 'Edg/'    )    // Chromium based Microsoft Edge(MSEdge)
        ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Edge;
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strAppVersion, 'Coast/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Coast;
            brandVersion = strVersion;
        } else if( is_iOSOperaTurbo ){
            brand        = WHAT_BROWSER_AM_I__BRAND_OperaTurbo;
        } else if( strVersion = getVersionString( strAppVersion, 'OPT/' ) ){
            brand             = WHAT_BROWSER_AM_I__BRAND_OperaTouch;
            brandVersion      = strVersion;
            isPcSiteRequested = isPcSiteRequested || !findString( strAppVersion, 'Mobile/' );
        } else 
    // https://himenaotaro.hatenablog.com/entry/20151011/1444564265
    // YJApp-IOS ユーザエージェント(User Agent)
        if( strVersion = getVersionString( strUserAgent.toLowerCase(), 'ybrowser/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Yahoo;
            brandVersion = strVersion;
        } else
        if( !isUCWEB && ( strVersion = getVersionString( strUserAgent, 'UCBrowser/' ) ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_UC;
            brandVersion = strVersion;
        } else
        if( versionSilk ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Silk;
            brandVersion = versionSilk;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Vivaldi/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Vivaldi;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'QQBrowser/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_QQ;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'YaBrowser/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Yandex;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'coc_coc_browser/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_coccoc;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Camino/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Camino;
            brandVersion = strVersion;
        } else
        if( findString( strUserAgent, 'SE 2.X MetaSr 1.0' ) ){
            brand = WHAT_BROWSER_AM_I__BRAND_Sogou;
        } else
    // https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference
    // バージョン 6 より前では、 Focus for Android は Android WebView によって実現されていたため、以下の UA 文字列形式を使用していました。
    // Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
    
        if( strVersion =
            getVersionString( strUserAgent, 'Focus/' ) || getVersionString( strUserAgent, 'Klar/' ) ||
            // https://apps.apple.com/jp/app/firefox-focus-e3-83-97-e3-83-a9-e3-82-a4-e3-83-90-e3/id1055677337
            // iOS 12.2, Focus 8.1.2, (iOS 11.0以降)
            // https://en.wikipedia.org/wiki/Firefox_for_iOS#cite_note-10
            // Focus   : FxiOS が 8.x にも拘わらず、iOS のバージョンが 11 以上、を使って判定
            // Firefox : FxiOS が 9.x 以降が、iSO 11+ 対応を持って判定
            ( parseFloat( versionFxiOS ) < 9 && maybe_iOSWebView && 11 <= parseFloat( platformVersion ) && versionFxiOS )
        ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Focus;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'AOLBUILD/' ) || getVersionString( strUserAgent, 'AOL/' ) || getVersionString( strUserAgent, 'AOL ' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_AOL;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'IceDragon/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_IceDragon;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Iceweasel/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Iceweasel;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'TenFourFox/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_ITenFourFox;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Waterfox/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Waterfox;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'GNUzilla/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_GNUzilla;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'SeaMonkey/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_SeaMonkey;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'PaleMoon/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_PaleMoon;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Basilisk/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Basilisk;
            brandVersion = strVersion;
        } else
        if( ( strVersion = getVersionString( strUserAgent, 'Maxthon/' ) ||
                           getVersionString( strUserAgent, 'Maxthon ' ) ||
                           getVersionString( strUserAgent, 'MXiOS/' )
            ) || findString( strUserAgent, 'Maxthon' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Maxthon;
            brandVersion = strVersion || 1;
        } else
        if( findString( strUserAgent, 'Avant Browser;' ) ){
            brand = WHAT_BROWSER_AM_I__BRAND_Avant;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Konqueror/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Konqueror;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Midori/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Midori;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'OmniWeb/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_OmniWeb;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Roccat/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Roccat;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Epiphany/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Epiphany;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'WebPositive/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_WebPositive;
            brandVersion = strVersion;
        } else
        if( ( strVersion = getVersionString( strUserAgent, 'Iron/' ) ) || findString( strUserAgent, ' Iron ' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Iron;
            brandVersion = strVersion || ( hasChromeObject && versionChrome );
        } else
        if( strVersion = getVersionString( strUserAgent, 'Comodo Dragon/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_ComodoDragon;
            brandVersion = strVersion;
        } else
        if( ( strVersion = getVersionString( strUserAgent, 'Brave/' ) ) || findString( strUserAgent, ' Brave ' ) || is_iOSBrave ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Brave;
            brandVersion = strVersion || ( hasChromeObject && versionChrome );
        } else
        if( strVersion = getVersionString( strUserAgent, 'Rockmelt/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Rockmelt;
            brandVersion = strVersion;
        } else
        if( ( strVersion = getVersionString( strUserAgent, 'Sleipnir/' ) ) || isSleipnir_iOS || isSleipnirAndroid ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Sleipnir;
            if( strVersion ){
                brandVersion = strVersion;
            };
        } else
        if( is_iOSDolphin ){
            brand = WHAT_BROWSER_AM_I__BRAND_Dolphin;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Puffin/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Puffin;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Dooble/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Dooble;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Flock/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Flock;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Galeon/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Galeon;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Falkon/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Falkon;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Iceape/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Iceape;
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'K-Meleon/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_KMeleon;
            brandVersion = strVersion;
        } else
        if( strVersion = versionNX || getVersionString( strAppVersion, 'NX/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_NetFrontNX;
            brandVersion = strVersion;
        } else
    // Netscape Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:0.9.4.1) Gecko/20020508 Netscape6/6.2.3
    // Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.2) Gecko/20040804 Netscape/7.2 (ax)
    // Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.5) Gecko/20070321 Netscape/8.1.3
    // Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/20080219 Firefox/2.0.0.12 Navigator/9.0.0.6
        if( strVersion =
            getVersionString( strUserAgent, 'Netscape6/' ) || // NN6
            getVersionString( strUserAgent, 'Netscape/'  ) || // NN7-8
            getVersionString( strUserAgent, 'Navigator/' )    // NN9
        ){
            brand        = WHAT_BROWSER_AM_I__BRAND_NetscapeNavigator;
            brandVersion = strVersion;
        } else if( versionIris ){
            // http://archive.is/0trve
            // Mozilla/5.0 (Windows NT; U; en) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Iris/1.1.7 Safari/525.20
            brand        = WHAT_BROWSER_AM_I__BRAND_Iris;
            brandVersion = strVersion;
        // https://twitter.com/itozyun/status/1293709088501555200
        } else if( strVersion = getVersionString( strUserAgent, 'FBAV/' ) || findString( strAppVersion, 'FBAN/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Facebook;
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strAppVersion, 'Line/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_LINE;
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strUserAgent, 'QtWebEngine/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_QtWebEngine;
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strUserAgent, 'QtWebKit/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_QtWebKit;
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strUserAgent, 'DuckDuckGo/' ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_DuckDuckGo;
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strUserAgent, 'Lunascape/' ) || maybeLunascapeAndroid ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Lunascape;
            brandVersion = strVersion;
        } else if( strVersion = versionFxiOS || ( isGecko && ( versionFirefox || engineVersion ) ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Firefox;
            brandVersion = strVersion;
        } else if( isOperaGX ){
            brand        = WHAT_BROWSER_AM_I__BRAND_OperaGX;
            brandVersion = versionOPR;
        } else if( strVersion = versionPresto || versionOPR || versionOpera ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Opera;
            brandVersion = strVersion;
        } else if( isTrident ){
            brand        = WHAT_BROWSER_AM_I__BRAND_IE;
            brandVersion = engineVersion;
        } else if( verSamsung ){
            brand        = WHAT_BROWSER_AM_I__BRAND_SamsungInternet;
            brandVersion = verSamsung;
        } else if( strVersion = versionCriOS ||
            ( hasChromeObject || ( maybeChromeWebView && isAndroidBrowser ) ) && versionChrome ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Chrome;
            brandVersion = strVersion;
        } else if( isAndroidBrowser && !isAndroidChromeWebView ){
            brand        = WHAT_BROWSER_AM_I__BRAND_AndroidBrowser;
            brandVersion = engineVersion;
        } else if( maybe_iOSWebView && !deviceTypeIsTablet ){
            engine       = WHAT_BROWSER_AM_I__ENGINE_SafariMobile;
            brand        = WHAT_BROWSER_AM_I__BRAND_Safari;
            brandVersion = platformVersion;
        } else if( !maybe_iOSWebView && !isAndroidChromeWebView && ( findString( strUserAgent, 'Safari' ) || verVersion ) ){
            brand        = WHAT_BROWSER_AM_I__BRAND_Safari;
            brandVersion = verVersion || (
                            versionWebKit <   73    ? 0.8 :
                            versionWebKit <   85    ? 0.9 :
                            versionWebKit <  100    ? 1 :
                            versionWebKit <  125    ? 1.1 :
                            versionWebKit <  312    ? 1.2 :
                            versionWebKit <  412    ? 1.3 :
                            versionWebKit <= 419.3  ? 2 :
                            versionWebKit <= 525.13 ? 3 :
                            versionWebKit <= 525.25 ? 3.1 : 3.2 );
        };
        brand = brand || WHAT_BROWSER_AM_I__BRAND_unknown;
    };
};