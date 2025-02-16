goog.provide( 'iAm._platformIs' );
goog.provide( 'iAm._platformVersion.gt' );
goog.provide( 'iAm._platformVersion.gte' );
goog.provide( 'iAm._platformVersion.lt' );
goog.provide( 'iAm._platformVersion.lte' );

goog.require( 'iAm.DEFINE.ASSUME_PLATFORM' );
goog.require( 'iAm.DEFINE.ASSUME_MIN_PLATFORM_VERSION' );
goog.require( 'iAm.DEFINE.ASSUME_MAX_PLATFORM_VERSION' );
goog.require( 'iAm.EnumIndex' );
goog.require( 'iAm.conpare' );

/**
 * @packege
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
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._platformVersion.gt = function( version ){
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
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._platformVersion.gte = function( version ){
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
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._platformVersion.lt = function( version ){
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
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._platformVersion.lte = function( version ){
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
