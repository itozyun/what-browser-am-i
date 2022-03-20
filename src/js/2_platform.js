/*----------------------------------------------------------------------------//
 *  Nintendo DS
 */
if( strPlatform === 'Nitro' ){
    // https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDS%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC
    platform         = WHAT_BROWSER_AM_I__PLATFORM_NDS;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  Nintendo DSi
 */
if( strPlatform === 'Nintendo DSi' ){
    // https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%B3%E3%83%86%E3%83%B3%E3%83%89%E3%83%BCDSi%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC
    // https://developers.whatismybrowser.com/useragents/explore/operating_platform/nintendo-dsi/
    platform         = WHAT_BROWSER_AM_I__PLATFORM_NDSi;
    platformVersion  = versionOpera; // Opera/9.50 ... Opera/507
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  New 3DS
 */
if( strPlatform === 'New Nintendo 3DS' || ( findString( strUserAgent, 'iPhone OS 6_0' ) && screenW === 320 && screenH === 240 ) ){
    platform         = WHAT_BROWSER_AM_I__PLATFORM_New3DS;
    platformVersion  = getVersionString( strUserAgent, 'NintendoBrowser/' );
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  3DS
 */
if( strPlatform === 'Nintendo 3DS' ){
    platform         = WHAT_BROWSER_AM_I__PLATFORM_N3DS;
    platformVersion  = getVersionString( strUserAgent, 'Version/' );
    versionWebKit    = 535; // 534:2.0.0-2J - 9.5.0-22J, 9.5.0-23J -
    versionNX        = platformVersion;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  Nintendo Swicth
 */
if( strPlatform === 'Nintendo Swicth' ){
    platform         = WHAT_BROWSER_AM_I__PLATFORM_Switch;
    platformVersion  = getVersionString( strAppVersion, 'NintendoBrowser/' );
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  WiiU
 */
if( window.wiiu /* strPlatform === 'Nintendo WiiU' */ ){
    // https://www.nintendo.co.jp/hardware/wiiu/internetbrowser/index.html
    platform         = WHAT_BROWSER_AM_I__PLATFORM_WiiU;
    platformVersion  = getVersionString( strAppVersion, 'NintendoBrowser/' );
    // https://blog.gutyan.jp/entry/2015/01/31/NintendoBrowser
    // UブラウザにはNew3DS以上のUA切替機能がある。
    // platform始めUA以外のnavigatorのプロパティはいずれの場合も変更されない。
    engine        = WHAT_BROWSER_AM_I__ENGINE_WebKit; // UA 偽装で Chromium になるケースがあるのでここで設定
    engineVersion = getVersionString( strAppVersion, 'AppleWebKit/' ) ||
                    ( webkitCancelAnimationFrame ? 536 : 534 ); // 534:2.1.0J - 3.1.0J, 536:4.0.0J - 
    deviceTypeIsGame = true;
    if( !platformVersion ){
        platformVersion   = webkitCancelAnimationFrame ? 4 : 2;
        isPcSiteRequested = findString( strAppVersion, 'Macintosh;' ) || ( findString( strAppVersion, 'Windows NT' ) && !findString( strAppVersion, 'Touch' ) );
    };
} else
/*----------------------------------------------------------------------------//
 *  Wii
 */
if( isPresto && isPresto.wiiremote /* strPlatform === 'Nintendo Wii' */ ){
    // https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB
    // 2007年 4月12日版：Opera/9.10（Nintendo Wii; U; ; 1621; ja）
    // 2007年10月10日版：Opera/9.30（Nintendo Wii; U; ; 2047-7; ja）
    // 2009年 9月 1日版：Opera/9.30 (Nintendo Wii; U; ; 3642; ja)
    platform         = WHAT_BROWSER_AM_I__PLATFORM_Wii;
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
    platform         = WHAT_BROWSER_AM_I__PLATFORM_PSVita;
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
    platform         = WHAT_BROWSER_AM_I__PLATFORM_PSP;
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
    platform         = WHAT_BROWSER_AM_I__PLATFORM_PS3;
    platformVersion  = strVersion;
    brand            = platform;
    brandVersion     = strVersion;
    if( conpareVersionString( '4.10', strVersion ) < 0 ){
        engine        = WHAT_BROWSER_AM_I__ENGINE_Sony;
        engineVersion = strVersion;
    };
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  XBox One
 */
if( findString( strUserAgent, 'Xbox One' ) ){
    platform         = WHAT_BROWSER_AM_I__PLATFORM_XboxOne;
    platformVersion  = 1;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  XBox 360
 */
if( findString( strUserAgent, 'Xbox' ) ){
    platform         = WHAT_BROWSER_AM_I__PLATFORM_Xbox360;
    platformVersion  = 1;
    deviceTypeIsGame = true;
} else
/*----------------------------------------------------------------------------//
 *  Mylo2
 */
if( appVersion === 2 && findString( strUserAgent, 'Sony/COM2/' ) ){
    platform         = WHAT_BROWSER_AM_I__PLATFORM_Mylo;
    platformVersion  = 2;
    versionNetFront  = 3.4;
    brand            = platform;
    brandVersion     = 2;
    deviceTypeIsPDA  = true;
} else
/*----------------------------------------------------------------------------//
 *  iOS
 */
if( fromString( strPlatform, 'iP' ) || versioniOSWithUC || versioniOSWithPuffin || is_iPadOsPcSiteRequested ){
    if( versioniOSWithPuffin ){
        platformVersion = versioniOSWithPuffin;
        switch( puffinDeviceModel.substr( 0, 4 ) ){
            case 'iPho' :
                device        = WHAT_BROWSER_AM_I__DEVICE_iPhone;
                deviceVersion = getVersionString( puffinDeviceModel, device );
                deviceTypeIsPhone = true;
                break;
            case 'iPad' :
                device        = WHAT_BROWSER_AM_I__DEVICE_iPad;
                deviceVersion = getVersionString( puffinDeviceModel, device );
                deviceTypeIsTablet = true;
                break;
            case 'iPod' :
                device        = WHAT_BROWSER_AM_I__DEVICE_iPod;
                deviceVersion = getVersionString( puffinDeviceModel, device );
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

        if( !platformVersion ) isPcSiteRequested = true;

        if( !platformVersion || isSleipnir_iOS ){ // Sleipnir は嘘のバージョンがUA文字列に設定されている
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
            device            = WHAT_BROWSER_AM_I__DEVICE_iPhone;
            deviceVersion     = v ? ( dpRatio ? { max : 3 } : { min : 4, max : 5 } ) : { max : 6 };
            deviceTypeIsPhone = true;
        } else if( fromString( strPlatform, 'iPad' ) || is_iPadOsPcSiteRequested ){ // iPad or iPad Simulator
            device             = WHAT_BROWSER_AM_I__DEVICE_iPad;
            deviceVersion      = dpRatio ? { max : 2 } : { min : 3 }; 
            deviceTypeIsTablet = true;
        } else if( fromString( strPlatform, 'iPod' ) ){
            device                  = WHAT_BROWSER_AM_I__DEVICE_iPod;
            deviceVersion           = v ? ( dpRatio ? { max : 3 } : 4 ) : { min : 5 };
            deviceTypeIsMediaPlayer = true;
        };
    };

    if( !versioniOSWithPuffin && // iPad iOS12.2 Puffin5.2.2 で fullscreenEnabled が存在の模様
        // ホーム画面から起動したWebページは navigator.standalone === true になっている。fullscreen API は無い。
        ( navigator.standalone ||
        // https://github.com/uupaa/WebApp2/blob/master/app/assets/modules/UserAgent.js
        // _isWebView_iOS(options)
        // iPhone 13 で fullscreenEnabled の判定が出来ない.
        // https://caniuse.com/#feat=fullscreen によると、iOS は12からなので、fullscreenEnabled による Safari/WebView の判定は 11 迄は動いたと仮定する
            ( ( deviceTypeIsTablet || platformVersion < 12 ) && inObject( 'webkitFullscreenEnabled', document ) ) ||
            ( 11 <= platformVersion && platformVersion < 13 && navigator.mediaDevices ) // 12迄は mediaDevices は Safari だけだった。
        )
    ){
        engine       = WHAT_BROWSER_AM_I__ENGINE_SafariMobile;
        brand        = WHAT_BROWSER_AM_I__BRAND_Safari;
        brandVersion = platformVersion;
    } else {
        maybe_iOSWebView = true;
        engine           = WHAT_BROWSER_AM_I__ENGINE_iOSWebView;
    };
    platform      = WHAT_BROWSER_AM_I__PLATFORM_iOS;
    engineVersion = platformVersion;
} else
/*----------------------------------------------------------------------------//
 *  Kobo
 */
if( findString( strUserAgent, 'Kobo' ) ){
// Mozilla/5.0 (Linux; U; Android 2.0; en-us;) AppleWebKit/533.1 (KHTML, like Gecko) Verson/4.0 Mobile Safari/533.1 (Kobo Touch)
    platform                = WHAT_BROWSER_AM_I__PLATFORM_Kobo;
    engine                  = WHAT_BROWSER_AM_I__ENGINE_AOSP;
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
    platform                = WHAT_BROWSER_AM_I__PLATFORM_SonyReader;
    //platformVersion         = 1;
    engine                  = WHAT_BROWSER_AM_I__ENGINE_AOSP;
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
    platform        = WHAT_BROWSER_AM_I__PLATFORM_ChromeOS;
    platformVersion = strVersion;
    deviceTypeIsPC  = true;
} else
/*----------------------------------------------------------------------------//
 *  FirefoxOS
 */
if( window.onmoztimechange !== undefined ){
    // https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Window/onmoztimechange
    // This API is available on Firefox OS for internal applications only.
    platform        = WHAT_BROWSER_AM_I__PLATFORM_FirefoxOS;
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
 *  WebOS
 */
if( window.palmGetResource ){
    // https://developers.whatismybrowser.com/useragents/explore/operating_system_name/hp-webos/
    platform        = WHAT_BROWSER_AM_I__PLATFORM_WebOS;
    platformVersion = getVersionString( strUserAgent, 'webOS/' ) || getVersionString( strUserAgent, 'WEBOS' ) || getVersionString( strUserAgent, 'hpwOS/' );

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
    platform          = WHAT_BROWSER_AM_I__PLATFORM_Tizen;
    platformVersion   = strVersion;
    brand             = WHAT_BROWSER_AM_I__ENGINE_Samsung;
    brandVersion      = verSamsung;
    engine            = brand;
    engineVersion     = brandVersion;
    deviceTypeIsPhone = true; // TODO deviceTypeIsTV = true;
} else
/*----------------------------------------------------------------------------//
 *  WindowsPhone
 */
if( strVersion = getVersionString( strUserAgent, 'Windows Phone ' ) || getVersionString( strAppVersion, 'Windows Phone OS ' ) || versionWPWithUC ){
    platform          = WHAT_BROWSER_AM_I__PLATFORM_WindowsPhone;
    platformVersion   = strVersion;
    deviceTypeIsPhone = true;
} else if( isEdgeHTML && strPlatform === 'ARM' ){
    platform          = WHAT_BROWSER_AM_I__PLATFORM_WindowsPhone;
    platformVersion   = 10;
    deviceTypeIsPhone = true;
    isPcSiteRequested = true;
} else if( isTrident && findString( strAppVersion, 'ZuneWP' ) ){ // ZuneWP はデスクトップモードで登場する
    platform          = WHAT_BROWSER_AM_I__PLATFORM_WindowsPhone;
    platformVersion   = versionTrident === 11 ? 8.1 :
                        versionTrident === 10 ? 8   :
                        versionTrident ===  9 ? 7.5 :
                        versionTrident ===  7 ? 7   : '?';
    deviceTypeIsPhone = true;
    isPcSiteRequested = true;
} else
/*----------------------------------------------------------------------------//
 *  Feature Phone
 */
// https://qiita.com/nao_tuboyaki/items/342bffd963f166393045
// ガラケーのフルブラウザ判定
if( findString( strUserAgent, 'FOMA;' ) ){
    platform          = WHAT_BROWSER_AM_I__PLATFORM_FeaturePhone;
    deviceTypeIsPhone = true;
} else if( findString( strUserAgent, 'SoftBank;' ) ){
    platform          = WHAT_BROWSER_AM_I__PLATFORM_FeaturePhone;
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
    platform                = WHAT_BROWSER_AM_I__PLATFORM_Kindle;
    platformVersion         = strVersion;
    engine                  = WHAT_BROWSER_AM_I__ENGINE_AOSP;
    engineVersion           = 2.2;    
    brand                   = engine;
    brandVersion            = engineVersion;
    deviceTypeIsEBookReader = true;
} else
/*----------------------------------------------------------------------------//
 *  FireTV
 */
if( isFirefoxForFireTV ){
    isFireOS          = true;
    platformVersion   = versionAndroid || versionFireOSThatFirefoxRequestingPcSite;
    deviceTypeIsTV    = true;
    isAndroidBased    = true;
    isPcSiteRequested = versionFireOSThatFirefoxRequestingPcSite;
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
    platform = WHAT_BROWSER_AM_I__PLATFORM_MeeGo;
} else
/*----------------------------------------------------------------------------//
 *  Maemo
 */
// https://developer.mozilla.org/ja/docs/Web/HTTP/Gecko_user_agent_string_reference
// Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0
if( findString( strUserAgent, 'Maemo' ) ){
    platform = WHAT_BROWSER_AM_I__PLATFORM_Maemo;
} else
/*----------------------------------------------------------------------------//
 *  WindowsMobile
 */
if( fromString( strUserAgent, 'Windows Mobile;' ) || versionIris ){
    platform        = WHAT_BROWSER_AM_I__PLATFORM_WindowsMobile;
    deviceTypeIsPDA = true;
} else
/*----------------------------------------------------------------------------//
 *  WinCE
 */
if( strPlatform === 'WinCE' ){
    platform        = WHAT_BROWSER_AM_I__PLATFORM_WinCE;
    deviceTypeIsPDA = true;
} else
/*----------------------------------------------------------------------------//
 *  Win16 Win32 Win64
 */
if( fromString( strPlatform, 'Win' ) ){
    platform        = strPlatform === 'Win16' ? WHAT_BROWSER_AM_I__PLATFORM_Win16 :
                      strPlatform === 'Win32' ? WHAT_BROWSER_AM_I__PLATFORM_Win32 :
                      strPlatform === 'Win64' ? WHAT_BROWSER_AM_I__PLATFORM_Win64 :
                                                WHAT_BROWSER_AM_I__PLATFORM_unknown;
    platformVersion = getVersionString( strUserAgent, 'Windows NT ' ) || getVersionString( strUserAgent, 'Windows ' );
    deviceTypeIsPC  = true;
} else
/*----------------------------------------------------------------------------//
 *  Mac
 */
if( fromString( strPlatform, 'Mac' ) ){
    platform        = strPlatform === 'Mac68K'    ? WHAT_BROWSER_AM_I__PLATFORM_Mac68K :
                      strPlatform === 'MacPowerPC' ||
                      strPlatform === 'MacPPC'    ? WHAT_BROWSER_AM_I__PLATFORM_MacPPC :
                      strPlatform === 'MacIntel'  ? WHAT_BROWSER_AM_I__PLATFORM_MacIntel :
                                                    WHAT_BROWSER_AM_I__PLATFORM_unknown;
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
    platform          = WHAT_BROWSER_AM_I__PLATFORM_BlackBerry;
    platformVersion   = verVersion;
    deviceTypeIsPhone = true;
} else
/*----------------------------------------------------------------------------//
 *  SunOS
 */
if( findString( strUserAgent, 'SunOS' ) || findString( strUserAgent, 'Sun Solaris' ) ){
    platform       = WHAT_BROWSER_AM_I__PLATFORM_SunOS;
    deviceTypeIsPC = true;
} else
/*----------------------------------------------------------------------------//
 *  BSD
 */
if( findString( strUserAgent, 'FreeBSD' ) ){
    platform = WHAT_BROWSER_AM_I__PLATFORM_FreeBSD;
} else if( findString( strUserAgent, 'OpenBSD' ) ){
    platform = WHAT_BROWSER_AM_I__PLATFORM_OpenBSD;
} else if( findString( strUserAgent, 'NetBSD' ) ){
    platform = WHAT_BROWSER_AM_I__PLATFORM_NetBSD;
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
    if( maybePCMode ) isPcSiteRequested = true;
} else
/*----------------------------------------------------------------------------//
 *  Android Presto
 */
if( isAndroid && isPresto ){
    if( versionAndroid ){
        v = versionAndroid;
    } else {
        v = { min : 1.6 };
        isPcSiteRequested = true;
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
 *  Android PCSITE_REQUESTED
 */
if( maybeLinux && maybePCMode || maybeLunascapeAndroid || isSleipnirAndroid ){
    // https://ja.wikipedia.org/wiki/WebKit
    // http://www.au.kddi.com/developer/android/kishu/ua/
    // webkit version to Android version...
    surelyPcSiteRequested = true;
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
            engine        = WHAT_BROWSER_AM_I__ENGINE_Samsung;
            engineVersion = maybeSamsung;
        };
    };
    platformVersion = v;
    isAndroid       = true;
} else
/*----------------------------------------------------------------------------//
 *  Android 5 ChromeWebView PCSITE_REQUESTED
 */
if( maybeChromeWebView ){
    platformVersion       = { min : 5 };
    isAndroid             = true;
    surelyPcSiteRequested = true;
} else
/*----------------------------------------------------------------------------//
 *  Linux
 */
if( maybeLinux ){
    if( findString(  strUserAgent, 'Ubuntu' ) ){
        platform = WHAT_BROWSER_AM_I__PLATFORM_Ubuntu;
    } else if( strVersion = getVersionString( strUserAgent, 'Mint/' ) ){
        platform        = WHAT_BROWSER_AM_I__PLATFORM_Mint;
        platformVersion = strVersion;
    } else if( strVersion = getVersionString( strUserAgent, 'Fedora/' ) ){
        platform        = WHAT_BROWSER_AM_I__PLATFORM_Fedora;
        platformVersion = strVersion;
    } else if( findString( strUserAgent, 'Gentoo' ) ){
        platform = WHAT_BROWSER_AM_I__PLATFORM_Gentoo;
    } else {
        platform = WHAT_BROWSER_AM_I__PLATFORM_Linux;
    };
};

if( isFireOS || ( isAndroid && surelyPcSiteRequested && versionSilk ) ){ // Silk & android & pcmode の場合、FireOS
    platform = WHAT_BROWSER_AM_I__PLATFORM_FireOS;
} else if( isAndroid ){
    platform = platform || WHAT_BROWSER_AM_I__PLATFORM_Android;
};