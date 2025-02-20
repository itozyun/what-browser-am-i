goog.provide( 'iAm.Fedora' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Fedora = function(){
    return iAm._platformIs( iAm.EnumPlatform.Fedora );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.gt = function( version ){
    return iAm.Fedora() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.gte = function( version ){
    return iAm.Fedora() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.lt = function( version ){
    return iAm.Fedora() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.lte = function( version ){
    return iAm.Fedora() && iAm._platformVersionLte( version );
};
