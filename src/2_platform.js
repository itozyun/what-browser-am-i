/*----------------------------------------------------------------------------//
 *  Nintendo DS
 */
if( strPlatform === 'Nitro' ){
    // https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDS%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC
    platform         = 'NDS';
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  Nintendo DSi
 */
if( strPlatform === 'Nintendo DSi' ){
    // https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDSi%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC
    // https://developers.whatismybrowser.com/useragents/explore/operating_platform/nintendo-dsi/
    platform         = 'NDSi';
    platformVersion  = versionOpera; // Opera/9.50 ... Opera/507
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  New 3DS
 */
if( strPlatform === 'New Nintendo 3DS' || ( findString( strUserAgent, 'iPhone OS 6_0' ) && screenW === 320 && screenH === 240 ) ){
    platform         = 'New3DS';
    platformVersion  = getVersionString( strUserAgent, 'NintendoBrowser/' );
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  3DS
 */
if( strPlatform === 'Nintendo 3DS' ){
    platform         = 'N3DS';
    platformVersion  = getVersionString( strUserAgent, 'Version/' );
    versionWebKit    = 535; // 534:2.0.0-2J - 9.5.0-22J, 9.5.0-23J -
    versionNX        = platformVersion;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  Nintendo Swicth
 */
if( strPlatform === 'Nintendo Swicth' ){
    platform         = 'Swicth';
    platformVersion  = getVersionString( strAppVersion, 'NintendoBrowser/' );
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  WiiU
 */
if( strPlatform === 'Nintendo WiiU' ){
    // https://www.nintendo.co.jp/hardware/wiiu/internetbrowser/index.html
    platform         = 'WiiU';
    platformVersion  = getVersionString( strAppVersion, 'NintendoBrowser/' );
    // https://blog.gutyan.jp/entry/2015/01/31/NintendoBrowser
    // UブラウザにはNew3DS以上のUA切替機能がある。
    // platform始めUA以外のnavigatorのプロパティはいずれの場合も変更されない。
    versionWebKit    = getVersionString( strAppVersion, 'AppleWebKit/' ); // 534:2.1.0J - 3.1.0J, 536:4.0.0J - 
    deviceTypeIsGame = true;
    // TODO isPcMode
} else
/*----------------------------------------------------------------------------//
 *  Wii
 */
if( strPlatform === 'Nintendo Wii' ){
    // https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB
    // 2007年 4月12日版：Opera/9.10（Nintendo Wii; U; ; 1621; ja）
    // 2007年10月10日版：Opera/9.30（Nintendo Wii; U; ; 2047-7; ja）
    // 2009年 9月 1日版：Opera/9.30 (Nintendo Wii; U; ; 3642; ja)
    platform         = 'Wii';
    platformVersion  = getVersionString( strUserAgent, 'Wii; U; ; ' );
    brand            = platform;
    brandVersion     = platformVersion;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  PlayStation Vita
 */
if( strVersion = getVersionString( strUserAgent, 'PlayStation Vita ' ) ){
    // http://d.hatena.ne.jp/nakamura001/20111221/1324486445
    // Mozilla/5.0 (PlayStation Vita 1.50) AppleWebKit/531.22.8 (KHTML, like Gecko) Silk/3.2
    platform         = 'PSVita';
    platformVersion  = strVersion;
    // versionWebKit = // 531, 536, 537
    brand            = platform;
    brandVersion     = strVersion;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  PSP
 */
if( strVersion = getVersionString( strUserAgent, '(PlayStation Portable); ' ) ){
    // https://github.com/chitoku-k/SystemInfo/blob/master/systeminfo.js
    // http://www.jp.playstation.com/psp/dl/pdf/InternetBrowser_ContentGuideline-J_500.pdf
    // User-Agent: Mozilla/4.0 (PSP (PlayStation Portable); 2.00)
    platform         = 'PSP';
    platformVersion  = strVersion;
    versionNetFront  = 3.3; // 多分
    brand            = platform;
    brandVersion     = strVersion;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  PLAYSTATION 3
 */
if( strVersion = getVersionString( strUserAgent, 'PLAYSTATION 3; ' ) || getVersionString( strUserAgent, 'PLAYSTATION 3 ' ) ){
    platform         = 'PS3';
    platformVersion  = strVersion;
    brand            = platform;
    brandVersion     = strVersion;
    if( conpareVersionString( '4.10', strVersion ) < 0 ){
        engine        = 'Sony';
        engineVersion = strVersion;
    };
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  XBox One
 */
if( findString( strUserAgent, 'Xbox One' ) ){
    platform         = 'XboxOne';
    platformVersion  = 1;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  XBox 360
 */
if( findString( strUserAgent, 'Xbox' ) ){
    platform         = 'Xbox360';
    platformVersion  = 1;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  Mylo2
 */
if( appVersion === 2 && findString( strUserAgent, 'Sony/COM2/' ) ){
    platform         = 'Mylo';
    platformVersion  = 2;
    versionNetFront  = 3.4;
    brand            = platform;
    brandVersion     = 2;
    deviceTypeIsPDA  = true;
} else
/*----------------------------------------------------------------------------//
 *  iOS
 */
if( fromString( strPlatform, 'iP' ) || versioniOSWithUC || versioniOSWithPuffin || is_iPadOsPcMode ){
    if( versioniOSWithPuffin ){
        platformVersion = versioniOSWithPuffin;
        switch( puffinDeviceModel.substr( 0, 4 ) ){
            case 'iPho' :
                device        = 'iPhone';
                deviceVersion = parseFloat( puffinDeviceModel.substr( 6 ) );
                deviceTypeIsPhone = true;
                break;
            case 'iPad' :
                device        = 'iPad';
                deviceVersion = parseFloat( puffinDeviceModel.substr( 4 ) );
                deviceTypeIsTablet = true;
                break;
            case 'iPod' :
                device        = 'iPod';
                deviceVersion = parseFloat( puffinDeviceModel.substr( 4 ) );
                deviceTypeIsMediaPlayer = true;
                break;
        };
    } else {
        if( versioniOSWithUC ){
            platformVersion = versioniOSWithUC;
        } else {
            platformVersion  = getVersionString( strAppVersion.split( '_' ).join( '.' ), 'OS ' );

            is_iOSOperaTurbo = !inObject( 'isSecureContext', window ); // createImageBitmap
            is_iOSDolphin    = inObject( 'enableWebGL', window );
            is_iOSBrave      = inObject( 'sameOrigin', window );
        };

        if( !platformVersion ) isPcMode = true;

        if( !platformVersion || isSleipnir ){ // Sleipnir は嘘のバージョンがUA文字列に設定されている
            platformVersion =
                // navigator[ 'mediaDevices'    ] ? 11.2 : // WebView では無効
                // https://github.com/BasqueVoIPMafia/cordova-plugin-iosrtc/issues/250#issuecomment-336240953
                window.PointerEvent        ? 13   :
                window.HTMLDataListElement ? 12.2 :
                Array.prototype.flat       ? 12   :
                navigator.sendBeacon       ? 11.3 :
                window.WebAssembly         ? 11.2 :
                window.HTMLMeterElement    ? 10.3 :
                window.Proxy               ? 10.2 :
                window.HTMLPictureElement  ?  9.3 :
                Number.isNaN               ?  9.2 :
                // http://uupaa.hatenablog.com/entry/2015/03/03/223344
                window.SharedWorker        ?
                    ( performance && performance.now ? 8.0 : 8.4 ) :
                docExecCmd                 ?  7.1 :
                window.webkitURL           ?  6.1 :
                window.Worker              ?  5.1 :
                int8Array                  ?  4.3 :
                AudioElement               ?  4.1 : 3.2;
        };

        dpRatio       = window.devicePixelRatio === 1;
        // 4:3 model
        v = screenW === screenH * 1.5 || screenW * 1.5 === screenH;

        if( fromString( strPlatform, 'iPhone' ) ){ // iPhone or iPhone Simulator
            device            = 'iPhone';
            deviceVersion     = v ? ( dpRatio ? { max : 3 } : { min : 4, max : 5 } ) : { max : 6 };
            deviceTypeIsPhone = true;
        } else if( fromString( strPlatform, 'iPad' ) || is_iPadOsPcMode ){ // iPad or iPad Simulator
            device             = 'iPad';
            deviceVersion      = dpRatio ? { max : 2 } : { min : 3 }; 
            deviceTypeIsTablet = true;
        } else if( fromString( strPlatform, 'iPod' ) ){
            device                  = 'iPod';
            deviceVersion           = v ? ( dpRatio ? { max : 3 } : 4 ) : { min : 5 };
            deviceTypeIsMediaPlayer = true;
        };
    };

    if( !versioniOSWithPuffin && // iPad iOS12.2 Puffin5.2.2 で fullscreenEnabled が存在の模様
        //!is_iOSOperaTurbo && !is_iOSDolphin &&
        //!versioniOSWithUC && !versionEdgiOS && !versionFxiOS && !versionFocus && 
        // ホーム画面から起動したWebページは navigator.standalone === true になっている。fullscreen API は無い。
        ( navigator.standalone ||
        // https://github.com/uupaa/WebApp2/blob/master/app/assets/modules/UserAgent.js
        // _isWebView_iOS(options)
        // iPhone 13 で fullscreenEnabled の判定が出来ない.
        // https://caniuse.com/#feat=fullscreen によると、iOS は12からなので、fullscreenEnabled による Safari/WebView の判定は 11 迄は動いたと仮定する
            ( ( deviceTypeIsTablet || platformVersion < 12 ) && ( /* inObject( 'fullscreenEnabled', document ) || */ inObject( 'webkitFullscreenEnabled', document ) ) ) ||
            ( 11 <= platformVersion && platformVersion < 13 && navigator.mediaDevices ) // 12迄は mediaDevices は Safari だけだった。
        )
    ){
        engine       = 'SafariMobile';
        brand        = 'Safari';
        brandVersion = platformVersion;
    } else {
        maybe_iOSWebView = true;
        engine        = 'iOSWebView';
    };
    platform      = 'iOS';
    engineVersion = platformVersion;
} else
/*----------------------------------------------------------------------------//
 *  Kobo
 */
if( findString( strUserAgent, 'Kobo' ) ){
// Mozilla/5.0 (Linux; U; Android 2.0; en-us;) AppleWebKit/533.1 (KHTML, like Gecko) Verson/4.0 Mobile Safari/533.1 (Kobo Touch)
    platform                = 'Kobo';
    engine                  = 'AOSP';
    engineVersion           = 2.2;    
    brand                   = engine;
    brandVersion            = engineVersion;
    deviceTypeIsEBookReader = true;
    isAndroid               = true;
} else
/*----------------------------------------------------------------------------//
 *  Sony Reader
 */
if( findString( strUserAgent, 'EBRD' ) ){
// Mozilla/5.0 (Linux; U; ja-jp; EBRD1101; EXT) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1
    platform                = 'SonyReader';
    //platformVersion         = 1;
    engine                  = 'AOSP';
    engineVersion           = 2.2;    
    brand                   = engine;
    brandVersion            = engineVersion;
    deviceTypeIsEBookReader = true;
} else
/*----------------------------------------------------------------------------//
 *  ChromeOS
 */
if( strVersion =
        getVersionString( strUserAgent, 'CrOS x86_64 '  ) ||
        getVersionString( strUserAgent, 'CrOS aarch64 ' ) ||
        getVersionString( strUserAgent, 'CrOS i686 '    ) ||
        getVersionString( strUserAgent, 'CrOS armv7l '  ) ){
    platform        = 'ChromeOS';
    platformVersion = strVersion;
    deviceTypeIsPC  = true;
} else
/*----------------------------------------------------------------------------//
 *  FirefoxOS
 */
if( window.onmoztimechange !== undefined ){
    // https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Window/onmoztimechange
    // This API is available on Firefox OS for internal applications only.
    platform        = 'FirefoxOS';
    platformVersion = versionGecko < 18.1 ? '1.0.1' :
                      versionGecko < 19   ? 1.1 :
                      versionGecko < 27   ? 1.2 :
                      versionGecko < 29   ? 1.3 :
                      versionGecko < 31   ? 1.4 :
                      versionGecko < 33   ? 2.0 :
                      versionGecko < 35   ? 2.1 :
                      versionGecko < 38   ? 2.2 :
                      versionGecko < 45   ? 2.5 :
                                            2.6; // Gecko 45
    // https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference#Firefox_OS
    if( findString( strUserAgent, 'Mobile' ) ){
        deviceTypeIsPhone = true;
    } else if( findString( strUserAgent, 'Tablet' ) ){
        deviceTypeIsTablet = true;
    } else if( findString( strUserAgent, 'TV' ) ){
        deviceTypeIsTV = true;
    };
    // isFirefoxOS = window.pkcs11 /* 1.1 */ || window.SpecialPowers /* 1.4, 2.0, 2.1, 2.2 */ || window.home /* 1.4 */ || window.getInterface /* 1.4 */
} else
/*----------------------------------------------------------------------------//
 *  webOS
 */
if( window.palmGetResource ){
    // https://developers.whatismybrowser.com/useragents/explore/operating_system_name/hp-webos/
    platform        = 'webOS';
    platformVersion = getVersionString( strUserAgent, 'webOS/' ) || getVersionString( strUserAgent, 'WEBOS' ) || getVersionString( strUserAgent, 'hpwOS/' );
    brand           = platform;
    brandVersion    = platformVersion;
    if( findString( strUserAgent, 'webOS.TV' ) || findString( strUserAgent, '/SmartTV' ) ){
        deviceTypeIsTV = true;
    } else {
        deviceTypeIsPhone = true;
    };
} else
/*----------------------------------------------------------------------------//
 *  Tizen
 */
if( strVersion = getVersionString( strUserAgent, 'Tizen ' ) ){
    platform          = 'Tizen';
    platformVersion   = strVersion;
    brand             = 'Samsung';
    brandVersion      = verSamsung;
    engine            = brand;
    engineVersion     = brandVersion;
    deviceTypeIsPhone = true; // TODO deviceTypeIsTV = true;
} else
/*----------------------------------------------------------------------------//
 *  WindowsPhone
 */
if( strVersion = getVersionString( strUserAgent, 'Windows Phone ' ) || getVersionString( strAppVersion, 'Windows Phone OS ' ) || versionWPWithUC ){
    isWindowsPhone    = true;
    platformVersion   = strVersion;
    deviceTypeIsPhone = true;
} else if( isEdgeHTML && strPlatform === 'ARM' ){
    isWindowsPhone    = true;
    platformVersion   = 10;
    deviceTypeIsPhone = true;
    isPcMode          = true;
} else if( isTrident && findString( strAppVersion, 'ZuneWP' ) ){ // ZuneWP はデスクトップモードで登場する
    isWindowsPhone    = true;
    platformVersion   = versionTrident === 11 ? 8.1 :
                        versionTrident === 10 ? 8   :
                        versionTrident ===  9 ? 7.5 :
                        versionTrident ===  7 ? 7   : '?';
    deviceTypeIsPhone = true;
    isPcMode          = true;
} else
/*----------------------------------------------------------------------------//
 *  Feature Phone
 */
// https://qiita.com/nao_tuboyaki/items/342bffd963f166393045
// ガラケーのフルブラウザ判定
if( findString( strUserAgent, 'FOMA;' ) ){
    platform          = 'FeaturePhone';
    deviceTypeIsPhone = true;
} else if( findString( strUserAgent, 'SoftBank;' ) ){
    platform          = 'FeaturePhone';
    deviceTypeIsPhone = true;
} else
/*----------------------------------------------------------------------------//
 *  Fire OS
 */
if( findString( strUserAgent, 'KFMUWI' ) ){
// https://developer.amazon.com/ja/docs/fire-tablets/ft-device-and-feature-specifications.html
/**
 * (2019, 9th Gen) Fire OS 6.3.0, Android 7.1.25
 * "KFMUWI"   Fire 7  
 */
    isFireOS           = true;
    platformVersion    = 6.3;
    deviceTypeIsTablet = true;
    isAndroidBased     = true;
} else if( findString( strUserAgent, 'KFKAWI' ) ){
/**
 * (2018, 8th Gen) Fire OS 6.0 => 6.3.0, Android 7.1.25
 * "KFKAWI"   Fire HD 8   
 */
    isFireOS           = true;
    platformVersion    = 6;
    deviceTypeIsTablet = true;
    isAndroidBased     = true;
} else if( findString( strUserAgent, 'KFSUWI' ) || findString( strUserAgent, 'KFAUWI' ) || findString( strUserAgent, 'KFDOWI' ) ){
/**
 * (2017, 7th Gen) Fire OS 5.3.3 => 5.3.6, Android 5.1.22
 * "KFSUWI"   Fire HD 10
 * "KFAUWI"   Fire 7
 * "KFDOWI"   Fire HD 8
 */  
    isFireOS           = true;
    platformVersion    = 5;
    deviceTypeIsTablet = true;
    isAndroidBased     = true;
} else if( findString( strUserAgent, 'KFGIWI' ) ){
/**
 * (2016, 6th Gen) Fire OS 5 => 5.3.6, Android 5.1.22
 * "KFGIWI"   Fire HD 8 (2016)
 */
    isFireOS           = true;
    platformVersion    = 5;
    deviceTypeIsTablet = true;
    isAndroidBased     = true;
} else if( findString( strUserAgent, 'KFARWI' ) || findString( strUserAgent, 'KFSAWA' ) || findString( strUserAgent, 'KFSAWI' ) ){
/**
 * (4th Gen) Fire OS 5, Android 5.1  , API level 22 (system update, available 2015)
 *           Fire OS 4, Android 4.4.2, API level 19
 * "KFARWI"   Fire HD 6
 * "KFSAWA"   Fire HDX 8.9 (WAN)
 * "KFSAWI"   Fire HDX 8.9 (Wi-Fi)
 */
    isFireOS           = true;
    platformVersion    = 5 <= parseFloat( versionAndroid ) ? 5 : 4;
    deviceTypeIsTablet = true;
    isAndroidBased     = true;
} else if( findString( strUserAgent, 'KFSOWI' ) || findString( strUserAgent, 'KFTHWA' ) || findString( strUserAgent, 'KFTHWI' ) || findString( strUserAgent, 'KFAPWA' ) || findString( strUserAgent, 'KFAPWI' ) ){
// https://dennou-note.blogspot.com/2014/02/kindle.html
/**
 * （第三世代）Fire OS 3.0。Android4.2.2（JellyBean / API level17）
 * "KFSOWI"   Kindle Fire HD
 * "KFTHWA"   Kindle Fire HDX (wan)
 * "KFTHWI"   Kindle Fire HDX (wi-fi)
 * "KFAPWA"   Kindle Fire HDX 8.9 (wan)
 * "KFAPWI"   Kindle Fire HDX 8.9 (wifi)
 */
    isFireOS           = true;
    platformVersion    = 3;
    deviceTypeIsTablet = true;
    isAndroidBased     = true;
} else if( findString( strUserAgent, 'KFOT' ) || findString( strUserAgent, 'KFTT' ) || findString( strUserAgent, 'KFJWA' ) || findString( strUserAgent, 'KFJWI' ) ){ 
/**
 * （第二世代）Android4.0.3（ Ice Cream Sandwich / API level15)
 * "KFOT"     Kindle Fire
 * "KFTT"     Kindle Fire HD
 * "KFJWA"    Kindle Fire HD8.9 (wan)
 * "KFJWI"    Kindle Fire HD8.9 (wi-fi)
 */
    isFireOS           = true;
    platformVersion    = 2;
    deviceTypeIsTablet = true;
    isAndroidBased     = true;
} else if( findString( strUserAgent, 'Kindle Fire' ) ){
// （第一世代）Android 2.3.3（Gingerbread / API level10）
// "kindle Fire"   Kindle Fire
    isFireOS           = true;
    platformVersion    = 1;
    deviceTypeIsTablet = true;
    isAndroidBased     = true;
} else
/*----------------------------------------------------------------------------//
 *  Kindle paperwhite
 */
if( strVersion = getVersionString( strUserAgent, 'Kindle/' ) ){
// Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+
    platform                = 'Kindle';
    platformVersion         = strVersion;
    engine                  = 'AOSP';
    engineVersion           = 2.2;    
    brand                   = engine;
    brandVersion            = engineVersion;
    deviceTypeIsEBookReader = true;
} else
/*----------------------------------------------------------------------------//
 *  FireTV
 */
if( isFirefoxForFireTV ){
    isFireOS        = true;
    platformVersion = versionAndroid || versionFireOSForFirefoxPcMode;
    deviceTypeIsTV  = true;
    isAndroidBased  = true;
    isPcMode        = versionFireOSForFirefoxPcMode;
// https://developer.amazon.com/ja/docs/fire-tv/user-agent-strings.html
} else if( findString( strUserAgent, 'AmazonWebAppPlatform' ) || findString( strUserAgent, '; AFT' ) ){
    isFireOS        = true;
    platformVersion = versionAndroid;
    deviceTypeIsTV  = true;
    isAndroidBased  = true;
} else
/*----------------------------------------------------------------------------//
 *  MeeGo
 */
if( findString( strUserAgent, 'MeeGo' ) ){
    platform = 'MeeGo';
} else
/*----------------------------------------------------------------------------//
 *  Maemo
 */
// https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference
// Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0
if( findString( strUserAgent, 'Maemo' ) ){
    platform = 'Maemo';
} else
/*----------------------------------------------------------------------------//
 *  WindowsMobile
 */
if( fromString( strUserAgent, 'Windows Mobile;' ) || versionIris ){
    platform        = 'WindowsMobile';
    deviceTypeIsPDA = true;
} else
/*----------------------------------------------------------------------------//
 *  WinCE
 */
if( strPlatform === 'WinCE' ){
    platform        = strPlatform;
    deviceTypeIsPDA = true;
} else
/*----------------------------------------------------------------------------//
 *  Win16 Win32 Win64
 */
if( strPlatform === 'Win16' || strPlatform === 'Win32' || strPlatform === 'Win64' ){
    platform        = strPlatform;
    platformVersion = getVersionString( strUserAgent, 'Windows NT ' ) || getVersionString( strUserAgent, 'Windows ' );
    deviceTypeIsPC  = true;
} else
/*----------------------------------------------------------------------------//
 *  Mac
 */
if( fromString( strPlatform, 'Mac' ) ){
    platform        = strPlatform === 'MacPowerPC' ? 'MacPPC' : strPlatform;
    if( strVersion = getVersionString( strUserAgent.split( '_' ).join( '.' ), 'Mac OS X ' ) ){
        platformVersion = strVersion;
    };
    deviceTypeIsPC  = true;
    isMac           = true;
} else
/*----------------------------------------------------------------------------//
 *  BlackBerry
 */
if( findString( strUserAgent, 'BlackBerry' ) || findString( strUserAgent, 'BB10' ) ){
    platform          = 'BlackBerry';
    platformVersion   = verVersion;
    deviceTypeIsPhone = true;
} else
/*----------------------------------------------------------------------------//
 *  SunOS
 */
if( findString( strUserAgent, 'SunOS' ) || findString( strUserAgent, 'Sun Solaris' ) ){
    platform       = 'SunOS';
    deviceTypeIsPC = true;
} else
/*----------------------------------------------------------------------------//
 *  BSD
 */
if( findString( strUserAgent, 'FreeBSD' ) ){
    platform = 'FreeBSD';
} else if( findString( strUserAgent, 'OpenBSD' ) ){
    platform = 'OpenBSD';
} else if( findString( strUserAgent, 'NetBSD' ) ){
    platform = 'NetBSD';
} else 
/*----------------------------------------------------------------------------//
 *  Android Fennec
 */
if( isAndroid && isGecko ){
    // PCモードの Android Firefox では platform に Android 0.0.0 が存在
    // Fennec41- 用
    // https://developer.mozilla.org/ja/docs/Gecko_user_agent_string_reference
    // バージョン 41 以降の Android 版 Firefox では platform トークンに Android バージョンが含まれます。
    // 相互運用性向上のため、Android 4 以前のバージョンでブラウザが動作している場合は 4.4 と出力します。
    // Android バージョン 4 以降では実際のバージョン番号が出力されます。
    // なお、Gecko エンジンはすべての Android バージョンに対して同じ機能を提供しています。    
    if( findString( strUserAgent, 'Android 4.4;' ) ){
        v = { min : 2.3 };
    } else if( 4 <= parseFloat( versionAndroid ) ){
        v = versionAndroid;
    } else {
        v = { min : 2.2 };
    };

    platformVersion = v;
    if( maybePCMode ) isPcMode = true;
} else
/*----------------------------------------------------------------------------//
 *  Android Presto
 */
if( isAndroid && isPresto ){
    if( versionAndroid ){
        v = versionAndroid;
    } else {
        v = { min : 1.6 };
        isPcMode = true;
    };
    platformVersion = v;
    if( findString( strUserAgent, 'Tablet' ) ){
        deviceTypeIsTablet = true;
    } else {
        deviceTypeIsPhone  = true;
    };
} else
/*----------------------------------------------------------------------------//
 *  Android
 */
if( versionAndroid ){
    platformVersion = versionAndroid;
    isAndroid       = true;
} else
/*----------------------------------------------------------------------------//
 *  Android PC_MODE
 */
if( maybeLinux && maybePCMode ){
    // https://ja.wikipedia.org/wiki/WebKit
    // http://www.au.kddi.com/developer/android/kishu/ua/
    // webkit version to Android version...
    surelyPcMode = true;
    // AOSP の判定は Version/ の有無. 但し「デスクトップ版で見る」場合、Version/ が居なくなる...
    // PC版で見る、にチェックが付いている場合、ユーザーエージェント文字列にも platform にも Android の文字列が存在しない(標準ブラウザ&Chrome)
    // Audio でタッチが必要か？の判定にとても困る...
    // ua には Linux x86_64 になっている strPlatform と矛盾する. ATOM CPU の場合は？
    if( verSamsung ){ // SamsungBrowser/2.0+ が Android4.4.4 から登場する
        v = { min : 4.4 };
    } else
    if( ( hasChromeObject && !maybeAOSP ) || hasOPRObject || versionOPR ){
        v = { min : 4 };
    } else {
        // https://developer.chrome.com/multidevice/webview/overview
        //   The WebView shipped with Android 4.4 (KitKat) is based on the same code as Chrome for Android version 30.
        //   This WebView does not have full feature parity with Chrome for Android and is given the version number 30.0.0.0.
        //   The updated WebView shipped with Android 4.4.3 has the version number 33.0.0.0.
        //   A developer preview WebView is shipping with the Android L Developer Preview. The developer preview version number is 36.0.0.0.
        // https://caniuse.com/#compare=chrome+30,chrome+31,chrome+32,chrome+33,chrome+34,chrome+35,chrome+36,chrome+37,android+4.4.3-4.4.4
        //   chrome30 と Android4.4.3 で未実装で Chrome36 で追加された "CSS touch-action property" を Android5+ の判定に使用。
        // https://qiita.com/DriftwoodJP/items/1916d5519857295622b2
        //   Android OS 5.0（Lollipop）から、Chromium WebView が OS から切り離され、Google Play から 「AndroidシステムのWebView」として更新できるようになった。
        //   この結果、端末ベンダー提供のパッチ適用に影響されずに更新されることになったが、この「ブラウザ」と Chrome for Android とは別物であることには注意が必要である。 
        v = versionAndroid =
            htmlStyle.touchAction !== undefined ? { min : 5 } : 
            docRegElm ? 4.4 :
            // ＾______Chromium_____
            int8Array ? (
                !navigator.connection ? 4.4 : // AOSP
                ( !window.searchBoxJavaBridge_ && !hasChromeObject ) ? 4.2 : /* 4.1- には searchBoxJavaBridge_ と chrome が存在 */
                Number.isNaN ? 4.1 : 4 ) :
            534 <= versionWebKit ? 3 :
            533 <= versionWebKit ? ( AudioElement ? 2.3 : 2.2 ) :
            530 <= versionWebKit ? 2.0 : 1.5;
    
        if( maybeSamsung ){
            engine        = 'Samsung';
            engineVersion = maybeSamsung;
        };
    };
    platformVersion = v;
    isAndroid       = true;
} else
/*----------------------------------------------------------------------------//
 *  Android 5 ChromeWebView PC_MODE
 */
if( maybeChromeWebView ){
    platformVersion = { min : 5 };
    isAndroid       = true;
    surelyPcMode    = true;
} else
/*----------------------------------------------------------------------------//
 *  Linux
 */
if( maybeLinux ){
    if( findString(  strUserAgent, 'Ubuntu' ) ){
        platform = 'Ubuntu';
    } else if( strVersion = getVersionString( strUserAgent, 'Mint/' ) ){
        platform        = 'Mint';
        platformVersion = strVersion;
    } else if( strVersion = getVersionString( strUserAgent, 'Fedora/' ) ){
        platform        = 'Fedora';
        platformVersion = strVersion;
    } else if( findString( strUserAgent, 'Gentoo' ) ){
        platform = 'Gentoo';
    } else {
        platform = 'Linux';
    };
};

if( isFireOS || ( isAndroid && surelyPcMode && versionSilk ) ){ // Silk & android & pbmode の場合、FireOS
    platform = 'FireOS';
} else if( isAndroid ){
    platform = platform || 'Android';
};
if( isWindowsPhone ){
    platform = 'WindowsPhone';
};
