goog.provide( 'iAm._engineIs' );
goog.provide( 'iAm._engineVersion.Gt' );
goog.provide( 'iAm._engineVersion.Gte' );
goog.provide( 'iAm._engineVersion.Lt' );
goog.provide( 'iAm._engineVersion.Lte' );

goog.require( 'iAm.DEFINE.ASSUME_ENGINE' );
goog.require( 'iAm.DEFINE.ASSUME_MIN_VERSION' );
goog.require( 'iAm.DEFINE.ASSUME_MAX_VERSION' );
goog.require( 'whatBrowserAmI.INDEX' );

/**
 * @packege
 * @param {string | number} engineName 
 * @return {boolean}
 */
iAm._engineIs = function( engineName ){
    if( iAm.DEFINE.ASSUME_ENGINE ){
        return iAm.DEFINE.ASSUME_ENGINE === engineName;
    };
    return ua[ whatBrowserAmI.INDEX.ENGINE ] === engineName;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersion.Gt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MIN_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MAX_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return ua.conpare( ua[ whatBrowserAmI.INDEX.ENGINE_VERSION ], version ) === 1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersion.Gte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_VERSION ){
        if( 0 <= p_conpareVersion( iAm.DEFINE.ASSUME_MIN_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MAX_VERSION, version ) === -1 ){
            return false;
        };
    };
    return 0 <= ua.conpare( ua[ whatBrowserAmI.INDEX.ENGINE_VERSION ], version );
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersion.Lt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_VERSION ){
        if( 0 <= p_conpareVersion( iAm.DEFINE.ASSUME_MIN_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MAX_VERSION, version ) === -1 ){
            return true;
        };
    };
    return ua.conpare( ua[ whatBrowserAmI.INDEX.ENGINE_VERSION ], version ) === -1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersion.Lte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MIN_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MAX_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return 0 <= ua.conpare( ua[ whatBrowserAmI.INDEX.ENGINE_VERSION ], version );
};


iAm.MIN_SAFARI_VERSION = webKitVersionToSafariVersion( iAm.DEFINE.ASSUME_MIN_VERSION );

iAm.MAX_SAFARI_VERSION = webKitVersionToSafariVersion( iAm.DEFINE.ASSUME_MAX_VERSION );

/**
 * @private
 * @const {string | number} */
var asSafariVersion = webKitVersionToSafariVersion( ua[ whatBrowserAmI.INDEX.ENGINE_VERSION ] );

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersion.Gt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_VERSION ){
        if( p_conpareVersion( iAm.MIN_SAFARI_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_VERSION ){
        if( p_conpareVersion( iAm.MAX_SAFARI_VERSION, version ) <= 0 ){
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
    if( iAm.DEFINE.ASSUME_MIN_VERSION ){
        if( 0 <= p_conpareVersion( iAm.MIN_SAFARI_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_VERSION ){
        if( p_conpareVersion( iAm.MAX_SAFARI_VERSION, version ) === -1 ){
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
    if( iAm.DEFINE.ASSUME_MIN_VERSION ){
        if( 0 <= p_conpareVersion( iAm.MIN_SAFARI_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_VERSION ){
        if( p_conpareVersion( iAm.MAX_SAFARI_VERSION, version ) === -1 ){
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
    if( iAm.DEFINE.ASSUME_MIN_VERSION ){
        if( p_conpareVersion( iAm.MIN_SAFARI_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_VERSION ){
        if( p_conpareVersion( iAm.MAX_SAFARI_VERSION, version ) <= 0 ){
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
};
