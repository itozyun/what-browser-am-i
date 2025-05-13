goog.provide( 'iAm._engineIs' );
goog.provide( 'iAm._engineVersionGt' );
goog.provide( 'iAm._engineVersionGte' );
goog.provide( 'iAm._engineVersionLt' );
goog.provide( 'iAm._engineVersionLte' );
goog.provide( 'iAm._safariVersionGt' );
goog.provide( 'iAm._safariVersionGte' );
goog.provide( 'iAm._safariVersionLt' );
goog.provide( 'iAm._safariVersionLte' );

goog.require( 'iAm.DEFINE.ASSUME_ENGINE' );
goog.require( 'iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION' );
goog.require( 'iAm.DEFINE.ASSUME_LT__ENGINE_VERSION' );
goog.require( 'iAm.EnumIndex' );
goog.require( 'iAm.conpare' );
goog.require( 'iAm._webKitVersionToSafariVersion' );

/**
 * @package
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
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersionGt = function( version ){
    if( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return ua.conpare( /** @type {string | number} */ (ua[ iAm.EnumIndex.ENGINE_VERSION ]), version ) === 1;
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersionGte = function( version ){
    if( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ){
        if( 0 <= iAm.conpare( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return 0 <= ua.conpare( /** @type {string | number} */ (ua[ iAm.EnumIndex.ENGINE_VERSION ]), version );
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersionLt = function( version ){
    if( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ){
        if( 0 <= iAm.conpare( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return ua.conpare( /** @type {string | number} */ (ua[ iAm.EnumIndex.ENGINE_VERSION ]), version ) === -1;
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._engineVersionLte = function( version ){
    if( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ){
        if( iAm.conpare( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return 0 <= ua.conpare( /** @type {string | number} */ (ua[ iAm.EnumIndex.ENGINE_VERSION ]), version );
};



/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersionGt = function( version ){
    if( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ){
        if( iAm.conpare( _ASSUME_GTE_SAFARI_VERSION, version ) === 1 ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ){
        if( iAm.conpare( _ASSUME_LT__SAFARI_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return ua.conpare( _AS_SAFARI_VERSION, version ) === 1;
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersionGte = function( version ){
    if( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ){
        if( 0 <= iAm.conpare( _ASSUME_GTE_SAFARI_VERSION, version ) ){
            return true;
        };
    };
    if( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ){
        if( iAm.conpare( _ASSUME_LT__SAFARI_VERSION, version ) <= 0 ){
            return false;
        };
    };
    return 0 <= ua.conpare( _AS_SAFARI_VERSION, version );
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersionLt = function( version ){
    if( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ){
        if( 0 <= iAm.conpare( _ASSUME_GTE_SAFARI_VERSION, version ) ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ){
        if( iAm.conpare( _ASSUME_LT__SAFARI_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return ua.conpare( _AS_SAFARI_VERSION, version ) === -1;
};

/**
 * @package
 * @param {string | number} version 
 * @return {boolean}
 */
iAm._safariVersionLte = function( version ){
    if( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ){
        if( iAm.conpare( _ASSUME_GTE_SAFARI_VERSION, version ) === 1 ){
            return false;
        };
    };
    if( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ){
        if( iAm.conpare( _ASSUME_LT__SAFARI_VERSION, version ) <= 0 ){
            return true;
        };
    };
    return 0 <= ua.conpare( _AS_SAFARI_VERSION, version );
};

/**
 * @private
 * @const {string | number} */
var _ASSUME_GTE_SAFARI_VERSION = iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ? iAm._webKitVersionToSafariVersion( iAm.DEFINE.ASSUME_GTE_ENGINE_VERSION ) : 0;
/**
 * @private
 * @const {string | number} */
var _ASSUME_LT__SAFARI_VERSION = iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ? iAm._webKitVersionToSafariVersion( iAm.DEFINE.ASSUME_LT__ENGINE_VERSION ) : 0;

/**
 * @private
 * @const {string | number} */
var _AS_SAFARI_VERSION = iAm._webKitVersionToSafariVersion( /** @const {string | number} */ (ua[ iAm.EnumIndex.ENGINE_VERSION ]) );
