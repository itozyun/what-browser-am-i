goog.provide( 'whatBrowserAmI.device.BOOX.is' );
goog.provide( 'whatBrowserAmI.device.BOOX.detect' );

/*----------------------------------------------------------------------------//
 *  ONYX BOOX
 *    https://en.wikipedia.org/wiki/Onyx_Boox
 *
 * 
 *  Onyx Boox M92
 *    2011
 * 
 *  Onyx Boox i62
 *    2011
 * 
 *  Onyx Boox i62ML (Moon Light) 
 *    2012
 *
 *  Onyx Boox C65HD/C65ML
 *    2016
 *    Android 2.3
 * 
 *  Onyx Boox i63ML Newton
 *    2014
 *    Android 2.3.1
 *
 *  Onyx BOOX T68
 *    2014
 *    Android 4.0
 * 
 *  Onyx Boox E43
 *    2014
 *    Android 2.3
 * 
 *  Onyx Boox M96
 *    2014
 *    Android 4.0
 *  
 *  Onyx Boox C67ML
 *    2014
 *    Android 4.2
 * 
 *  Onyx Boox i62A
 *    2014
 *    Android 2.3
 * 
 *  Onyx BOOX i86
 *    2015
 *    Android 4.0
 * 
 *  Onyx Boox N96
 *    2016
 *    Android 4.0.4
 * 
 *  Onyx Boox Max
 *    2016
 *    Android 4.0.4
 *
 *  Onyx Boox Max Carta
 *    2017
 *    Android 4.4
 * 
 *  Onyx Boox Max 2
 *    2017
 *    Android 6
 * 
 *  Onyx Boox Max 2 Pro
 *    2017(?)
 *    Android 6.0
 * 
 *  Onyx Boox Max 3
 *    2019
 *    Android 9
 * 
 *  Onyx BOOX Leaf
 *    2022(?)
 * 
 *  Onyx BOOX Leaf2
 * 
 * 
 *  ONYX BOOX Faust
 *    https://onyxboox.com/boox_faust
 *    Android 4.4
 * 
 *  ONYX BOOX Faust 2
 *    https://onyxboox.com/boox_faust2
 *    Android 4.4
 *    https://whatmyuseragent.com/device/3o/onyx-boox-faust-2
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_FAUST2 Build/2021-08-02_12-49_2.1.2_afbb661) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 * 
 *  ONYX BOOX Faust 3
 *    https://onyxboox.com/boox_faust3
 *    Android 4.4(?)
 *    https://whatmyuseragent.com/device/3o/onyx-boox-faust-3
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_FAUST3 Build/2022-08-15_11-38_2.1.2_467fe95) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 * 
 *  ONYX BOOX Darwin 6
 *    https://onyxboox.com/boox_darwin6
 *    Android 4.4
 *    https://whatmyuseragent.com/device/3o/onyx-boox-darwin-6
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_DARWIN6 Build/2020-11-19_17-52_2.1.2_bd78f35) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_DARWIN6 Build/2019-04-03_21-45_1.9.1_9eb9f93) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 *
 *  ONYX BOOX Darwin 7
 *    https://onyxboox.com/boox_darwin7
 *    Android 4.4(?), Audio Output
 *    https://whatmyuseragent.com/device/3o/onyx-boox-darwin-7
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_DARWIN7 Build/2022-01-17_21-12_2.1.2_5b90d57) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_DARWIN7 Build/2021-08-02_11-35_2.1.2_afbb661) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 * 
 *  ONYX BOOX Darwin 8
 *    https://onyxboox.com/boox_darwin8
 *    Android 4.4(?), Audio Output
 *    https://whatmyuseragent.com/device/3o/onyx-boox-darwin-8
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_DARWIN8 Build/2022-08-16_15-16_2.1.2_467fe95) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 * 
 *  ONYX BOOX Darwin 9
 *    https://onyxboox.com/boox_darwin9
 *    Android 11, Audio Output
 *    https://whatmyuseragent.com/device/3o/onyx-boox-darwin-9
 *      > Mozilla/5.0 (Linux; Android 11; DARWIN9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4178.0 Mobile Safari/537.36
 * 
 *  ONYX BOOK KON-TIKI
 *    https://onyxboox.com/boox_kontiki
 *    Android 9
 *    https://whatmyuseragent.com/device/3o/onyx-boox-kon-tiki
 *      > Mozilla/5.0 (Linux; Android 9; KON_TIKI) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OPR/62.3.3146.57763
 * 
 *  ONYX BOOK KON-TIKI 2
 *    https://onyxboox.com/boox_kontiki2
 *    Android 10
 *    https://whatmyuseragent.com/device/3o/onyx-boox-kon-tiki-2
 *      > Mozilla/5.0 (Linux; Android 10; Kon_Tiki2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Safari/537.36
 *      > Mozilla/5.0 (Linux; arm_64; Android 10; Kon_Tiki2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 YaBrowser/21.9.0.359.01 Safari/537.36
 *      > Mozilla/5.0 (Linux; Android 10; Kon_Tiki2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4178.0 Safari/537.36
 * 
 *  ONYX BOOK Vasco da Gama 4
 *    https://onyxboox.com/boox_vasco4
 *    Android 4.4(?)
 *    https://whatmyuseragent.com/device/3o/onyx-boox-gama-4
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_GAMA4 Build/2022-06-11_10-42_2.1.2_df6414e) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 *
 *  ONYX BOOX Livingstone
 *    https://onyxboox.com/boox_livingstone
 *    Android 4.4
 *
 *  ONYX BOOX Livingstone 2
 *    https://onyxboox.com/boox_livingstone2
 *    Android 4.4
 *    https://whatmyuseragent.com/device/3o/onyx-boox-living-stone-2
 *      > Mozilla/5.0 (Linux; Android 11; LIVINGSTONE2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4178.0 Mobile Safari/537.36
 *
 *  ONYX BOOX Lomonosov
 *    https://onyxboox.com/boox_lomonosov
 *    Android 10
 *    https://whatmyuseragent.com/device/3o/onyx-boox-lomonosov
 *      > Mozilla/5.0 (Linux; arm_64; Android 10; Lomonosov) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.167 YaApp_Android/22.76/apad YaSearchBrowser/22.76/apad BroPP/1.0 SA/3 Mobile Safari/537.36
 * 
 *  ONYX BOOX Monte Cristo
 *    https://onyxboox.com/boox_monte-cristo
 *    Android 4.2
 * 
 *  ONYX BOOX Monte Cristo 2
 *    https://onyxboox.com/boox_monte-cristo2
 *    Android 4.2
 * 
 *  ONYX BOOX Monte Cristo 3
 *    https://onyxboox.com/boox_monte-cristo3
 *    Android 4.2
 * 
 *  ONYX BOOX Monte Cristo 4
 *    https://onyxboox.com/boox_monte-cristo4
 *    Android 4.4
 *    https://whatmyuseragent.com/device/3o/onyx-boox-monte-cristo-4
 *      > Mozilla/5.0 (Linux; Android 4.4.4; MC_Cristo4 Build/2021-08-02_13-23_2.1.2_afbb661) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36
 * 
 *  ONYX BOOX Note
 *    https://onyxboox.com/boox_note
 *    Android 6
 * 
 *  ONYX BOOX Note 2
 *    https://onyxboox.com/boox_note2
 *    Android 9
 * 
 *  ONYX BOOX Note 3
 *    https://onyxboox.com/boox_note3
 *    Android 10
 *
 *  ONYX BOOX Note 4
 *    https://onyxboox.com/boox_note4
 *    Android 11
 * 
 *  ONYX BOOX Note 5
 *    https://onyxboox.com/boox_note5
 *    Android 11
 * 
 *  ONYX BOOX Note Pro
 *    2019
 *    https://onyxboox.com/boox_notepro
 *    Android 6
 * 
 *  ONYX BOOX Note Air
 *    https://onyxboox.com/boox_noteair
 *    Android 10
 * 
 *  ONYX BOOX Note Air 2
 *    https://onyxboox.com/boox_noteair2
 *    Android 11
 *    https://whatmyuseragent.com/device/3o/onyx-boox-nova-air-2
 *      > Mozilla/5.0 (Linux; Android 11; NoteAir2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4178.0 Safari/537.36
 * 
 *  ONYX BOOX Note Air 3
 *    https://onyxboox.com/boox_noteair3
 *    Android 12
 * 
 *  ONYX BOOX Note Air 2 Plus
 *    https://onyxboox.com/boox_noteair2plus
 *    Android 11
 *    https://whatmyuseragent.com/device/3o/onyx-boox-nova-air-2-plus
 *      > Mozilla/5.0 (Linux; Android 11; NoteAir2P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4178.0 Safari/537.36
 *      > Mozilla/5.0 (Linux; Android 11; NoteAir2P Build/RKQ1.210614.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/97.0.4692.98 Safari/537.36
 * 
 *   ONYX BOOX Note Air 3 C
 *     https://onyxboox.com/boox_noteair3c
 *     Android 12
 *     https://whatmyuseragent.com/device/3o/onyx-boox-nova-air-c
 *       > Mozilla/5.0 (Linux; Android 11; NovaAirC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
 *       > Mozilla/5.0 (Linux; Android 11; NovaAirC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4178.0 Safari/537.36
 *
 *   Onyx Boox Nova
 *     2018
 * 
 *   ONYX BOOX Nova Pro
 *     2019
 *     https://onyxboox.com/boox_novapro
 *     Android 6(?)
 *     https://whatmyuseragent.com/device/3o/onyx-boox-nova-pro
 *       > Mozilla/5.0 (Linux; Android 6.0.1; MC_NovaPro Build/2019-05-15_12-22_1.9.1_fee1a26; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/44.0.2403.119 Safari/537.36
 *
 *   ONYX BOOX Poke
 *     https://onyxboox.com/boox_poke
 *     2018
 *     Android 6
 * 
 *   ONYX BOOX Poke 2 Color
 *     2020
 *     https://onyxboox.com/boox_poke2color
 *     Android 9
 *     https://whatmyuseragent.com/device/3o/onyx-boox-poke-2-color
 *       > Mozilla/5.0 (Linux; Android 9; Poke2Color Build/2020-10-13_15-52_mc_fa72065; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.158 Mobile Safari/537.36
 * 
 *   Onyx Boox Max Lumi
 *     2020
 *     Android 10
 * 
 *   Onyx Boox Max Lumi 2
 *     2021
 *     Android 11
 * 
 *   Onyx Boox Tab Ultra
 *     2022
 *     Android 11
 *   
 *   Onyx Boox Tab X
 *     2023
 *     Android 11
 *   
 *   ONYX BOOX Poke 4 Lite
 *     2022
 */

