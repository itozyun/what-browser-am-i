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
