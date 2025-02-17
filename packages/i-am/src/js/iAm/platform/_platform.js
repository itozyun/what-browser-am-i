goog.provide( 'iAm._platformIs' );
goog.provide( 'iAm._platformVersionGt' );
goog.provide( 'iAm._platformVersionGte' );
goog.provide( 'iAm._platformVersionLt' );
goog.provide( 'iAm._platformVersionLte' );

goog.require( 'iAm.DEFINE.ASSUME_PLATFORM' );
goog.require( 'iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION' );
goog.require( 'iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION' );
goog.require( 'iAm.EnumIndex' );
goog.require( 'iAm.conpare' );

/**
 * @package
 * @param {string | number} platformName 
 * @return {boolean}
 */
iAm._platformIs = function( platformName ){
    if( iAm.DEFINE.ASSUME_PLATFORM ){
        return iAm.DEFINE.ASSUME_PLATFORM === platformName;
    };
    return ua[ iAm.EnumIndex.PLATFORM ] === platformName;
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._platformVersionGt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return ua.conpare( ua[ iAm.EnumIndex.PLATFORM_VERSION ], version ) === 1;
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._platformVersionGte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION ){
        if( 0 <= iAm.conpare( iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION, version ) === -1 ){
            return false;
        };
    };
    return 0 <= ua.conpare( ua[ iAm.EnumIndex.PLATFORM_VERSION ], version );
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._platformVersionLt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION ){
        if( 0 <= iAm.conpare( iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION, version ) === -1 ){
            return true;
        };
    };
    return ua.conpare( ua[ iAm.EnumIndex.PLATFORM_VERSION ], version ) === -1;
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._platformVersionLte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return 0 <= ua.conpare( ua[ iAm.EnumIndex.PLATFORM_VERSION ], version );
};
