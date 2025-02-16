goog.provide( 'iAm._engineIs' );
goog.provide( 'iAm._engineVersion.Gt' );
goog.provide( 'iAm._engineVersion.Gte' );
goog.provide( 'iAm._engineVersion.Lt' );
goog.provide( 'iAm._engineVersion.Lte' );

goog.require( 'iAm.DEFINE.ASSUME_ENGINE' );
goog.require( 'iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION' );
goog.require( 'iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION' );
goog.require( 'iAm.EnumIndex' );
goog.require( 'who.conpare' );

/**
 * @packege
 * @param {string | number} engineName 
 * @return {boolean}
 */
iAm._engineIs = function( engineName ){
    if( iAm.DEFINE.ASSUME_ENGINE ){
        return iAm.DEFINE.ASSUME_ENGINE === engineName;
    };
    return ua[ iAm.EnumIndex.ENGINE ] === engineName;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersion.Gt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
        if( who.conpare( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
        if( who.conpare( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return ua.conpare( ua[ iAm.EnumIndex.ENGINE_VERSION ], version ) === 1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersion.Gte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
        if( 0 <= who.conpare( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
        if( who.conpare( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION, version ) === -1 ){
            return false;
        };
    };
    return 0 <= ua.conpare( ua[ iAm.EnumIndex.ENGINE_VERSION ], version );
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersion.Lt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
        if( 0 <= who.conpare( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
        if( who.conpare( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION, version ) === -1 ){
            return true;
        };
    };
    return ua.conpare( ua[ iAm.EnumIndex.ENGINE_VERSION ], version ) === -1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersion.Lte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
        if( who.conpare( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
        if( who.conpare( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return 0 <= ua.conpare( ua[ iAm.EnumIndex.ENGINE_VERSION ], version );
};

if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
    iAm.MIN_SAFARI_VERSION = webKitVersionToSafariVersion( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION );
};
if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
    iAm.MAX_SAFARI_VERSION = webKitVersionToSafariVersion( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION );
};

/**
 * @private
 * @const {string | number} */
var asSafariVersion = webKitVersionToSafariVersion( ua[ iAm.EnumIndex.ENGINE_VERSION ] );

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersion.Gt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
        if( who.conpare( iAm.MIN_SAFARI_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
        if( who.conpare( iAm.MAX_SAFARI_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return ua.conpare( asSafariVersion, version ) === 1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersion.Gte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
        if( 0 <= who.conpare( iAm.MIN_SAFARI_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
        if( who.conpare( iAm.MAX_SAFARI_VERSION, version ) === -1 ){
            return false;
        };
    };
    return 0 <= ua.conpare( asSafariVersion, version );
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersion.Lt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
        if( 0 <= who.conpare( iAm.MIN_SAFARI_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
        if( who.conpare( iAm.MAX_SAFARI_VERSION, version ) === -1 ){
            return true;
        };
    };
    return ua.conpare( asSafariVersion, version ) === -1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersion.Lte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_ENGINE_VERSION ){
        if( who.conpare( iAm.MIN_SAFARI_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_ENGINE_VERSION ){
        if( who.conpare( iAm.MAX_SAFARI_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return 0 <= ua.conpare( asSafariVersion, version );
};

/**
 * 
 *   https://ja.wikipedia.org/wiki/Safari
 * 
 * iOSのバージョンと Safariバージョンの対応表(2023/11/9 現在
 *   https://qiita.com/yoshitake_1201/items/05a13fd77c18ff380eb6#%E8%AA%BF%E3%81%B9%E6%96%B9
 * 
 * @private
 * @param {string | number} webKitVersion 
 * @return {string | number}
 */
function webKitVersionToSafariVersion( webKitVersion ){
    return ua.conpare( webKitVersion,  51      ) < 0 ?  0.8
         : ua.conpare( webKitVersion,  60      ) < 0 ? '0.8.1'
         : ua.conpare( webKitVersion,  73      ) < 0 ? '0.8.2'
         : ua.conpare( webKitVersion,  85      ) < 0 ?  0.9
         : ua.conpare( webKitVersion,  85.6    ) < 0 ?  1.0
         : ua.conpare( webKitVersion,  85.7    ) < 0 ? '1.0.1'
         : ua.conpare( webKitVersion,  85.8    ) < 0 ? '1.0.2'
         : ua.conpare( webKitVersion, 100      ) < 0 ? '1.0.3'
         : ua.conpare( webKitVersion, 100.1    ) < 0 ?  1.1
         : ua.conpare( webKitVersion, 125      ) < 0 ? '1.1.1'
         : ua.conpare( webKitVersion, 125.1    ) < 0 ?  1.2
         : ua.conpare( webKitVersion,'125.7'   ) < 0 ? '1.2.1'
         : ua.conpare( webKitVersion,'125.9'   ) < 0 ? '1.2.2'
         : ua.conpare( webKitVersion,'125.11'  ) < 0 ? '1.2.3'
         : ua.conpare( webKitVersion, 312      ) < 0 ? '1.2.4'
         : ua.conpare( webKitVersion, 312.3    ) < 0 ?  1.3
         : ua.conpare( webKitVersion, 312.5    ) < 0 ? '1.3.1'
         : ua.conpare( webKitVersion, 412      ) < 0 ? '1.3.2'
         : ua.conpare( webKitVersion, 412.5    ) < 0 ?  2.0
         : ua.conpare( webKitVersion,'416.12'  ) < 0 ? '2.0.1'
         : ua.conpare( webKitVersion, 417.8    ) < 0 ? '2.0.2'
         : ua.conpare( webKitVersion, 419.3    ) < 0 ? '2.0.3'
         : ua.conpare( webKitVersion,'522.11'   ) < 0 ? '2.0.4'
         : ua.conpare( webKitVersion,'522.12'   ) < 0 ?  3.0
         : ua.conpare( webKitVersion,'522.12.1' ) < 0 ? '3.0.2'
         : ua.conpare( webKitVersion,'523.10.3' ) < 0 ? '3.0.3'
         : ua.conpare( webKitVersion,'525.13'   ) < 0 ? '3.0.4'
         : ua.conpare( webKitVersion,'525.18'   ) < 0 ?  3.1
         : ua.conpare( webKitVersion,'525.20.1' ) < 0 ? '3.1.1'
         : ua.conpare( webKitVersion,'525.26.12') < 0 ? '3.1.2'
         : ua.conpare( webKitVersion,'525.27.1' ) < 0 ?  3.2
         : ua.conpare( webKitVersion,'525.28.3' ) < 0 ? '3.2.1'
         : ua.conpare( webKitVersion,'528.16'   ) < 0 ? '3.2.3'
         : ua.conpare( webKitVersion,'530.18'   ) < 0 ? 4.0
         : ua.conpare( webKitVersion,'530.19'   ) < 0 ? '4.0.1'
         : ua.conpare( webKitVersion,'531.9'    ) < 0 ? '4.0.2'
         : ua.conpare( webKitVersion,'531.21.10') < 0 ? '4.0.3'
         : ua.conpare( webKitVersion,'531.22.7' ) < 0 ? '4.0.4'
         : ua.conpare( webKitVersion,'533.16'   ) < 0 ? '4.0.5'
         : ua.conpare( webKitVersion,'533.17.8' ) < 0 ?  4.1
         : ua.conpare( webKitVersion,'533.16'   ) < 0 ? '4.1.1'
         : ua.conpare( webKitVersion,'533.17.8' ) < 0 ?  5 // 4.1
         : ua.conpare( webKitVersion,'533.18.5' ) < 0 ? '5.0.1' // 4.1.1
         : ua.conpare( webKitVersion,'533.19.4' ) < 0 ? '5.0.2' // 4.1.2?
         : ua.conpare( webKitVersion,'533.20.27') < 0 ? '5.0.3' // 4.1.3?
         : ua.conpare( webKitVersion,'534.48.3' ) < 0 ? '5.0.4'
         : ua.conpare( webKitVersion,'534.51.22') < 0 ?  5.1
         : ua.conpare( webKitVersion,'534.52.7' ) < 0 ? '5.1.1'
         : ua.conpare( webKitVersion,'534.53.10') < 0 ? '5.1.2'
         : ua.conpare( webKitVersion,'534.54.16') < 0 ? '5.1.3'
         : ua.conpare( webKitVersion,'534.55.3' ) < 0 ? '5.1.4'
         : ua.conpare( webKitVersion,'534.56'   ) < 0 ? '5.1.5'
         : ua.conpare( webKitVersion,'534.57'   ) < 0 ? '5.1.6'
         : ua.conpare( webKitVersion,'534.58.2' ) < 0 ? '5.1.7'
         : ua.conpare( webKitVersion,'536.25'   ) < 0 ? '5.1.8'
                                                      // 5.1.10
         : ua.conpare( webKitVersion,'536.26'   ) < 0 ?  6.0
         : ua.conpare( webKitVersion,'536.27'   ) < 0 ? '6.0.1'
                                                      // 6.0.2
         : ua.conpare( webKitVersion,'536.29.13') < 0 ? '6.0.3'
         : ua.conpare( webKitVersion,'536.30.1' ) < 0 ? '6.0.4'
         : ua.conpare( webKitVersion,'537.43.58') < 0 ? '6.0.5'
         : ua.conpare( webKitVersion,'537.73.11') < 0 ?  6.1
         : ua.conpare( webKitVersion,'537.73.11') < 0 ? '6.1.1'
                                                      // 6.1.2
                                                      // 6.1.3
                                                      // 6.1.4
                                                      // 6.1.5
                                                      // 6.1.6
                                                      // 6.2
                                                      // 6.2.1
                                                      // 6.2.2
                                                      // 6.2.3
                                                      // 6.2.4
                                                      // 6.2.5
                                                      // 6.2.6
                                                      // 6.2.7
                                                      // 6.2.8
         : ua.conpare( webKitVersion,'537.73.11') < 0 ?  7.0
         : ua.conpare( webKitVersion,'537.76.4' ) < 0 ? '7.0.1'
                                                      // 7.0.2
                                                      // 7.0.3
         : ua.conpare( webKitVersion,'537.77.4' ) < 0 ? '7.0.4'
         : ua.conpare( webKitVersion,'538.35.8' ) < 0 ? '7.0.5'
                                                      // 7.0.6
                                                      // 7.1
                                                      // 7.1.1
                                                      // 7.1.2
                                                      // 7.1.3
                                                      // 7.1.4
                                                      // 7.1.5
                                                      // 7.1.6
                                                      // 7.1.7
                                                      // 7.1.
         : ua.conpare( webKitVersion,'537.86.1.56.2') < 0 ?  8.0
                                                      // 8.0.1
                                                      // 8.0.2
                                                      // 8.0.3
                                                      // 8.0.4
                                                      // 8.0.5
                                                      // 8.0.6
                                                      // 8.0.7
                                                      // 8.0.8
         : ua.conpare( webKitVersion,'602.3.12.0.1') < 0 ?  9.0
                                                      // 9.1.2
                                                      // 9.1.3
                                                      //10.0
                                                      //10.0.1
                                                      //10.0.2
         : ua.conpare( webKitVersion,'602.4.8.0.1') < 0 ? '10.0.2'
         : ua.conpare( webKitVersion,'602.4.8.0.1') < 0 ? '10.0.3'
         : ua.conpare( webKitVersion,'604.1.38.1.7') < 0 ? 10.1
                                                      //10.1.1
                                                      //10.1.2
         : ua.conpare( webKitVersion,'605.1.33.1.2') < 0 ? 11.0
                                                      //11.01
                                                      //11.0.2
                                                      //11.03
         : ua.conpare( webKitVersion,'605.1.15') < 0 ? 11.1
                                                      //11.1.1
         : ua.conpare( webKitVersion,'607.3.9') < 0 ? 12.0
                                                      //12.0.1
                                                      //12.0.2
                                                      //12.0.3
                                                      //12.1
                                                      //13.0
        : ua.conpare( webKitVersion,'608.2.11') < 0 ? '13.0.1'
        : ua.conpare( webKitVersion,'608.2.40') < 0 ? '13.0.2'
                                                      //13.0.3
                                                      //13.0.4
        : ua.conpare( webKitVersion,'610.1.28') < 0 ? '13.0.5'
        : ua.conpare( webKitVersion,'610.2.11') < 0 ? 14.0
        : ua.conpare( webKitVersion,'610.3.7' ) < 0 ? '14.0.1'
        : ua.conpare( webKitVersion,'610.4.3') < 0 ? '14.0.2'
        : ua.conpare( webKitVersion,'611.1.21.161.7') < 0 ? '14.0.3'
        : ua.conpare( webKitVersion,'610.2.11') < 0 ? 14.1
        : ua.conpare( webKitVersion,'611.3.10.1.5') < 0 ? '14.1.1'
        : ua.conpare( webKitVersion,'612.1.29.41.4') < 0 ? '14.1.2'
        : ua.conpare( webKitVersion,'612.2.0.1.20') < 0 ? 15.0
        : ua.conpare( webKitVersion,'612.3.6.1.6') < 0 ?  15.1
        : ua.conpare( webKitVersion,'612.4.9.1.7') < 0 ? 15.2
        : ua.conpare( webKitVersion,'613.1.17.1.6') < 0 ? 15.3
        : ua.conpare( webKitVersion,'613.2.7.1.8') < 0 ? 15.4
        : ua.conpare( webKitVersion,'613.3.9.1.3') < 0 ? 15.5
        : ua.conpare( webKitVersion,'613.3.9.1.16') < 0 ? 15.6
        : ua.conpare( webKitVersion,'614.1.25.9.10') < 0 ? '15.6.1'
        : ua.conpare( webKitVersion,'614.2.9.1.12') < 0 ? 16.0
        : ua.conpare( webKitVersion,'614.2.9.1.12') < 0 ? 16.1
                                                       // 16.2
        : ua.conpare( webKitVersion,'614.4.6.11.7') < 0 ? 16.3
        : ua.conpare( webKitVersion,'615.1.26.101.10') < 0 ? 16.4
        : ua.conpare( webKitVersion,'615.2.9.11.4') < 0 ? '16.4.1'
        : ua.conpare( webKitVersion,'615.2.9.11.7') < 0 ? 16.5
        : ua.conpare( webKitVersion,'615.2.9.11.9') < 0 ? '16.5.1'
        : ua.conpare( webKitVersion,'615.3.12.11.2') < 0 ? '16.5.2'
        : ua.conpare( webKitVersion,'616.2.9.11.10') < 0 ? 16.6
                                                        // 16.6.1
                                                        // 17.0
        : ua.conpare( webKitVersion,'616.2.9.11.12') < 0 ? 17.1
        : ua.conpare( webKitVersion,'617.1.17.11.11') < 0 ? '17.1.2'
        : ua.conpare( webKitVersion,'617.1.17.11.12 ') < 0 ? 17.2
        : ua.conpare( webKitVersion,'617.2.4.11.9') < 0 ? '17.2.1'
        : ua.conpare( webKitVersion,'617.2.4.11.12')  < 0 ? 17.3
        : ua.conpare( webKitVersion,'618.1.15')       < 0 ? '17.3.1'
        : ua.conpare( webKitVersion,'618.1.15.111.8') < 0 ? 17.4
        : ua.conpare( webKitVersion,'618.2.12') < 0 ? '17.4.1'
        :                                               17.5
        
};
