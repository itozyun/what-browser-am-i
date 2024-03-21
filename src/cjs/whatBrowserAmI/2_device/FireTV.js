goog.require( 'whatBrowserAmI.device.FireTV.FIRE_OS_VERSION' );
goog.provide( 'whatBrowserAmI.device.FireTV.is' );
goog.provide( 'whatBrowserAmI.device.FireTV.detect' );

goog.require( 'whatBrowserAmI.brand.Firefox.isOnFireTV' );

/*----------------------------------------------------------------------------//
 *  FireTV
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.FireTV = {};

/**
 * @private
 * @const {boolean}
 */
var isFirefoxOnFireTV = whatBrowserAmI.brand.Firefox.isOnFireTV;

/**
 * The Android OS version value in the UserAgent when Firefox installed on FireOS requests a PC site
 * @private
 * @const {number}
 */
var androidVersionWhenFirefoxOnFireOSRequestPcSite = isFirefoxOnFireTV && p_getNumber( p_strUserAgent, 'diordnA ' );

/**
 * https://developer.amazon.com/ja/docs/fire-tv/user-agent-strings.html
 * @private
 * @const {boolean}
 */
var isSilkBrowserForFireTV = p_hasSubstring( p_strUserAgent, 'AmazonWebAppPlatform' );

/**
 * https://developer.amazon.com/ja/docs/fire-tv/device-specifications-comparison-table.html
 * @private
 * @const {number}
 */
