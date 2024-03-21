goog.provide( 'whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.SamsungInternet.LT2_NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.SamsungInternet.is' );
goog.provide( 'whatBrowserAmI.engine.SamsungInternet.detect' );

/*----------------------------------------------------------------------------//
 *  SamsungInternet
 *
 *  https://issuetracker.google.com/issues/36957795
 *    Canvas clearRect failing to clear
 *  https://stackoverflow.com/questions/14948720/is-it-possible-to-detect-samsung-stock-browser
 *    Is it possible to detect samsung stock browser
 * 
 *  https://gist.github.com/poshaughnessy/5718717a04db20a02e9fdb3fc16e2258
 *  https://gist.github.com/NielsLeenheer/4daa6a9ce7f4a0f4733d
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.SamsungInternet = {};

/**
 * https://developers.whatismybrowser.com/useragents/explore/software_name/samsung-browser/
 * スマホに登場するのは 4.4.4 以降で SamsungBrowser/2.0 から。
 * SMART-TV には /1.0 から。Tizen 2.3
 * 
 * @const {number} */
whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION = p_getNumber( p_strUserAgent, 'SamsungBrowser/' );

/**
 * https://gist.github.com/uupaa/b25c9cf47bbeedea5a7f
 * Android 4.4 から Android Browser は Chrome WebView をベースにしているとのことなので、ちょっと古めの Chrome という扱いで良さそうです。
 * 
 * SamsungBrowser/2.0 未満のバージョン
 * @const {number} */
