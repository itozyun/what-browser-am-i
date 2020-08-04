if( !engine ){
    isAndroidBased = isAndroidBased || isAndroid;
/*----------------------------------------------------------------------------//
 *  Presto
 */
    if( isPresto ){
        engine        = isAndroidBased || deviceTypeIsPDA || deviceTypeIsPhone || deviceTypeIsTablet ? 'PrestoMobile' : 'Presto';
        engineVersion = versionPresto;
/*----------------------------------------------------------------------------//
 *  Trident or Tasman
 */
    } else if( isTrident ){
        if( v = getNumber( strAppVersion, 'Trident/' ) + 4 ){
            if( v !== versionTrident ){
                brand        = 'IEHost';
                brandVersion = v;
            };
        };

        // https://stackoverflow.com/questions/8751479/detect-metro-ui-version-of-ie
        if( 10 <= versionTrident && 6.2 <= platformVersion && platformVersion < 7 ){ // WinNT6.2 = Win8, WinNT6.3 = Win8.1
            if( screenY === 0 && ( innerHeight + 1 ) !== outerHeight ){
                brand        = 'ModernIE';
                brandVersion = versionTrident;
            };
        };

        if( deviceTypeIsPDA || deviceTypeIsPhone || deviceTypeIsTablet || deviceTypeIsMediaPlayer ){ // TODO device:MS Zune
            engine = 'TridentMobile';
        } else if( isMac && 5 <= versionTrident ){
            engine       = 'Tasman';
            brand        = 'MacIE';
            brandVersion = versionTrident;
        } else {
            engine = 'Trident';
            if( isMac ){
                brand        = 'MacIE';
                brandVersion = versionTrident;
            };
        };
        engineVersion = versionTrident;
/*----------------------------------------------------------------------------//
 *  EdgeHTML
 */
    } else if( isEdgeHTML ){
        engine        = isWindowsPhone ? 'EdgeMobile' : 'EdgeHTML';
        engineVersion = getVersionString( strAppVersion, 'Edge/' );
/*----------------------------------------------------------------------------//
 *  Goanna
 */
    } else if( versionGoanna ){
        engine        = 'Goanna';
        engineVersion = versionGoanna;
/*----------------------------------------------------------------------------//
 *  Gecko
 */
    } else if( isGecko ){
        engine        = isAndroidBased ? 'Fennec' : 'Gecko';
        engineVersion = versionGecko || versionFirefox;
/*----------------------------------------------------------------------------//
 *  Samsung Browser
 */
    } else if( verSamsung ){
        engine        = 'Samsung';
        engineVersion = verSamsung;
        if( surelyPcMode ) isPcMode = true;
/*----------------------------------------------------------------------------//
 *  NetFront
 */
    } else if( strVersion = versionNetFront || getVersionString( strUserAgent, 'NetFront/' ) ){
        engine        = 'NetFront';
        engineVersion = strVersion;
/*----------------------------------------------------------------------------//
 *  iCab
 */
    } else if( strVersion = getVersionString( strUserAgent, 'iCab' ) ){
        engine        = 'iCab';
        engineVersion = strVersion;
/*----------------------------------------------------------------------------//
 *  Opera Mini
 */
    } else if( strVersion = max( getVersionString( strUserAgent, 'Opera Mini/' ), getVersionString( strUserAgent, 'Opera Mobi/' ) ) || ( hasOperaMiniObject && verVersion ) ){
        engine        = 'OperaMini'; 
        engineVersion = strVersion;
        if( !platform ){
            if( findString( strUserAgent, 'iPhone' ) ){
                device = 'iPhone';
            } else if( findString( strUserAgent, 'iPad' ) ){
                device = 'iPad';
            } else if( findString( strUserAgent, 'iPod' ) ){
                device = 'iPod';
            };
            if( device ) platform = 'iOS';
        };
/*----------------------------------------------------------------------------//
 *  UC Browser Speed Mode
 */
    } else if( isUCWEB ){
        engine        = 'UCWEB';
        engineVersion = versionUCWEB;
/*----------------------------------------------------------------------------//
 *  KHTML
 */
    } else if( versionKHTML ){
        engine        = 'KHTML';
        engineVersion = appVersion;
/*----------------------------------------------------------------------------//
 *  AOSP
 */
// Android3.x-4.1 のAOSPで window.chrome がいるので AOSP の判定を Blink より先に
    } else if( isAndroid && maybeAOSP ){
        engine           = 'AOSP';
        engineVersion    = versionAndroid;
        isAndroidBrowser = true;
        if( surelyPcMode ) isPcMode = true;
/*----------------------------------------------------------------------------//
 *  Chromium or ChromiumMobile
 */
    } else if( hasChromeObject || hasOPRObject || versionOPR ){
        engine        = isAndroidBased ? 'ChromiumMobile' : 'Chromium';
        engineVersion = versionChrome;
        if( surelyPcMode ) isPcMode = true;
/*----------------------------------------------------------------------------//
 *  ChromeWebView
 */
// http://uupaa.hatenablog.com/entry/2014/04/15/163346
// Chrome WebView は Android 4.4 の時点では WebGL や WebAudio など一部の機能が利用できません(can i use)。
// また UserAgent が書き換え可能なため、旧来のAOSPブラウザの UserAgent を偽装した形で配布されているケースがあります。
// http://caniuse.com/#compare=chrome+40,android+4.2-4.3,android+4.4,android+4.4.3-4.4.4,and_chr+45
    } else if( isAndroid && docRegElm ){
        // Android 標準ブラウザ Chrome WebView ブラウザ
        engine           = 'ChromeWebView';
        engineVersion    = parseFloat( versionAndroid ) < 5 ? versionAndroid : versionChrome; // Android 4.4.4- では Android の Version を。5.0+ では Chrome のバージョンを使用。
        // TODO PCモードでは Chrome/11 とあり得ない値が入っている
        isAndroidBrowser = true;
        if( !( window.requestFileSystem || window.webkitRequestFileSystem ) ){
            isAndroidChromeWebView = true;
        };
        if( surelyPcMode ) isPcMode = true;
/*----------------------------------------------------------------------------//
 *  AOSP PC_Mode
 */
    } else if( isAndroid && ( verVersion || surelyPcMode ) ){
        engine           = 'AOSP';
        engineVersion    = versionAndroid;
        isAndroidBrowser = true;
        if( surelyPcMode ) isPcMode = true;
/*----------------------------------------------------------------------------//
 *  Chromium or ChromiumMobile (window.chrome 無)
 */
    } else if( versionChrome ){
        engine        = isAndroidBased ? 'ChromiumMobile' : 'Chromium';
        engineVersion = versionChrome;
/*----------------------------------------------------------------------------//
 *  WebKit
 */
    } else if( versionWebKit ){
        engine        = 'WebKit'
        engineVersion = versionWebKit;
    };
};