var fireOSVersionAndFireTVReleased =
        /**
         * Redmi 108cm（43インチ）4K Ultra HD smart LED Fire TV（2023、日本未対応）
         * 2023
         * Android 9, API 28
         * FireOS 7
         */
        p_hasSubstring( p_strUserAgent, 'AFTBTX4' ) ? [ 7, 2023 ]
        /**
         * TCL Class S3 1080p LEDスマートTV（Fire TV搭載）（2023、日本未対応）
         * 2023
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTMD002' ) ? [ 7, 2023 ]
        /**
         * TCL 32インチFHD、40インチFHD Fire TV（2023、日本未対応）
         * 2023
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTSHN02' ) ? [ 7, 2023 ]
        /**
         * Fire TV - TCL S4シリーズ4K UHD HDR LED（2023）
         * 2023
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTMD001' ) ? [ 7, 2023 ]
        /**
         * Fire TV - TCL Q6 4K QLED HDR（2023、日本未対応）
         * 2023
         * Android 9, API 28
         * FireOS 7
         */
   // : p_hasSubstring( p_strUserAgent, 'AFTMD001' ) ? [ 7, 2023 ]
        /**
         * Fire TV 2-Series (2023)
         * 2023
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTKA002' ) ||
        p_hasSubstring( p_strUserAgent, 'AFTKAUK002' ) ? [ 7, 2023 ]
        /**
         * Toshiba 4K UHD - Fire TV（2022、日本未対応）
         * 2022
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTHA004' ) ? [ 7, 2022 ]
        /**
         * Fire TV Omni QLED Series（2022、日本未対応）
         * 2022
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTTIFF43' ) ? [ 7, 2022 ]
        /**
         * Xiaomi F2 4K - Fire TV（2022、日本未対応）
         * 2022
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTANNA0' ) ? [ 7, 2022 ]
        /**
         * Hisense U6 4K UHD - Fire TV（2022、日本未対応）
         * 2022
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTHA001' ) ? [ 7, 2022 ]
        /**
         * フナイ4K - Fire TV（2022）
         * 2022
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTMON001' ) ||
        p_hasSubstring( p_strUserAgent, 'AFTMON002' ) ? [ 7, 2022 ]
        /**
         * JVC 4K - Fire TV with Freeview Play（2021、日本未対応）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTJULI1' ) ? [ 7, 2021 ]
        /**
         * ok 4K - Fire TV（2021、日本未対応）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
   // : p_hasSubstring( p_strUserAgent, 'AFTANNA0' ) ? 7
        /**
         * Toshiba 4KファーフィールドUHD - Fire TV（2021、日本未対応）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTHA003' ) ? [ 7, 2021 ]
        /**
         * Fire TV Omni Series（2021、日本未対応）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
   // : p_hasSubstring( p_strUserAgent, 'AFTTIFF43' ) ? 7
        /**
         * Fire TV 4-Series（2021、日本未対応）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTTI43' ) ? [ 7, 2021 ]
        /**
         * Toshiba 4K UHD - Fire TV（2021、日本未対応）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
   // : p_hasSubstring( p_strUserAgent, 'AFTHA001' ) ? 7
        /**
         * AmazonBasics 4K - Fire TV（2020、日本未対応）
         * 2020
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTPR001' ) ? [ 7, 2020 ]
        /**
         * AmazonBasics HD/FHD - Fire TV（2020、日本未対応）
         * 2020
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTBU001' ) ? [ 6, 2020 ]
        /**
         * Toshiba V35 Series LED FHD/HD - Fire TV（2021、日本未対応）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTHA002' ) ? [ 7, 2021 ]
        /**
         * Technika 4K - Fire TV（2020、日本未対応）
         * 2020
         * Android 9, API 28
         * FireOS 7
         */
    // : p_hasSubstring( p_strUserAgent, '' ) ? 7
        /**
         * JVC 2K - Fire TV（2020、日本未対応）
         * 2020
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTWMST22' ) ? [ 7, 2021 ]
        /**
         * Onida HD/FHD - Fire TV（2020、日本未対応）＜2サイズ展開＞
         * 2020
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTTIFF55' ) ? [ 6, 2020 ]
        /**
         * ok 4K - Fire TV
         * 2020
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTWI001' ) ? [ 7, 2020 ]
        /**
         * Toshiba 4K UHD - Fire TV（2020、日本未対応）
         * 2020
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTDCT31' ) ? [ 7, 2020 ]
        /**
         * Insignia 4K UHD - Fire TV（2020、日本未対応）
         * 2020
         * Android 9, API 28
         * FireOS 7
         */
   // : p_hasSubstring( p_strUserAgent, 'AFTDCT31' ) ? 7
        /**
         * Toshiba HD - Fire TV（2018～2020、日本未対応）
         * 2020
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTBAMR311' ) ? [ 6, 2020 ]
        /**
         * Toshiba 4K - Fire TV（2018～2019、日本未対応）
         * 2020
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTKMST12' ) ? [ 6, 2020 ]
        /**
         * Onida HD - Fire TV（2019、日本未対応）
         * 2019
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTLE' ) ? [ 6, 2019 ]
        /**
         * Grundig OLED 4K - Fire TV（2019、日本未対応）
         * 2019
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTEUFF014' ) ? [ 7, 2019 ]
        /**
         * Grundig OLED 4K - Fire TV（2019、日本未対応）
         * 2019
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTEU014' ) ? [ 7, 2019 ]
        /**
         * JVC 4K - Fire TV（2019、日本未対応）
         * 2019
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTSO001' ) ? [ 7, 2019 ]
        /**
         * Grundig Vision 6 HD - Fire TV（2019、日本未対応）
         * 2019
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTEU011' ) ? [ 7, 2019 ]
        /**
         * Insignia 4K - Fire TV（2018、日本未対応）
         * 2018
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTJMST12' ) ? [ 6, 2018 ]
        /**
         * Element 4K - Fire TV（2017、日本未対応）
         * 2017
         * Android 5.1, API 22
         * FireOS 5
         */
      : p_hasSubstring( p_strUserAgent, 'AFTRS' ) ? [ 5, 2017 ]
        /**
         * Echo Show 15 (2021)
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AEOHY' ) ? [ 7, 2021 ]
        /**
         * Stellantis（Jeep）- Wagoneer/Grand Wagoneer（日本未対応）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTLFT962X3' ) ? [ 7, 2021 ]
        /**
         * BMW (2022)
         * 2022
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTLBT962E2' ) ? [ 7, 2022 ]
        /**
         * Fire TV Stick 4K Max - 第2世代（2023）- 16GB
         * 2023
         * Android 11, API 30
         * FireOS 8
         */
      : p_hasSubstring( p_strUserAgent, 'AFTKRT' ) ? [ 8, 2023 ]
        /**
         * Fire TV Stick 4K - 第2世代（2023）- 8GB
         * 2023
         * Android 11, API 30
         * FireOS 8
         */
      : p_hasSubstring( p_strUserAgent, 'AFTKM' ) ? [ 8, 2023 ]
        /**
         * Fire TV Stick 4K Max - 第1世代（2021）
         * 2021
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTKA' ) ? [ 7, 2021 ]
        /**
         * Fire TV Stick - 第3世代（2020）
         * 2020
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTSSS' ) ? [ 7, 2020 ]
        /**
         * Fire TV Stick Lite（日本未対応）- 第1世代（2020）
         * 2020
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTSS' ) ? [ 7, 2020 ]
        /**
         * Fire TV Stick - 第2世代（2016～2019）
         * 2020
         * Android 5.1, API 22
         * FireOS 5
         */
      : p_hasSubstring( p_strUserAgent, 'AFTT' ) ? [ 5, 2020 ]
        /**
         * Fire TV Stick 4K - 第1世代（2018）
         * 2018
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTMM' ) ? [ 6, 2018 ]
        /**
         * Fire TV Stick - Basic Edition（2017、日本未対応）
         * 2017
         * Android 5.1, API 22
         * FireOS 5
         */
   // : p_hasSubstring( p_strUserAgent, 'AFTT' ) ? 5
        /**
         * Fire TV - 第3世代（2017）
         * 2017
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTN' ) ? [ 6, 2017 ]
        /**
         * Fire TV - 第2世代（2015）
         * 2015
         * Android 5.1, API 22
         * FireOS 5
         */
      : p_hasSubstring( p_strUserAgent, 'AFTS' ) ? [ 5, 2015 ]
        /**
         * Fire TV Stick - 第1世代（2014）
         * 2014
         * Android 5.1, API 22
         * FireOS 5
         */
      : p_hasSubstring( p_strUserAgent, 'AFTM' ) ? [ 5, 2014 ]
        /**
         * Fire TV - 第1世代（2014）
         * 2014
         * Android 5.1, API 22
         * FireOS 5
         */
      : p_hasSubstring( p_strUserAgent, 'AFTB' ) ? [ 5, 2014 ]
        /**
         * Fire TV Cube - 第3世代（2022）
         * 2022
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTGAZL' ) ? [ 7, 2022 ]
        /**
         * Fire TV Cube - 第2世代（2019）
         * 2019
         * Android 9, API 28
         * FireOS 7
         */
      : p_hasSubstring( p_strUserAgent, 'AFTR' ) ? [ 7, 2019 ]
        /**
         * Fire TV Cube（日本未対応）- 第1世代（2018）
         * 2018
         * Android 7.1, API 25
         * FireOS 6
         */
      : p_hasSubstring( p_strUserAgent, 'AFTA' ) ? [ 6, 2018 ]
        /**
         * Nebulaサウンドバー - Fire TV Edition（2019、日本未対応）
         * 2019
         * Android 7.1, API 25
         * FireOS 6
         */
   // : p_hasSubstring( p_strUserAgent, 'AFTMM' ) ? 6
        /**
         * TCLサブウーファー内蔵サウンドバー - Fire TV Edition（2019、日本未対応）
         * 2019
         * Android 7.1, API 25
         * FireOS 6
         */
   // : p_hasSubstring( p_strUserAgent, 'AFTMM' ) ? 6
      : NaN;

/**
 * @private
 * @return {string} */
whatBrowserAmI.device.FireTV.FIRE_OS_VERSION = fireOSVersionAndFireTVReleased[ 0 ];

/**
 * @private
 * @return {boolean} */
whatBrowserAmI.device.FireTV.is = function(){
    return !!fireOSVersionAndFireTVReleased || isFirefoxOnFireTV || isSilkBrowserForFireTV;
};

/**
 * @private
 * @return {boolean|void} */
whatBrowserAmI.device.FireTV.detect = function(){
    if( whatBrowserAmI.device.FireTV.is() ){
        if( androidVersionWhenFirefoxOnFireOSRequestPcSite ){
            p_setDevice( DEVICE.FireTV );
            p_isPcSiteRequested = true;
        } else {
            p_setDevice( DEVICE.FireTV, fireOSVersionAndFireTVReleased[ 1 ] );
        };
        return true;
    };
};

/**
 * @private
 * @param {number} androidVersion 
 * @return {number}
 */
function _androidVersionToFireTVVersion( androidVersion ){
    return 11 <= androidVersion ? 8 :
            9 <= androidVersion ? 7 :
            7 <= androidVersion ? 6 :
            5 <= androidVersion ? 5 : 0;
};