whatBrowserAmI.engine.SamsungInternet.LT2_NAVIGATOR_VERSION = !whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION &&
    [].pop && // Array.prototype.pop を実装しないブラウザも判定対象なので、ここで除外する
    (function(){
        var device;

        var unversionedDevices = (
                'GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 ' +                   // Galaxy S III          , 2012.05, 4.0.4~4.4.4
                'SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 ' +
                'SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S ' +
                'GT-I8160 ' +                                                         // Galaxy Ace 2          , 2012.05, 2.3.6~4.1.2
                'GT-I8260 GT-I8262 ' +                                                // Galaxy Core           , 2013.06, 4.1.2
                'SM-G350 SM-G352 ' + // SM-G3502 SM-G3520                             // Galaxy Core Plus      , 2013.10, 4.2.2
                'SM-G386F SM-G386T1' +                                                // Galaxy Core LTE       , 2014.03, 4.2.2
                'GT-N7000 GT-N7005 SHV-E160 SC-05D ' +                                // Galaxy Note           , 2011.10, 2.3.6~4.1.2
                'SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 ' +
                // GT-N7000B SHV-E160K SHV-E160L SGH-I717I 
                'GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 ' +            // Galaxy Note II        , 2012.09, 4.1.1~4.4.2
                'SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 ' +
                // SGH-I317M SGH-T889V GT-N7108D SHV-E250K SHV-E250L SHV-E250S 
                'GT-N5100 GT-N5110 GT-N5120 ' +                                       // Galaxy Note 8.0       , 2013.04, 4.1.2~4.4.2
                'GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 ' +                     // Galaxy Note 10.1      , 2012.02, 4.0.3~4.4.2
                'GT-I9100 GT-I9108 GT-I9210 ' +                                       // Galaxy S II           , 2011.05, 2.3  ~4.1.2
                'SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 '+
                'SHW-M250 ' +
                'SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 ' +
                // GT-I9100G GT-I9100T GT-I9100M GT-I9100P GT-I9210T SGH-I727R SGH-T989D SHW-M250K SHW-M250L SHW-M250S 
                'GT-I9105 ' + // GT-I9105                                             // Galaxy S II Plus      , 2013.01, 4.1.2~4.2.2
                'GT-I8190 ' + // GT-I8190N                                            // Galaxy S III Mini     , 2012.10, 4.1.1~4.1.2
                'GT-I8200 ' + /* GT-I8200N */                                         // Galaxy S III Mini VE  , 2014.03, 4.2.2
                'SM-G730A ' +                                                         // Galaxy S III Mini     , 2014.06, 4.4
                'GT-P3100 GT-P3110 GT-P3113 SCH-I705 ' +                              // Galaxy Tab 2 7.0      , 2012.04, 4.0.3~4.2.2
                'GT-P5100 GT-P5110 GT-P5113 SCH-I915 ' +                              // Galaxy Tab 2 10.1     , 2012.04, 4.0.3~4.2.2
                'SM-G3508 SM-G3509 ' + /* SM-G3502 SM-G3502U */                       // Galaxy Trend 3        , 2013.10, 4.2.2~ 
                'GT-S7580 GT-S7582 ' +                                                // Galaxy Trend Plus(S Duos 2), 2013.12, 4.2
                'GT-S6310 GT-S6312 GT-S6313T' // GT-S6310L                            // Galaxy Young          , 2013.03, 4.1.2
            ).split( ' ' );
        
        while( device = unversionedDevices.pop() ){
            if( p_hasSubstring( p_strUserAgent, device ) ){
                return parseFloat( p_Version.NAVIGATOR_VERSION ) < 2 ? p_Version.NAVIGATOR_VERSION : 0.9;
            };
        };

        var versionedDevices = (
            // Galaxy J (SC-02F) にも Chrome 28 相当と主張する S Browser が搭載されています。
            'SC-02F SGH-N075 ' +                                                      // Galaxy J              , 2013.10, 4.3
            'GT-S7270 GT-S7272 GT-S7275R ' + // GT-S720?                              // Galaxy Ace 3          , 2013.06, 4.2.2
            'GT-I9150 GT-I9152 GT-I9200 GT-I9205 ' +                                  // Galaxy Mega           , 2013.04, 4.2.2

            'GT-I9500 GT-I9506 SC-04E SGH-N045 ' +                                    // Galaxy S4             , 2013.04, 4.2.2
            'GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 ' +      // Galaxy S4 Mini        , 2013.07, 4.2.2, 
            'GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B ' +                     // Galaxy Win            , 2013.03, 4.1.2, 
            'SM-N900 N9000 N9002 SC-01F SCL22 ' + // SM-N900D SM-N900J                // Galaxy Note 3         , 2013.09, 4.3
            // 'SM-N9005 SM-N9006 SM-N900A SM-N900T SM-N900P SM-N900V SM-N900R4 SM-N900W8 '
            'SM-G7100 SM-G7102 SM-G7105 ' +                                           // Galaxy Grand 2        , 2013.11, 4.3
            'SM-N750 ' +                                                              // Galaxy Note 3 Neo     , 2014.01, 4.3   
            // 'SM-N7509V SM-N7506V SM-N7502 SM-N750K SM-N750L SM-N750S SM-N7507, SM-N7500Q, SM-N7505L, SM-N7505 '
            'SM-P600 SM-P601 SM-P605 ' +                                              // Galaxy Note 10.1(2014), 2013.09, 4.3
            'GT-I9301I GT-I9300RWI ' +                                                // Galaxy S3 Neo         , 2012.03, 4.0.4
            'SGH-T399 ' +                                                             // Galaxy Light          , 2013.10, 4.2.2?
            'SM-P900 SM-P901 SM-P90 SM-P905 ' +                                       // Galaxy Note Pro       , 2014.02, 4.4.2
            'GT-I9295 SGH-I537 ' +                                                    // Galaxy S4 Active      , 2013.06, 4.2.2
            'SHV-E330S GT-I9507V ' +                                                  // Galaxy S4 Advance     , 2013.    4.2.2
            'GT-I9505 GT-I9515 SGH-I337 ' +                                           // Galaxy S4 VE(Neo)     , 2013.03, 4.2.2
            'SM-T230 SM-T231 SM-T235 SM-T237 403SC ' +  // (SM-T237Z)                 // Galaxy Tab 4(7.0)     , 2014.03, 4.4.2
            'SM-T330NU SM-T331NU SM-T337V ' +                                         // Galaxy Tab 4(8.0)     , 2014.03, 4.4.2
            'SM-T530 SM-T531 SM-T535 ' +                                              // Galaxy Tab 4(10.1)    , 2014.03, 4.4.2
            'M-T320 SM-T321 SM-T325 ' +                                               // Galaxy Tab Pro 8.4    , 2014.01, 4.4
            'SM-T520 SM-T525 ' +                                                      // Galaxy Tab Pro 10.1   , 2014.02, 4.4
            'SM-T900 SM-T905 ' +                                                      // Galaxy Tab Pro 12.2   , 2014.02, 4.4
            'SM-T700 SM-T705 SM-T707V ' +                                             // Galaxy Tab S 8.4      , 2014.07, 4.4.2
            'SM-T800 SM-T805 SM-T807 ' + // 'SM-T807P SM-T807V'                       // Galaxy Tab S 10.5     , 2014.06, 4.4.2
            'SM-A300 ' + //SM-A300H SM-A300H/DS SM-A300M/DS SM-A300F SM-A300F         // Galaxy A3             , 2014.10, 4.4.4
            'SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G ' +    // Galaxy A5             , 2014.10, 4.4.4
            'SM-A500H SM-A500HQ SM-A500K ' +
            'SM-G850 ' +                                                              // Galaxy Alpha          , 2014.08, 4.4.4
            // SM-G850F SM-G850FQ SM-G850K SM-G850L SM-G850M SM-G850S SM-G850W SM-G850Y
            'SM-C115 SM-C111 ' +                                                      // Galaxy S4 Zoom        , 2014.04, 4.4.2
            'SM-G750F SM-G7508 SM-G7508Q SM-G750H ' +                                 // Galaxy Mega 2         , 2014.09, 4.4.3
            'GT-I9301I ' + // GT-I9300I                                               // Galaxy S III Neo      , 2014.04, 4.3
            'SM-900 SC-04F SCL23 ' + // SM-G900D SM-G900J                             // Galaxy S5             , 2014.04, 4.4.2
            // SM-G900F SM-G900I SM-G900M SM-G900T SM-G900W8 SM-G900H SM-G900FD SM-G900P SM-G900A SM-G9008W SM-G900L SM-G900FQ
            'SM-G906S SM-G906K SM-G906L ' +                                           // Galaxy S5 LTE         , 2014.07, 4.4.2
            'SM-G870A SM-N915 SC-02G ' + // SM-N915D                                  // Galaxy S5 Active      , 2014.05, 4.4.2
            // SM-G8508S                                                              // Galaxy Alpha(S801)    , 2014.08, 4.4.4
            'SM-800'                                                                  // Galaxy S5 Mini        , 2014.07, 4.4.2
            // SM-G800A SM-G800F SM-G800H SM-G800H/DS SM-G800M SM-G800Y SM-G800R4

            //'SM-G9105 ' +                            // Galaxy Round      , 2013.10, 4.3
            //'SM-G3815 ' +                            // Galaxy Express 2  , 2013.10, 4.2.2
            // 'GT-S7260 ' +                           // Galaxy Star PRO   , 2013.10, 4.1.2 // http://webcache.googleusercontent.com/search?q=cache:OLmO9AXHO5wJ:www.mforum.ru/phones/samsunggts7260galaxystarpro.htm

            //'SGH-N075 ' +                            // Galaxy J          , 2013.12, 4.3
            //'SM-G3812 SM-G3818 SM-G3819 SM-G3819D ' +// Galaxy Win Pro    , 2013.12, 4.2.2
            //'GT-I9060 ' +                            // Galaxy Grand Neo  , 2014.01, 4.3, Known as "Galaxy Grand Lite"

            //'SM-G360 ' +                             // Galaxy Win 2      , 2014.03, 4.4.4?  
            
            //'SM-G310H ' +                            // Galaxy Ace Style  , 2014.05, 4.4.2?
            //'SM-C115 ' +                             // Galaxy K Zoom     , 2014.05, 4.4.2?

            //'SM-G355H ' +                            // Galaxy Core 2     , 2014.07, 4.4.2
            //'SM-G313HU ' +                           // Galaxy S Duos 3   , 2014.08, 4.4.2
            //'SM-G313F SM-G313MU SM-G313M SM-G3139 ' +// Galaxy Ace 4      , 2014.08, 4.4.2
            //'SM-G350E ' +                            // Galaxy Star 2 Plus, 2014.08, 4.4.2
            //'SM-G110B SM-G110B/DS SM-G110H SM-G110M' +
                                                    // Galaxy Pocket 2   , 2014.09, 4.4.2
            //'SM-G130H'                               // Galaxy Young 2    , 2014.10, 4.4.2
            //'SM-C1010 ' +                            // Galaxy S4 Zoom    , 2013.06, 4.2.2
        ).split( ' ' );

        while( device = versionedDevices.pop() ){
            if( p_hasSubstring( p_strUserAgent, device ) ){
                return p_Version.NAVIGATOR_VERSION;
            };
        };
    })() || NaN;

/** @return {boolean} */
whatBrowserAmI.engine.SamsungInternet.is = function(){
    return !!whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION ||
           p_platformName === PLATFORM.Android && p_surelyPcSiteRequested && whatBrowserAmI.engine.SamsungInternet.LT2_NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.SamsungInternet.detect = function(){
    if( whatBrowserAmI.engine.SamsungInternet.is() ){
        p_setEngine(
            ENGINE.SamsungInternet,
            whatBrowserAmI.engine.SamsungInternet.NAVIGATOR_VERSION || whatBrowserAmI.engine.SamsungInternet.LT2_NAVIGATOR_VERSION
        );
        return true;
    };
};