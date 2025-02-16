goog.provide( 'iAm._deviceIs' );
goog.provide( 'iAm._deviceVersion.gt' );
goog.provide( 'iAm._deviceVersion.gte' );
goog.provide( 'iAm._deviceVersion.lt' );
goog.provide( 'iAm._deviceVersion.lte' );

goog.require( 'iAm.DEFINE.ASSUME_DEVICE' );
goog.require( 'iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION' );
goog.require( 'iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION' );
goog.require( 'iAm.EnumIndex' );
goog.require( 'iAm.conpare' );

/**
 * @packege
 * @param {string | number} deviceName 
 * @return {boolean}
 */
iAm._deviceIs = function( deviceName ){
    if( iAm.DEFINE.ASSUME_DEVICE ){
        return iAm.DEFINE.ASSUME_DEVICE === deviceName;
    };
    return ua[ iAm.EnumIndex.DEVICE ] === deviceName;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._deviceVersion.gt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return ua.conpare( ua[ iAm.EnumIndex.DEVICE_VERSION ], version ) === 1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._deviceVersion.gte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION ){
        if( 0 <= iAm.conpare( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION, version ) === -1 ){
            return false;
        };
    };
    return 0 <= ua.conpare( ua[ iAm.EnumIndex.DEVICE_VERSION ], version );
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._deviceVersion.lt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION ){
        if( 0 <= iAm.conpare( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION, version ) === -1 ){
            return true;
        };
    };
    return ua.conpare( ua[ iAm.EnumIndex.DEVICE_VERSION ], version ) === -1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._deviceVersion.lte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return 0 <= ua.conpare( ua[ iAm.EnumIndex.DEVICE_VERSION ], version );
};
