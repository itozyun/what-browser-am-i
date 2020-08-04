if( !brand ){
    // https://qiita.com/Ungaahhhh/items/980316d11c55acecbfa5
    // Edge のユーザーエージェントがいろいろとひどい
        if( strVersion =
            ( isEdgeHTML && getVersionString( strUserAgent, 'Edge/'   ) ) || // Win Edge
            getVersionString( strUserAgent, 'EdgA/'   ) || // Android
            versionEdgiOS || // iOS
            getVersionString( strUserAgent, 'Edg/'    )    // Chromium based Microsoft Edge(MSEdge)
        ){
            brand        = 'Edge';
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strAppVersion, 'Coast/' ) ){
            brand        = 'Coast';
            brandVersion = strVersion;
        } else if( is_iOSOperaTurbo ){
            brand        = 'OperaTurbo';
        } else if( strVersion = getVersionString( strAppVersion, 'OPT/' ) ){
            brand        = 'OperaTouch';
            brandVersion = strVersion;
            isPcMode     = isPcMode || !findString( strAppVersion, 'Mobile/' );
        } else 
    // https://himenaotaro.hatenablog.com/entry/20151011/1444564265
    // YJApp-IOS ユーザエージェント(User Agent)
        if( strVersion = getVersionString( strUserAgent.toLowerCase(), 'ybrowser/' ) ){
            brand        = 'Yahoo';
            brandVersion = strVersion;
        } else
        if( !isUCWEB && ( strVersion = getVersionString( strUserAgent, 'UCBrowser/' ) ) ){
            brand        = 'UC';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Silk/' ) ){
            brand        = 'Silk';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Vivaldi/' ) ){
            brand        = 'Vivaldi';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'QQBrowser/' ) ){
            brand        = 'QQ';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'YaBrowser/' ) ){
            brand        = 'Yandex';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'coc_coc_browser/' ) ){
            brand        = 'coccoc';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Camino/' ) ){
            brand        = 'Camino';
            brandVersion = strVersion;
        } else
        if( findString( strUserAgent, 'SE 2.X MetaSr 1.0' ) ){
            brand = 'Sogou';
        } else
    // https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference
    // バージョン 6 より前では、 Focus for Android は Android WebView によって実現されていたため、以下の UA 文字列形式を使用していました。
    // Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
    
        if( strVersion =
            versionFocus || getVersionString( strUserAgent, 'Klar/' ) ||
            // https://apps.apple.com/jp/app/firefox-focus-e3-83-97-e3-83-a9-e3-82-a4-e3-83-90-e3/id1055677337
            // iOS 12.2, Focus 8.1.2, (iOS 11.0以降)
            // https://en.wikipedia.org/wiki/Firefox_for_iOS#cite_note-10
            // Focus : FxiOS が 8.x にも拘わらず、iOS のバージョンが 11 以上、を使って判定
            // Firefox : FxiOS が 9.x 移行が、iSO 11+ 対応を持って判定
            ( parseFloat( versionFxiOS ) < 9 && maybe_iOSWebView && 11 <= parseFloat( platformVersion ) && versionFxiOS )
        ){
            brand        = 'Focus';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'AOLBUILD/' ) || getVersionString( strUserAgent, 'AOL/' ) || getVersionString( strUserAgent, 'AOL ' ) ){
            brand        = 'AOL';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'IceDragon/' ) ){
            brand        = 'IceDragon';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Iceweasel/' ) ){
            brand        = 'Iceweasel';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'TenFourFox/' ) ){
            brand        = 'ITenFourFox';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Waterfox/' ) ){
            brand        = 'Waterfox';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'GNUzilla/' ) ){
            brand        = 'GNUzilla';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'SeaMonkey/' ) ){
            brand        = 'SeaMonkey';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'PaleMoon/' ) ){
            brand        = 'PaleMoon';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Basilisk/' ) ){
            brand        = 'Basilisk';
            brandVersion = strVersion;
        } else
        if( ( strVersion = getVersionString( strUserAgent, 'Maxthon/' ) ||
                           getVersionString( strUserAgent, 'Maxthon ' ) ||
                           getVersionString( strUserAgent, 'MXiOS/' )
            ) || findString( strUserAgent, 'Maxthon' ) ){
            brand        = 'Maxthon';
            brandVersion = strVersion || 1;
        } else
        if( findString( strUserAgent, 'Avant Browser;' ) ){
            brand = 'Avant';
        } else
        if( strVersion = getVersionString( strUserAgent, 'Lunascape/' ) ){
            brand        = 'Lunascape';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Konqueror/' ) ){
            brand        = 'Konqueror';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Midori/' ) ){
            brand        = 'Midori';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'OmniWeb/' ) ){
            brand        = 'OmniWeb';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Roccat/' ) ){
            brand        = 'Roccat';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Epiphany/' ) ){
            brand        = 'Epiphany';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'WebPositive/' ) ){
            brand        = 'WebPositive';
            brandVersion = strVersion;
        } else
        if( ( strVersion = getVersionString( strUserAgent, 'Iron/' ) ) || findString( strUserAgent, ' Iron ' ) ){
            brand        = 'Iron';
            brandVersion = strVersion || ( hasChromeObject && versionChrome );
        } else
        if( strVersion = getVersionString( strUserAgent, 'Comodo Dragon/' ) ){
            brand        = 'ComodoDragon';
            brandVersion = strVersion;
        } else
        if( ( strVersion = getVersionString( strUserAgent, 'Brave/' ) ) || findString( strUserAgent, ' Brave ' ) || is_iOSBrave ){
            brand        = 'Brave';
            brandVersion = strVersion || ( hasChromeObject && versionChrome );
        } else
        if( strVersion = getVersionString( strUserAgent, 'Rockmelt/' ) ){
            brand        = 'Rockmelt';
            brandVersion = strVersion;
        } else
        if( ( strVersion = getVersionString( strUserAgent, 'Sleipnir/' ) ) || isSleipnir ){
            brand        = 'Sleipnir';
            if( strVersion ){
                brandVersion = strVersion;
            };
        } else
        if( is_iOSDolphin ){
            brand = 'Dolphin';
        } else
        if( strVersion = getVersionString( strUserAgent, 'Puffin/' ) ){
            brand        = 'Puffin';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Dooble/' ) ){
            brand        = 'Dooble';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Flock/' ) ){
            brand        = 'Flock';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Galeon/' ) ){
            brand        = 'Galeon';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Falkon/' ) ){
            brand        = 'Falkon';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'Iceape/' ) ){
            brand        = 'Iceape';
            brandVersion = strVersion;
        } else
        if( strVersion = getVersionString( strUserAgent, 'K-Meleon/' ) ){
            brand        = 'KMeleon';
            brandVersion = strVersion;
        } else
        if( strVersion = versionNX || getVersionString( strAppVersion, 'NX/' ) ){
            brand        = 'NetFrontNX';
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
            brand        = 'NN';
            brandVersion = strVersion;
        } else if( versionIris ){
            // http://archive.is/0trve
            // Mozilla/5.0 (Windows NT; U; en) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Iris/1.1.7 Safari/525.20
            brand        = 'Iris';
            brandVersion = strVersion;
        } else if( findString( strAppVersion, 'FBAN/' ) ){
            brand        = 'Facebook';
        } else if( strVersion = getVersionString( strAppVersion, 'Line/' ) ){
            brand        = 'LINE';
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strUserAgent, 'QtWebEngine/' ) ){
            brand        = 'QtWebEngine';
            brandVersion = strVersion;
        } else if( strVersion = getVersionString( strUserAgent, 'QtWebKit/' ) ){
            brand        = 'QtWebKit';
            brandVersion = strVersion;
        } else if( strVersion = versionFxiOS || ( isGecko && ( versionFirefox || engineVersion ) ) ){
            brand        = 'Firefox';
            brandVersion = strVersion;
        } else if( strVersion = versionPresto || versionOPR || versionOpera ){
            brand        = 'Opera';
            brandVersion = strVersion;
        } else if( isTrident ){
            brand        = 'IE';
            brandVersion = engineVersion;
        } else if( verSamsung ){
            brand        = engine;
            brandVersion = verSamsung;
        } else if( strVersion = versionCriOS ||
            ( hasChromeObject || ( maybeChromeWebView && isAndroidBrowser ) ) && versionChrome ){
            brand        = 'Chrome';
            brandVersion = strVersion;
        } else if( isAndroidBrowser && !isAndroidChromeWebView ){
            brand        = engine;
            brandVersion = engineVersion;
        } else if( maybe_iOSWebView && !deviceTypeIsTablet ){
            engine       = 'SafariMobile';
            brand        = 'Safari';
            brandVersion = platformVersion;
        } else if( !maybe_iOSWebView && !isAndroidChromeWebView && ( findString( strUserAgent, 'Safari' ) || verVersion ) ){
            brand = 'Safari';
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
        brand = brand || 'unknown';
    };
    