/** @return {boolean} */
whatBrowserAmI.device.BOOX.is = function(){
    return p_hasSubstring( p_strUserAgent, ' MC_FAUST'    ) || // Faust 1, 2, 3
           p_hasSubstring( p_strUserAgent, ' MC_DARWIN'   ) || // Darwin 6, 7, 8
           p_hasSubstring( p_strUserAgent, ' DARWIN'      ) || // Darwin 9
           p_hasSubstring( p_strUserAgent, ' KON_TIKI'    ) || // KON-TIKI
           p_hasSubstring( p_strUserAgent, ' Kon_Tiki2'   ) || // KON-TIKI 2
           p_hasSubstring( p_strUserAgent, ' MC_GAME'     ) || // Vasco da Gama 4
           p_hasSubstring( p_strUserAgent, ' LIVINGSTONE' ) || // Livingstone 1, 2
           p_hasSubstring( p_strUserAgent, ' Lomonosov'   ) || // Lomonosov
           p_hasSubstring( p_strUserAgent, ' MC_Cristo'   ) || // Monte Cristo 1, 2, 3, 4
           p_hasSubstring( p_strUserAgent, ' NoteAir'     ) || // Note Air 1, 2, 3, 2 Plus, 3 C
           p_hasSubstring( p_strUserAgent, ' MC_NovaPro'  ) || // Nova Pro
           p_hasSubstring( p_strUserAgent, ' Poke2Color'  );   // Poke 2 Color
};

/** @return {boolean|void} */
whatBrowserAmI.device.BOOX.detect = function(){
    if( whatBrowserAmI.device.BOOX.is() ){
        p_setDevice( DEVICE.BOOX, 1 );
        return true;
    };
};
