goog.provide( 'iAm._deviceIs' );
goog.provide( 'iAm._deviceVersion.Gt' );
goog.provide( 'iAm._deviceVersion.Gte' );
goog.provide( 'iAm._deviceVersion.Lt' );
goog.provide( 'iAm._deviceVersion.Lte' );

goog.require( 'iAm.DEFINE.ASSUME_DEVICE' );
goog.require( 'iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION' );
goog.require( 'iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION' );
goog.require( 'who.INDEX' );

/**
 * @packege
 * @param {string | number} deviceName 
 * @return {boolean}
 */
iAm._deviceIs = function( deviceName ){
    if( iAm.DEFINE.ASSUME_DEVICE ){
        return iAm.DEFINE.ASSUME_DEVICE === deviceName;
    };
    return ua[ who.INDEX.DEVICE ] === deviceName;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._deviceVersion.Gt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return ua.conpare( ua[ who.INDEX.DEVICE_VERSION ], version ) === 1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._deviceVersion.Gte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION ){
        if( 0 <= p_conpareVersion( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION, version ) === -1 ){
            return false;
        };
    };
    return 0 <= ua.conpare( ua[ who.INDEX.DEVICE_VERSION ], version );
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._deviceVersion.Lt = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION ){
        if( 0 <= p_conpareVersion( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION, version ) === -1 ){
            return true;
        };
    };
    return ua.conpare( ua[ who.INDEX.DEVICE_VERSION ], version ) === -1;
};

/**
 * @packege
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._deviceVersion.Lte = function( version ){
    if( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MIN_DEVICE_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION ){
        if( p_conpareVersion( iAm.DEFINE.ASSUME_MAX_DEVICE_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return 0 <= ua.conpare( ua[ who.INDEX.DEVICE_VERSION ], version );
};
